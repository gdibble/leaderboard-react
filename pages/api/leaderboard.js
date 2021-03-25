import { v4 as uuidv4 } from "uuid"

const rows = 1000
// const mockData = []
const mockData = Array.from(Array(rows), (_, i) => {
  return {
    id: uuidv4(),
    name: "name" + i,
    score: Math.floor(Math.random() * Math.floor(50000)),
    pic: "",
    rank: i
  }
})


/** @link https://nextjs.org/docs/api-routes/introduction */
export default (req, res) => {
  res.status(200).json(mockData)
}
