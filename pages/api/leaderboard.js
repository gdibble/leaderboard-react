import { v4 as uuidv4 } from "uuid"


const randNum = () => Math.floor(Math.random() * Math.floor(50000))
const mockUser = (_, i) => ({ id: uuidv4(), name: "Name" + i, score: randNum() })
const sortByScore = (a, b) => (a.score === b.score ? 0 : (a.score > b.score ? 1 : -1))
const addMeta = (user, i) => ({ ...user, rank: i, pic: "https://picsum.photos/30/30" })

const rows = 1000
// const mockData = []
const mockData = Array.from(Array(rows), mockUser).sort(sortByScore).map(addMeta)


/** @link https://nextjs.org/docs/api-routes/introduction */
export default (req, res) => {
  res.status(200).json(mockData)
}
