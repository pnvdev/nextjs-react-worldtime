import styles from "/styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/pnvdev"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by pnvdev
      </a>
    </footer>
  );
};

export default Footer;
