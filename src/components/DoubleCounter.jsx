import { useContext, useEffect } from "react";
import { CounterContext } from "../contexts/CounterContext";
import { useState } from "react";
const DoubleCounter=()=>{
    const {counter}=useContext(CounterContext);
    const [doubleCounter,setDoubleCounter]=useState();

    useEffect(()=>{
        setDoubleCounter(counter*2);
    },[counter]);

    return(
        <>
            <h2>contar * 2={doubleCounter}</h2>
        </>
    )
}
export default DoubleCounter;