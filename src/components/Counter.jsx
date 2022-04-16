import { useContext } from "react";
import { CounterContext } from "../contexts/CounterContext";
const Counter=()=>{
    const {counter,setCounter}=useContext(CounterContext);
    return(
        <>
            <h2>Counter:{counter}</h2>
            <button onClick={()=>setCounter(prevState=>prevState+1)}>contar</button>
        </>
    );
}
export default Counter;