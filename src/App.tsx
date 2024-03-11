// import { useState } from "react"
// import Form from "./components/form"
import Event from "./components/event"
import Footer from "./components/footer"

export default function App () {
  // const [showForm, setShowForm] = useState(true)
  // const join = () => {
  //   console.log('join')
  //   setShowForm(true)
  // }
  return (
    <div className="flex flex-col justify-center items-center mx-10">
      <h1 className="text-center text-2xl font-semibold mt-5 mb-10 md:mt-20 md:mb-16 tracking-wider">Stockholm 周末徒步</h1>
      <Event />
      
        
          {/* <button onClick={join} className="px-10 py-2 text-2xl border-2 lg">加入！</button>
          {showForm && <Form />} */}

       <div className="bg-[#FBFBFB] text-[#658C6F] rounded-md font-semibold px-4 py-2 border-2 text-2xl my-8 md:my-8 md:text-4xl md:pointer-events-none md:hidden "><a href="/event.ics">加入日历</a></div> 
       <p className="hidden md:block text-red-400 tracking-wide mt-10">请在手机端打开以加入日历</p>
       <Footer />
    </div>
  )
} 