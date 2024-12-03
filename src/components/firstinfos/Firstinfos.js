import React from 'react'
import './firrstinfos.css'

export default function Firstinfos({display, setRecInfos, recInfos}) {
  
  return (
    <div className='firstContainer'>
        <div className='logininputs' style={{display : display ? 'flex' : 'none'}} >
            <input type="text" required name="userName" placeholder='UserName' onChange={(e)=>{setRecInfos({...recInfos , userName : e.target.value })}} />
            <input type="password" required name="password" placeholder='Password' onChange={(e)=>{setRecInfos({...recInfos , password : e.target.value })}} />
        </div>
    </div>
  )
}
