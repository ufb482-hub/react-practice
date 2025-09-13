import React, { useEffect, useState ,useRef} from 'react'
import { StudentData } from './components/StudentData';
const App = () => {
  const [count,setcount]=useState(0);
  let a=useRef(0);
  const btnref=useRef();
 useEffect( () => {
 alert("count was changed")
 a.current=a.current+1;
 console.log(`a value is ${a.current}`);
 console.log(`count value is ${count}`);
}, [count])
useEffect(() => {
  alert("i am running on just onely first rendering after this you not see me untill refresh page")
}, [])
useEffect(() => {
 alert("i am just running on every rendring")
})

  return (
  <>
  <StudentData/>
  <button ref={btnref}  onClick={()=>{setcount(count+1)}}>The count is {count}</button>
  <button  onClick={()=>{btnref.current.style.display="none"}} onDoubleClick={()=>{btnref.current.style.display="block"}}>Remove counter button display</button>
  </>
  )
}

export default App
