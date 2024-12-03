import React, { useState } from 'react'
import './recrutement.css'
import Infosrec from '../components/Infosrec/Infosrec'
import Infosrecplus from '../components/Infosrecplus/Infosrecplus'
import Firstinfos from '../components/firstinfos/Firstinfos'

export default function Recrutement() {

    const [steps, setSteps] = useState({
        step1 : true,
        step2 : false,
        step3 : false
    })
    function handleStep(e){
        if (e === '1'){
            setSteps({
                step1 : true,
                step2 : false,
                step3 : false
            })
        }
        else{ if(e === '2'){
            setSteps({
                step1 : false,
                step2 : true,
                step3 : false
            })
        }else{
            if(e==='3'){
                setSteps({
                    step1 : false,
                    step2 : false,
                    step3 : true
                })
            }
        }
        }

       
        
    }

    function handleNext(){
        if (steps.step1){
            setSteps({
                step1 : false,
                step2 : true,
                step3 : false
            })
        }else{
            if(steps.step2){
                setSteps({
                    step1 : false,
                    step2 : false,
                    step3 : true
                })
            }            
        }
    }

    function handlePrevious(){
        if(steps.step2){
            setSteps({
                step1 : true,
                step2 : false,
                step3 : false
            })
        }else{
            if(steps.step3){
                setSteps({
                    step1 : false,
                    step2 : true,
                    step3 : false
                })
            }
        }
    }

    const [recInfos, setRecInfos] = useState({
        userName : '',
        password : '',
        firstName : '',
        lastName : '',
        birthDate : '',
        phoneNum : '',
        address : '',
        postalCode : '',
        profession : '',
        experience : '',
        aboutYou : ''
    })
    console.log(recInfos);
    

  return (
    <div className='loginContainer'>
        <div className='loginbackground'>
            <div className='logincardBackground'>
                <div className='loginCard'>
                    <div className='logintitle'>
                        Work with us
                    </div>
                    <div className='stepNames'>
                        <div className='hereNames'>
                            <div className='name' onClick={(()=>{handleStep('1')})} style={{color : steps.step1 ? 'var(--main-color1)' : 'white'}}>Step 01 <hr style={{display : steps.step1 ? 'flex' : 'none'}}/></div>
                            <div className='name' onClick={(()=>{handleStep('2')})} style={{color : steps.step2 ? 'var(--main-color1)' : 'white'}}>Step 02 <hr style={{display : steps.step2 ? 'flex' : 'none'}}/></div>
                            <div className='name' onClick={(()=>{handleStep('3')})} style={{color : steps.step3 ? 'var(--main-color1)' : 'white'}}>Step 03 <hr style={{display : steps.step3 ? 'flex' : 'none'}}/></div>
                        </div>
                        
                    </div>
                    <Firstinfos display = {steps.step1} setRecInfos = {setRecInfos} recInfos = {recInfos} />
                    <Infosrec display = {steps.step2} setRecInfos = {setRecInfos} recInfos = {recInfos} />
                    <Infosrecplus display ={steps.step3} setRecInfos = {setRecInfos} recInfos = {recInfos} />

                   
                    <div className='buttonRec' >
                        <button onClick={()=>{handlePrevious()}} style={{opacity : steps.step1 ?  '0' : '1'}}> Previous </button>
                        <button onClick={()=>{handleNext()}} >{steps.step3 ? 'Done' : 'Next'}</button>
                    </div> 

                </div>

            </div>
        </div>
    </div>
  )
}
