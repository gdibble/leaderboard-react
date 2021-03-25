import React from "react"
import Head from "next/head"
import styles from "../styles/Header.module.css"

const title = "Leaderboard"

const Header = () => (
  <>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header className={styles.header}>
      <h1>{title}</h1>
    </header>
  </>
)

export default Header
