import { Use_State,React } from "react";
 function App(){
    const[count,setcounter]=Use_State(0)
    function updateCount(){
        setcounter(count +1)
    }
    return(
        <>
        <h1>Button clicked { count} times</h1>
        <button onCanPlay={updateCount}>Click</button>
        </>
    )
 }
 export default Use_State