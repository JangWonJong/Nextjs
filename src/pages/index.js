import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'


export default function Home() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <button onClick={()=> {setCount(count +1)}}>더해</button><br/>
    <button onClick={()=> {setCount(count -1)}}>빼</button><br/>
    <div>{count}</div>
    </>
  )
}
