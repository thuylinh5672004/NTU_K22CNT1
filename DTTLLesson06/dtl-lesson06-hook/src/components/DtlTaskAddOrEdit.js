import React,{ useState }from 'react'
export default function DtlTaskAddOrEdit(dtlOnSubmit) {
        
        const dtlTaskObj = { 
            dtl_taskId:4,
            dtl_taskName:"",
            dtl_level:""
        }
        const [dtlTask, setDtlTask] = useState(dtlTaskObj);

    //Ham xu ly su kien thay doi tren dieu khien

    const dtlHandleChange = (dtlEvent) => {
        let name = dtlEvent.target.name;
        let value = dtlEvent.target.value;
        
        setDtlTask(prev => {
            return{
                ...prev,
                [name]:value,
            }
        })
    }
    const dtlHandleSubmit = (dtlEvent) => {
        dtlEvent.preventDefault();
        dtlOnSubmit(dtlTask);
    }

  return (
    <div>
        <h2>thêm mới Task</h2>
        <form>
            <div>
                <span class='input-group-text' id='basic-addon1'>Task ID</span>
                <input name='dtl_taskId' value={dtlTask.dtl_taskId} onChange={dtlHandleChange}/>
            </div>
            <div>
                <label>Task Name</label>
                <input name='dtl_taskName' value={dtlTask.dtl_taskName} onChange={dtlHandleChange}/>
            </div>
            <div>
                <label>Task Level</label>
                <select name='dtl_level' value={dtlTask.dtl_level} onChange={dtlHandleChange}>
                    <option value={'Small'}>Small</option>
                    <option value={'Medium'}>Medium</option>
                    <option value={'High'}>High</option>
                </select>
            </div>
            <button onClick={dtlHandleSubmit}>Ghi lai</button>
        </form>
    </div>
  )
}
