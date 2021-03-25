import PropTypes from "prop-types"
import Loading from "./Loading"
import LeaderboardRow from "./LeaderboardRow"


function LeaderboardBody({ users, sortBy, loading }) {
  const sorted = users.sort((prevUser, currUser) => {
    if (sortBy === 'rank') {
      return prevUser.rank > currUser.rank ? -1 : 1
    } else {
      return prevUser.score > currUser.score ? -1 : 1
    }
  })

  let count = 0

  return (
    loading ? (
      <tbody>
        <tr>
          <td><Loading /></td>
          <td><Loading /></td>
          <td><Loading /></td>
          <td><Loading /></td>
        </tr>
      </tbody>
    ) : (
      <tbody>
        {sorted.map((user, idx) => {
          count += 1
          return <LeaderboardRow user={user} key={idx} rank={count} loading={loading} />
        })}
      </tbody>
    )
  )
}

LeaderboardBody.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
  sortBy: PropTypes.string,
  loading: PropTypes.bool,
}

export default LeaderboardBody
