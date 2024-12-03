import React from 'react'
import './infosrec.css'
export default function Infosrec({display, setRecInfos, recInfos}) {
  return (
    <div className='infosContainer' style={{display : display? 'flex' : 'none'}}>
        <div className='logininputs rec'>
            <input type="text" required name="firstName" placeholder='firstName' onChange={(e)=>{setRecInfos({...recInfos , firstName : e.target.value })}} />
            <input type="text" required name="lastName" placeholder='lastName' onChange={(e)=>{setRecInfos({...recInfos , lastName : e.target.value })}} />
        </div>
        <div className='logininputs rec'>
            <input type="date" required name="BirthDate" placeholder='Birth date' onChange={(e)=>{setRecInfos({...recInfos , birthDate : e.target.value })}} />
            <input type="text" required name="PhoneNum" placeholder='Phone num' onChange={(e)=>{setRecInfos({...recInfos , phoneNum : e.target.value })}} />
        </div>
        <div className='logininputs rec'>
            <input type="text" required name="Address" placeholder='Address' onChange={(e)=>{setRecInfos({...recInfos , address : e.target.value })}} />
            <input type="text" required name="codePostal" placeholder='Postal Code'  onChange={(e)=>{setRecInfos({...recInfos , postalCode : e.target.value })}}/>
        </div>
        <div className='logininputs rec'>
            <input type="text" required name="profession" placeholder='profession' onChange={(e)=>{setRecInfos({...recInfos , profession : e.target.value })}}/>
                        
        </div>
    </div>
  )
}
