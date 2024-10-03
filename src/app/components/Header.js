import styles from "../page.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <a href="/city/Paris">Paris</a>
          </li>
          <li>
            <a href="/city/London">London</a>
          </li>
          <li>
            <a href="/city/Rome">Rome</a>
          </li>
          <li>
            <a href="/city/Monaco">Monaco</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
