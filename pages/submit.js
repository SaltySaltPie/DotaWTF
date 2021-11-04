import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/submit.module.scss";

function Submit() {
  const [type, setType] = useState("");
  const [gameID, setGameID] = useState("");
  const [playerName, setplayerName] = useState("");
  const [heroes, setHeroes] = useState("");
  const [timeStamp, setTimeStamp] = useState("");
  const [description, setDescription] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [steamID, setSteamID] = useState("");

  const clearInputs = () => {
    setType("");
    setGameID("");
    setplayerName("");
    setHeroes("");
    setTimeStamp("");
    setDescription("");
    setSteamID("");
  };

  const submitEmail = async (e) => {
    e.preventDefault();
    if (gameID.length < 9) {
      setIsEmpty(true);
      setTimeout(() => {
        setIsEmpty(false);
      }, 1000);
      return;
    }
    setIsSending(true);
    setStatus("Sending");
    const res = await axios.post("/api/submit", {
      type: type,
      gameID: gameID,
      playerName: playerName,
      heroes: heroes,
      timeStamp: timeStamp,
      description: description,
      steamID: steamID,
      time: Date.now(),
    });
    if (res.data.status === "success") {
      setStatus("Submit success! Thank You For Your Submission");
      clearInputs();
    }
    if (res.status === "failed") {
      setStatus("Submit failed! Please contact Administrator");
    }
    setIsSending(false);
  };

  return (
    <section className={styles.submit_container}>
      <h1>Submit Your Play</h1>
      <form action="" className="">
        <div className={styles.input_item}>
          <h4>Type + Hero</h4>
          <input
            type="text"
            placeholder="Win/Fail/Rampage/skilled play/ThugLife/bug..."
            onChange={(e) => setType(e.target.value)}
            value={type}
          />
        </div>
        <div className={styles.input_item}>
          <h4>
            Game ID <span className="red">*</span>
          </h4>
          <input
            type="number"
            placeholder="6123456789"
            onChange={(e) => setGameID(e.target.value)}
            value={gameID}
            className={isEmpty ? `${styles["error"]}` : null}
          />
        </div>
        <div className={styles.input_item}>
          <h4>Player Name</h4>
          <input
            type="text"
            placeholder="Dota 3 Confirmed"
            onChange={(e) => setplayerName(e.target.value)}
            value={playerName}
          />
        </div>
        <div className={styles.input_item}>
          <h4>Heroes</h4>
          <input
            type="text"
            placeholder="Crytal Mayden (mid); Gyro (pos 5)"
            onChange={(e) => setHeroes(e.target.value)}
            value={heroes}
          />
        </div>
        <div className={styles.input_item}>
          <h4>TimeStamp</h4>
          <input
            type="text"
            placeholder="30:25 In-game"
            onChange={(e) => setTimeStamp(e.target.value)}
            value={timeStamp}
          />
        </div>
        <div className={styles.input_item}>
          <h4>Description</h4>
          <textarea
            placeholder="Wombo Combo EarthShaker Magnus and Invoker"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className={styles.input_desc}
          />
        </div>
        <div className={styles.input_item}>
          <h4>
            SteamLink<span className="grey">(optional)</span>
          </h4>
          <input
            type="text"
            placeholder="https://steamcommunity.com/id/#######"
            onChange={(e) => setSteamID(e.target.value)}
            value={steamID}
          />
        </div>
        <div className="input-desc">
          {status === "" ? null : (
            <div className={status[7] === "s" ? "green" : "red"}>{status}</div>
          )}
          {isSending === false ? (
            <button type="submit" onClick={(e) => submitEmail(e)}>
              Submit
            </button>
          ) : null}
        </div>
      </form>
    </section>
  );
}

export default Submit;
