import React from 'react'
import './Gender.scss'

const Gender = ({ handleGender, gender }) => {
  return (
    <div>
      <label className='gender'  htmlFor='gender'>Gender </label>
      <select name='' id='gender' onChange={(ev) => handleGender(ev.target.value)} value={gender}>
        <option value='All'>All</option>
        <option value='Male'>Male</option>
        <option value='Female'>Female</option>
      </select>
    </div>
  )
}

export default Gender
