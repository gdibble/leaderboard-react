import Header from "../components/Header"
import Leaderboard from "../components/Leaderboard"
import styles from "../styles/App.module.css"


export default () => (
  <div className={styles.container}>
    <Header />
    <main className={styles.main}>
      <Leaderboard />
    </main>
  </div>
)
