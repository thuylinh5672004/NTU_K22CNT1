import React, { Component } from 'react'

export default class dtlProductApp extends Component {
    constructor(props){
        super(props);
        this.state={
            id:0,
            title:'',
            status:0
        }
    }
    dtlHandleChange =(event)=>{
        let name=event.target.name;
        let value= event.target.value;
        this.setState({
            [name]:value
        })
    }
    //submit form
    dtlHandleSubmit=(ev)=>{
        ev.preventDefault();

        this.props.onSummit
    }
  render() {
    return (
      <div>
        <h2>them moi san pham</h2>
        <form className='col-md-6'>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
                ID
            </span>
            <input
                type="text"
                className="form-control"
                id='id'
                name=''
                value={this.state.id}
                onChange={this.dtlHandleChange}
            />
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon2">
                title
            </span>
            <input
                type="text"
                className="form-control"
                id='id'
                name=''
                value={this.state.id}
                onChange={this.dtlHandleChange}
            />
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">
                status
            </span>
            <input
                type="text"
                className="form-control"
                id='id'
                name='status'
                value={this.state.status}
                onChange={this.dtlHandleChange}
            />
        </div>
        <button className='btn btn-success' onClick={this.dtlHandleSubmit}>ghi lai</button>
        </form>
      </div>
    )
  }
}
