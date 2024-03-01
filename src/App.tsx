// import { useState } from "react"
// import Form from "./components/form"
import Event from "./components/event"

export default function App () {
  // const [showForm, setShowForm] = useState(true)
  // const join = () => {
  //   console.log('join')
  //   setShowForm(true)
  // }
  return (
    <div className="flex flex-col justify-center items-center mx-10 md:mt-20">
      <h1 className="text-center text-2xl font-semibold mt-5 mb-4 md:mt-10 md:mb-16  ">周末徒步探索队 🌱</h1>
      <Event />
      
        
          {/* <button onClick={join} className="px-10 py-2 text-2xl border-2 rounded-md">加入！</button>
          {showForm && <Form />} */}

       <div className="rounded-md px-4 py-2 border text-2xl mt-8 md:text-4xl md:pointer-events-none md:line-through "><a href="/event.ics">加入日历</a></div> 
       <p className="hidden md:block mt-1 text-red-400 tracking-wide">请在手机端打开以加入日历</p>
      
    </div>
  )
} 