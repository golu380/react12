import { useMemo,useState } from "react";

function UseMemoDemo(){

    const [number , setNumber] = useState(0)

    const square = useMemo(()=>{
        return number * number
    },[number])

    return (
        <div>
            <h1>Number :{number}</h1>
            <h1> Square: {square}</h1>

            <button onClick={()=>setNumber(number + 1)}>
                increase number
            </button>
        </div>

    )
}

export default UseMemoDemo;