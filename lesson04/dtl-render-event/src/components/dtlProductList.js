import React, { Component } from 'react'

 class dtlProductList extends Component {
  render() {
    let {renderProducts}=this.props;
    console.log("products:",renderProducts);
    let fnStatus=(Param)=>{
        if(Param==1){
            return 'Active';
        }
        return 'NonActive';
    }
    let elementProduct=renderProducts.map((item,index)=>{
        return(
            <>
            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                {/*<td>{item.status===1?'Active':'NonActive'}</td>*/}
                <td>
                    {fnStatus(item.status)}

                </td>

             </tr>
            </>

        )
    })
    return (
      <div>
        <h2>Danh sach san pham</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>title</th>
                    <th>status</th>
                </tr>
            </thead>
            <thead>
                <tboby>
                    {elementProduct}
                   
                </tboby>
            </thead>
        </table>
      </div>
    )
  }
}
export default dtlProductList;