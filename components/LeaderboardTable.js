import PropTypes from "prop-types"
import LeaderboardBody from "./LeaderboardBody"


function LeaderboardTable({ users, sortBy, onClickSort, loading }) {
  return (
    <table>
      <thead>
        <tr>
          <th>
            <button onClick={() => onClickSort("rank")} className={`sort-by ${sortBy !== "rank" ? "isNotSelected" : ""}`} >
              Rank
            </button>
          </th>
          <th>Name</th>
          <th>Pic</th>
          <th>Score</th>
        </tr>
      </thead>
      <LeaderboardBody
        users={users}
        sortBy={sortBy}
        loading={loading}
      />
    </table>
  )
}

LeaderboardTable.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
  sortBy: PropTypes.string,
  onClickSort: PropTypes.func,
  loading: PropTypes.bool,
}

export default LeaderboardTable
