import styles from "/styles/Timezones.module.css";
import Card from "./Card";

const Timezones = ({timezones, setTimezones}) => {
  return (
    <div className={styles.items}>
      {timezones.length > 0 &&
        timezones.map((timezone, i) => {
          return (
            <Card
              key={i}
              timezone={timezone}
              setTimezones={setTimezones}
              timezones={timezones}
            />
          );
        })}
    </div>
  );
};

export default Timezones;
