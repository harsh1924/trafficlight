import { data } from "./data/config.js"
import TrafficLight from "./ui/TrafficLight"

function App() {

  return (
    <>
      <TrafficLight config={data} />
    </>
  )
}

export default App
