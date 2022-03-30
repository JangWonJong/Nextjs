import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()


  return (<>
    <button onClick={() => setCount(count+1)}> 더하기 </button>
    <button onClick={() => setCount(count-1)}> 빼기 </button>
    <div>{count}</div>
    </>
  )
}