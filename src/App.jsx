import { useState } from "react"
import Employee from "./classes/Employee2"

function App() {
  const [data, setData] = useState({
    name: "",
    rate: 12.8,
    displayDetails: "",
    addHours: 0,
    addDays: 0,
    addMonths: 0,
    addYears: 0,
  })

  function updateData(e) {
    const { name, value } = e.target

    // const theName = name === "name"? value : data.name

    const info = new Employee(data.name, data.rate)
    if (name === "addHours") {
      info.addHours(Number(value))
    }
    if (name === "addDays") {
      info.addDays(Number(value))
    }
    if (name === "addMonths") {
      info.addMonths(Number(value))
    }
    if (name === "addYears") {
      info.addYears(Number(value))
    }
    if (name === "name") {
      info.setName(value)
    }
    if (name === "rate") {
      info.setRate(Number(value))
    }

    const { output } = info.displayDetails()

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
        displayDetails: output,
      }
    })
  }

  return (
    <div className="App">
      <div className="left">
        <h1>Calculate your salary</h1>
        <div className="form">
          <form>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={data.name}
              onChange={updateData}
            />
            <label>Hourly rate £</label>
            <input
              type="number"
              name="rate"
              placeholder={data.rate}
              value={data.rate}
              onChange={updateData}
            />

            <label>Hours worked</label>
            <input
              type="number"
              name="addHours"
              value={data.addHours}
              onChange={updateData}
            />
            <label>Days worked</label>
            <input
              type="number"
              name="addDays"
              value={data.addDays}
              onChange={updateData}
            />
            <label>Months worked</label>
            <input
              type="number"
              name="addMonths"
              value={data.addMonths}
              onChange={updateData}
            />
            <label>Years worked</label>
            <input
              type="number"
              name="addYears"
              value={data.addYears}
              onChange={updateData}
            />
          </form>
        </div>

        <div className="info">
          <p>Choose one duration type.</p>
        </div>
      </div>
      <div className="right">
        <h2>For information privided: </h2>
        <p>{data.displayDetails}</p>
        <h5>You can change the data as you wish</h5>
      </div>
    </div>
  )
}

export default App
