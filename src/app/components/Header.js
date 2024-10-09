import styles from "../page.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <a href="/city/Paris">PARIS</a>
          </li>
          <li>
            <a href="/city/London">LONDON</a>
          </li>
          <li>
            <a href="/city/Rome">ROME</a>
          </li>
          <li>
            <a href="/city/Monaco">MONACO</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
