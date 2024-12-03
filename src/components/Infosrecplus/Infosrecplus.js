import React, { useState } from 'react'
import './infosrecplus.css'


export default function Infosrecplus({display, setRecInfos, recInfos}) {
    const [labelStyle, setLabelStyle] = useState({
        style1 : 'translate(12px, 33px)',
        style2 : 'translate(12px, 33px)'
    })
    function handleTranslate(e){
        if (e=== '1'){
            setLabelStyle({...labelStyle, style1 : 'translate(12px, 1px)'})
        }else{
            if (e==='2'){
                setLabelStyle({...labelStyle, style2 : 'translate(12px, 1px)'})
            }
        }
    }
    function handleBlur(e){
        if(recInfos.aboutYou === ''){
        if (e=== '1'){
            setLabelStyle({...labelStyle, style1 : 'translate(12px, 33px)'})
        }}
        if(recInfos.experience === ''){
        if (e==='2'){
            setLabelStyle({...labelStyle, style2 : 'translate(12px, 33px)'})
        }}
        
    }
  
    return (
    <div className='infosPlusContainer' style={{display : display ? 'flex' : 'none'}}>
        <div className='textContainer' >
            <div className='labelText'><label style={{transform : labelStyle.style1}}>About you</label>  <textarea onClick={()=>handleTranslate('1')} onBlur={()=>handleBlur('1')} onChange={(e)=>{setRecInfos({...recInfos , aboutYou : e.target.value })}} ></textarea></div>
            <div className='labelText'><label style={{transform : labelStyle.style2}}>Experience</label> <textarea onClick={()=>handleTranslate('2')} onBlur={()=>handleBlur('2')} onChange={(e)=>{setRecInfos({...recInfos , experience : e.target.value })}}></textarea></div>
        </div> 

    </div>
  )
}
