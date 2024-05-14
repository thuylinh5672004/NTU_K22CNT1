import React, { useEffect, useState } from 'react'

export default function DttlUseEffect() {
    const [count, setCount]= useState(0);
    //ham su ly su kien
    const dttlHendleClick =()=>{
        setCount(prev => prev + 1);
    }
    //su dung ham useeffect de cap nhap lai title,co mot tham so
    useEffect(()=>{
        document.title=`Dao thi thuy linh:You clicked ${count} times`;
        console.log(`You clicked ${count} times`);
    });
    useEffect(()=>{
        console.log("chay lan dau tien -mot lan");
    },[])
    //[deps]
    useEffect(()=>{
        console.log(`useEffect count click`,count)
    },[count])
  return (
    
    <div>
      <h2>demo-useEffect: you clicked{count}times</h2>
      <button onClick={dttlHendleClick}>
        Click me
      </button>
    </div>
  )
}
