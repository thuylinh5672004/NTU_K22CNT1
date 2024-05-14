import React from 'react'
import DttlUseState from './components/DttlUseState'
import DttlUseEffect from './components/DttlUseEffect'
import DttlUseContext from './components/DttlUseContext'
import'./App.css'
export default function  () {
  return (
    <div className='container border mt-3'>
      <h1 className='text-center'> Dao thi thuy linh-hookt</h1>
      <hr/>
      <DttlUseState/>
      <hr/>
      <DttlUseEffect/>
      <hr/>
      <DttlUseContext/>
    </div>
  )
}
