import PropTypes from "prop-types"


function LeaderboardRow({ user, rank }) {
  const { name, pic, score } = user

  return (
    <tr>
      <td>{rank}</td>
      <td>{name}</td>
      <td><img src={pic} /></td>
      <td>{score}</td>
    </tr>
  )
}

LeaderboardRow.propTypes = {
  user: PropTypes.object,
  rank: PropTypes.number,
}

export default LeaderboardRow
