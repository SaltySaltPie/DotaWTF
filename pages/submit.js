import React, { useState } from "react";
import axios from "axios";
import styles from "../styles/submit.module.scss";

function Submit() {
  const [type, setType] = useState("");
  const [gameID, setGameID] = useState("");
  const [playerName, setplayerName] = useState("");
  const [heroes, setHeroes] = useState("");
  const [timeStamp, setTimeStamp] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  const submitEmail = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3001/submit", {
      type: type,
      gameID: gameID,
      playerName: playerName,
      heroes: heroes,
      timeStamp: timeStamp,
      description: description,
    });
    if (res.status === "success") {
      alert(res.status);
      setStatus("success");
    }
    if (res.status === "failed") {
      alert(res.status);
      setStatus("failed");
    }
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
          <h4>Game ID</h4>
          <input
            type="number"
            placeholder="6123456789"
            onChange={(e) => setGameID(e.target.value)}
            value={gameID}
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
        {status !== "" ? <div>{status}</div> : null}
        <div className="input-desc">
          <button type="submit" onClick={(e) => submitEmail(e)}>
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default Submit;
