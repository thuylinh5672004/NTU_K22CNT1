import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import DtlListTask from './components/dtlListTask';
import DtlTaskAddOrEdit from './components/dtlTaskAddOrEdit';
 function App() {
  const dtl_listTasks = [
    { dtl_taskId:2210900036,dtl_taskName:"Đào thị thùy linh", dtl_level:"Small" },
    { dtl_taskId:1,dtl_taskName:"Học lập trình frontend", dtl_level:"Small" },
    { dtl_taskId:2, dtl_taskName:"Học lập trình reactjs",dtl_level:"Medium"},
    { dtl_taskId:3, dtl_taskName:"Lập trình với Frontend - Reactjs",dtl_level:"High"},
    { dtl_taskId:4, dtl_taskName:"Lập trình Fullstack (PHP, Java, NetCore)",dtl_level:"Small"},
   ];
   //sử dung hàm uestate để lưu trữ trạng thái dữ liệu
   const [dtlListTask, setDTlListTask]=useState(dtl_listTasks)
   const dtlHandleSubmit = (dtlParam) => {
    console.log("App:", dtlParam);
    setDtlListTask(prev => {
      return[
        ...prev,
        dtlParam
      ]
    })
 }
  return (
    <div className="container border ">
      <h1> Đào thị thùy linh k22CNT1</h1>
      <hr/>
      <div>
        {/*danh sach liststart*/}
        <DtlListTask renderDtlListTask = {dtlListTask}/>
      </div>
      <div>
        <DtlTaskAddOrEdit dtlOnSubmit={dtlHandleSubmit}/>
      </div>
    </div>
  );
}

export default App;
