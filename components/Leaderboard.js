import React from "react"
import axios from "axios"
import LeaderboardTable from "./LeaderboardTable"


class Leaderboard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      users: [],
      sortBy: 'rank',
      isLoading: true,
    }
    this.handleSortBy = this.handleSortBy.bind(this)
  }

  componentDidMount() {
    const sort = this.state.sortBy
    this.getUserData(sort)

    const table = document.querySelector('table')
    const tableHeader = document.querySelector('thead')
    const topOfTableHeader = tableHeader.offsetTop

    function fixHeader() {
      if (window.scrollY >= topOfTableHeader) {
        tableHeader.style.width = `${table.clientWidth}px`
        document.body.style.paddingTop = `${tableHeader.offsetHeight}px`
        document.body.classList.add('fixed')
      } else {
        document.body.style.paddingTop = 0
        document.body.classList.remove('fixed')
      }
    }
    window.addEventListener('scroll', fixHeader)
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
      <div className="container">
        <LeaderboardTable
          users={this.state.users}
          sortBy={this.state.sortBy}
          onClickSort={this.handleSortBy}
          loading={this.state.isLoading}
        />
      </div>
    )
  }
}

export default Leaderboard
