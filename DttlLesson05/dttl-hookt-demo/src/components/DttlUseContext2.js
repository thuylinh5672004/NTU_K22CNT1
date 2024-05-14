import React, { useContext } from 'react'
import { ThemeContext } from './DttlUseContext'

export default function DttlUseContext2() {
  const theme = useContext(ThemeContext);
  return (
    <div className={theme}>
      <h2>DttlUseContext2</h2>
      <p>
        <b>2210900036</b>
        <b>Dao thi thuy linh</b>
        <i>K22CNTT1</i>
      </p>
    </div>
  )
}

