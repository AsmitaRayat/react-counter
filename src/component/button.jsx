import '../index.css'

function Button(props) {
  return (
    <>
      <button onClick={props.onClick} className="h-20px w-60px border-1 border-sky-500 p-3 rounded-lg ">Click Me</button>
    </>
  )
}

export default Button