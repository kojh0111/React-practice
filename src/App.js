import { useState } from "react";
import CafeCalculator from "./components/CafeCalculator/CafeCalculator";
import ChangeObject from "./components/ChangeObject/ChangeObject";
import PMap from "./components/ChangeObject/PMap";
import RTcal from "./components/ChangeObject/RTcal";
import Control from "./components/Control";
import Create from "./components/Create";
import Header from "./components/Header";
import MathProblem from "./components/MathProblem/MathProblem";
import Nav from "./components/Nav";
import Read from "./components/Read";
import RegForm from "./components/RegForm/RegForm";
import Update from "./components/Update";

function App() {
  const [mode, setMode] = useState("Welcome")
  const [nextId, setNextId] = useState(4)
  const [id, setId] = useState(null)
  const [isCUD, setIsCUD] = useState(false)
  const [data, setData] = useState([
    { _id: 1, title: 'HTML', desc: 'HTML is ...' },
    { _id: 2, title: 'CSS', desc: 'CSS is ...' },
    { _id: 3, title: 'JS', desc: 'JS is ...' }
  ])

  let title = "Welcome"
  let desc = "React"

  const onChangeModeHeader = () => {
    setMode('WELCOME')
  }
  const onChangeModeNav = id => {
    setMode("READ")
    setId(id)
  }
  const onChangeModeControl = (_mode) => {
    console.log(_mode)
    setMode(_mode)
  }
  if (mode === "WELCOME") {
    title = "Welcome"
    desc = "React"
  } else if (mode === "READ") {
    for (let i = 0; i < data.length; i++) {
      if (data[i]._id === id) {
        title = data[i].title
        desc = data[i].desc
      }
    }
  } else if (mode === 'CREATE') {

  } else if (mode === 'UPDATE') {
    for (let i = 0; i < data.length; i++) {
      if (data[i]._id === id) {
        title = data[i].title
        desc = data[i].desc
      }
    }
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <Header onChangeMode={onChangeModeHeader} />
      <Nav onChangeMode={onChangeModeNav} data={data} />
      <Read title={title} desc={desc} />
      {!isCUD ? <Control onChangeMode={(_mode) => {
        onChangeModeControl(_mode)
        setIsCUD(true)
      }} /> : (mode === "CREATE" ?
        <>
          <Create onCreateSubmit={({ title, desc }) => {
            setData((cur) => {
              let newData = [...cur]
              newData.push({ "_id": nextId, "title": title, "desc": desc })
              return newData
            })
            setNextId(nextId + 1)
            setIsCUD(false)
          }} />
          <input type="button" value="취소" onClick={() => setIsCUD(false)} />
        </> :
        <>
          <Update data={data} setData={setData} id={id} onUpdateSubmit={({ title, desc }) => {
            setData((cur) => {
              let newData = [...cur]
              for (let i = 0; i < newData.length; i++) {
                if (newData[i]._id === id) {
                  newData[i] = {
                    _id: newData[i]._id,
                    title: title,
                    desc: desc
                  }
                }
              }
              return newData
            })
            setIsCUD(false)
          }} />
          <input type="button" value="취소" onClick={() => setIsCUD(false)} />
        </>
        // <div>
        //   <form onSubmit={e => {
        //     e.preventDefault()
        //     let title = e.target.title.value
        //     let desc = e.target.desc.value
        //     setData((cur) => {
        //       let newData = [...cur]
        //       newData.push({ "_id": nextId, "title": title, "desc": desc })
        //       return newData
        //     })
        //     setNextId(nextId + 1)
        //     setIsCUD(false)
        //   }}>
        //     <h2>Create</h2>
        //     <p><input type="text" placeholder="title" name="title"></input></p>
        //     <p><textarea placeholder="description" name="desc"></textarea></p>
        //     <p><input type="submit"></input></p>
        //   </form>
        //   <input type="button" value="취소" onClick={() => setIsCUD(false)} />
        // </div>
      )}
      <CafeCalculator />
      <MathProblem />
      {/* <PMap data={["1", "2", "3"]} /> */}
      <RegForm />
      <ChangeObject />
      <RTcal />
    </div>
  );
}

export default App;
