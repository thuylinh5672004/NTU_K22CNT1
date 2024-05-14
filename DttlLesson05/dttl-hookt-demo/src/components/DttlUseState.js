import React,{useState} from 'react'

export default function DttlUseState() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(10);
    //mang
    const[list,setList]=useState([1,5]);
    //ham su ly su kien "them ngau nhien"
    const dttlHandleList=()=>{
      //sinh ngau nhien mot gia tri so
      let num=parseInt(Math.random()*100);
      //cap nhap lai state:list
      setList([
        ...list,
        num
      ])
      //cach khac
      //list.push(num);
      //setList(list)
    }
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <hr/>
      <h3>List: {list.toString()}</h3>
      <button onClick={dttlHandleList}>them ngau nhien</button>
    </div>
  )
}
