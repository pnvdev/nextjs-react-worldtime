import { useState, useEffect } from "react";
import { handleData } from "/helpers/handleData";
import styles from "/styles/Card.module.css";

import { RiCloseCircleFill } from "react-icons/ri";

const Card = ({ timezone, timezones, setTimezones }) => {
  const [timezoneData, setTimezoneData] = useState({});
  const [status, setStatus] = useState("initial");

  useEffect(() => {
    let name = timezone.replace(/\//g, "&");

    fetch(`${process.env.NEXT_PUBLIC_URL_API}/timezone/${name}`)
      .then((res) => res.json())
      .then((json) => setTimezoneData(handleData(json)))
      .then(() => setStatus("resolve"));
  }, []);

  useEffect(() => {
    let name = timezone.replace(/\//g, "&");

    const timeout = setTimeout(() => {
      fetch(`${process.env.NEXT_PUBLIC_URL_API}/timezone/${name}`)
        .then((res) => res.json())
        .then((json) => setTimezoneData(handleData(json)))
        .then(() => setStatus("resolve"));
    }, 5000);

    return () => clearTimeout(timeout);
  });

  return (
    <>
      {status === "resolve" && (
        <div className={styles.card}>
          <RiCloseCircleFill
            className={styles.close}
            onClick={() =>
              setTimezones(timezones.filter((current) => current != timezone))
            }
          />
          <div className={styles.timezone}>{timezone.replace(/_/g, " ")}</div>
          <div>{timezoneData.date}</div>
          <div>{timezoneData.time}</div>
        </div>
      )}
    </>
  );
};

export default Card;
