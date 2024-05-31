import React from 'react'

export default function DtlListTask(renderDtlListTask) {
    console.log(renderDtlListTask);

    //render data
    let dtlElementTask = renderDtlListTask.map((task, index) => {
        return (
            <>
                <tr key={index}>
                    <td>{index +1}</td>
                    <td>{task.dtl_taskId}</td>
                    <td>{task.dtl_taskName}</td>
                    <td>{task.dtl_taskId}</td>
                    <td>
                        <button className='btn btn-success'>Edit</button>
                        <button className='btn btn-danger'>Remove</button>
                    </td>
                </tr>

            </>
        )
    })
  return (
    <div>
      <h2>Danh sach cac nhiem vu</h2>
        <table className='table table-bordered'>
            <thead>
                    <tr>
                        <th>STT</th>
                        <th>Task ID</th>
                        <th>Task Name</th>
                        <th>Task Level</th>
                        <th>Action</th>
                    </tr>
            </thead>

            <tbody>
                {dtlElementTask}
            </tbody>
        </table>
    </div>
  )
}
