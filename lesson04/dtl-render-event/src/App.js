import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      products : [
        { title: 'dao thi thuy linh', id: 908564769,status:1 },
        { title: 'Garlic', id: 2 ,status:1},
        { title: 'Apple', id: 3,status:0 },
        { title: 'samsung', id: 3 ,status:0},
        { title: 'oppe', id: 3 ,status:1},
      ]
    }
  }
    dtlHandldSubmit=(param)=>{
      console.log("App:",param);
      //them vao bang du lieeu product
      let{products}=this.state;
      products.push(param);
      this.setState({
        products:products
      })
    }
  render() {
    return (
      <div className='container border mt-5'>
        <h1> dao thi thuy linh - Render Data -Event Form</h1>
        <hr/>
        <dtlProductList renderProducts={this.state.products}/>
        <hr/>
        <dtlProductApp onSummit ={this.dtlHandldSubmit}/>
        
      </div>
    )
  }
}
