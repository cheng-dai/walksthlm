export default function Form () {
  return (
   <>
      <form action="" method="post" className="flex flex-col items-center gap-4 " >
        <div>

        <label htmlFor="name" className="block">Name: </label>
        <input type="text" className="border rounded-md text-black"/>
        </div>
        <button className="border rounded-md px-4 py-2 w-1/2">submit</button>
      </form>
    </>
  )
}