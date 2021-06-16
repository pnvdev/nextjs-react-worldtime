import styles from "/styles/Search.module.css";

const Search = ({cities, query, _onInput, _onClick, timezones}) => {
  return (
    <div className={styles.search}>
      <input className={styles.input} type="text" value={query} onInput={_onInput} />
      {cities.length > 0 && query && (
        <section className={styles.section}>
          {cities.filter(city => city.toLowerCase().includes(query.toLowerCase())).slice(0, 10)
            .map((item, i) =>
              <article className={styles.article} key={i} onClick={_onClick} >
                {item}
              </article>
            )}
        </section>
        )
      }
    </div>
  );
};

export default Search;
