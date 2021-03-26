import "semantic-ui-css/semantic.min.css"
import Header from "../components/Header"
import Leaderboard from "../components/Leaderboard"
import styles from "../styles/App.module.css"


const Index = () => (
  <div className={styles.container}>
    <Header />
    <main className={styles.main}>
      <Leaderboard />
    </main>
  </div>
)

export default Index
