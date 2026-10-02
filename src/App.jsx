import { use, useState } from "react";
import Button from "./component/button.jsx"
import Counter from "./component/counter.jsx";
import Reset from "./component/reset.jsx";
// import { useState } from "react";?

function App() {

  const [count, recount] = useState(0)
  const increase = () => { recount(count + 1) }
  const reset = () => { recount(0) }

  return (
    <div className="h-96 w-96 flex flex-col items-center justify-evenly border-1 border-black rounded-xl p-3">
      <Reset onClick={reset}/>
      <Counter result={count}/>
      <Button onClick={increase} />
    </div>

  )
}

export default App
