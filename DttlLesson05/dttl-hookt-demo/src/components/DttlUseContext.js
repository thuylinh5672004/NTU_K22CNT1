import React, { createContext, useContext, useState } from 'react'
import DttlUseContext1 from './DttlUseContext1';
export const ThemeContext =createContext();//tao nguw canhr deer chia ser
export default function DttlUseContext() {
    //state
    const [theme,setTheme] = useState('red');
    //ham thay doi theme
    const dttlHandleChange =()=>{
        setTheme(theme==='red'?'blue':'red');
    }
  return (
    <ThemeContext.Provider value={theme}>
        <div>
            <h2> Demo UseContext</h2>
            <DttlUseContext1/>
            <button onClick={dttlHandleChange}>change bgcolor</button>
        </div>
    </ThemeContext.Provider>
    
  )
}
