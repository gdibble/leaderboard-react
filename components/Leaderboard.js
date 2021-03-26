import React from "react"
import axios from "axios"
// import DetailsForm from "./DetailsForm"
import LeaderboardTable from "./LeaderboardTable"


class Leaderboard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      users: [],
      sortBy: "rank",
      isLoading: true,
    }
    this.handleSortBy = this.handleSortBy.bind(this)
  }

  componentDidMount() {
    const sort = this.state.sortBy
    this.getUserData(sort)
  }

  getUserData(sort) {
    axios.get(`http://localhost:3000/api/leaderboard?sortOrder=${sort}`)
      .then(response => this.setState({
        users: response.data,
        isLoading: false,
      }))
      .catch(error => console.log(error))
  }

  handleSortBy(sort) {
    this.setState({ sortBy: sort })
    this.getUserData(sort)
  }

  render() {
    return (
      <>
        {/* <DetailsForm /> */}
        <LeaderboardTable
          users={this.state.users}
          sortBy={this.state.sortBy}
          onClickSort={this.handleSortBy}
          loading={this.state.isLoading}
        />
      </>
    )
  }
}

export default Leaderboard
