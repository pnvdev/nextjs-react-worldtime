import { useState, useEffect } from "react";
import styles from "../styles/Index.module.css";

import Header from "../components/Header";
import Search from "../components/Search";
import Timezones from "../components/Timezones";
import Footer from "../components/Footer";

export default function Home() {
  const [query, setquery] = useState("");
  const [cities, setCities] = useState([]);
  const initialState = () =>
    typeof window !== "undefined" && window.localStorage.getItem("timezones")
      ? JSON.parse(window.localStorage.getItem("timezones"))
      : [];
  const [timezones, setTimezones] = useState(initialState);

  const _onInput = (e) => {
    console.log(e.target.value);
    setquery(e.target.value);
  };

  const _onClick = (e) => {
    setquery("");
    setTimezones([...timezones, e.target.innerText]);
  };

  useEffect(async () => {
    await fetch(`${process.env.NEXT_PUBLIC_URL_API}/timezones`)
      .then((res) => res.json())
      .then(setCities);
  }, []);

  useEffect(
    () => window.localStorage.setItem("timezones", JSON.stringify(timezones)),
    [timezones]
  );

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        <Search cities={cities} query={query} _onInput={_onInput} _onClick={_onClick} timezones={timezones} />
        <Timezones timezones={timezones} setTimezones={setTimezones} />
      </main>
      <Footer />
    </div>
  );
}
