import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL,
    pass: process.env.WORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`=== Server is ready to take message ${success} ===`);
});

export default function handler(req, res) {
  if (req.method === "POST") {
    const data = `
      <div>
        <p>
          <span style="font-weight: bold;">
            Type (Win/Fail/Rampage/skilled play/ThugLife/bug...) + Hero:{" "}
          </span>
          <span>${req.body.type}</span>
        </p>
        <p>
          <span style="font-weight: bold;">Game ID: </span>
          <span>${req.body.gameID}</span>
        </p>
        <p>
          <span style="font-weight: bold;">Heroes: </span>
          <span>${req.body.heroes}</span>
        </p>
        <p>
          <span style="font-weight: bold;">Min Replay: </span>
          <span>${req.body.timeStamp}</span>
        </p>
        <p>
          <span style="font-weight: bold;">Description: </span>
          <span>${req.body.description}</span>
          <div>Message is sent from dotawtf.herokuapp.com</div>
        </p>
        <p>
          <div>WebApp is written by SaltPie</div>
        </p>
      </div>`;
    let mailOptions = {
      from: "test@gmail.com",
      to: process.env.RECEIVER,
      subject: req.body.type,
      html: data,
    };
    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        console.log("error: ", err);
        res.status(400).json({ status: "failed" });
      } else {
        console.log("Email sent");
        res.status(200).json({ status: "success" });
      }
    });
  }
}
