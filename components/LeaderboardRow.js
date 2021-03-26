import { useRef, useEffect } from "react"
import PropTypes from "prop-types"
import axios from "axios"
import styles from "../styles/LeaderboardRow.module.css"


const transPx = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="

function LeaderboardRow({ user, rank }) {
  const { name, pic, score } = user
  const imgTag = useRef(null)
  const getSrc = async () => {
    axios.get(pic, { responseType:"blob" })
    .then(response => {
      const reader = new window.FileReader()
      reader.readAsDataURL(response.data)
      reader.addEventListener("load", () => {
        const imageDataUrl = reader.result
        imgTag.current.setAttribute("src", imageDataUrl)
      })
    })
  }

  useEffect(() => {
    getSrc()
    return () => {
      imgTag.current.src = transPx  // Placeholder prevents grey border when src=""
    }
  }, [ user ])

  return (
    <tr className={styles.row}>
      <td>{rank}</td>
      <td>{name}</td>
      <td><img className={styles.pic} ref={imgTag} src={transPx} /></td>
      <td>{score}</td>
    </tr>
  )
}

LeaderboardRow.propTypes = {
  user: PropTypes.object,
  rank: PropTypes.number,
}

export default LeaderboardRow
