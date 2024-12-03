import React, { useState } from 'react'
import down from './images/chevron-down.png'
import './filter.css'



export default function Filter() {
    
    const [appear, setappear] =useState(false)
    const [content, setcontent] = useState('Prix')
    const myarray = ['Materials', 'Professional_Services', ' Equipment_Rental', 'Consultation_and_Planning', 'Maintenance_and_Repair']
    // console.log(myarray)
    // console.log(back);
    const [all, setall] = useState(true)
    const [filter,setfilter] = useState({
        filters : {
            prix: '*',
            Materials : false,
            Professional_Services : false,
            Equipment_Rental : false,
            Consultation_and_Planning : false,
            Maintenance_and_Repair : false,
            all: true
        }
    })
    filter.filters.all =    !filter.filters.Consultation_and_Planning &&
                            !filter.filters.Equipment_Rental &&
                            !filter.filters.Maintenance_and_Repair&&
                            !filter.filters.Professional_Services&&
                            !filter.filters.Materials;

    console.log(filter.filters)

  return (
    <div className="filter">
        <div className="title">
                    <h1> Filter for easy search </h1>
                </div>
                <div className="casescontainer">
                    <div className="cases">
                        <div className="title" style={{
                            backgroundColor: filter.filters.all ? '#EA5501' : '#D9D9D9',
                            color : filter.filters.all ? 'white': 'black'
                            }}
                            onClick={()=>{
                            setfilter(prevFilter => ({
                                ...prevFilter,
                                filters: {
                                    ...prevFilter.filters,
                                    Materials : false,
                                    Professional_Services : false,
                                    Equipment_Rental : false,
                                    Consultation_and_Planning : false,
                                    Maintenance_and_Repair : false,
                                    all: true
                                }
                                }))
                            }}
                            >
                            All
                        </div>
                    <div className="filterprix" >
                        <div className="title special"  onClick={()=>{setappear(prev=>!prev)}} >
                            {content} <span style={{display : content !== 'Prix' ? 'none' : 'block'}} > <img src={down} alt="" /></span>
                        </div>
                        <div className="hover" style={{display : appear ? 'block' : 'none'}}>
                            <div className="etoile">

                            </div>
                            <div className="car">
                                <ul>
                                <li  onClick={()=>{ setcontent('Any');setfilter(prevFilter => ({
                            ...prevFilter,
                            filters: {
                                ...prevFilter.filters,
                                prix : '*'
                            }
                            })); setappear(false) }} > Any </li>
                                    <li  onClick={()=>{ setcontent('0-200 dz');
                                    setfilter(prevFilter => ({
                                        ...prevFilter,
                                        filters: {
                                            ...prevFilter.filters,
                                            prix : 'price > 0 AND price < 200'
                                        }
                                        })); setappear(false) }} > 0-200 dz </li>
                                    <li  onClick={()=>{ setcontent('200-500 dz');setfilter(prevFilter => ({
                            ...prevFilter,
                            filters: {
                                ...prevFilter.filters,
                                prix : 'price >= 200 AND price < 500'
                            }
                            })); setappear(false)}}> 200-500 dz</li>
                                    <li  onClick={()=>{ setcontent('500-1000 dz');setfilter(prevFilter => ({
                            ...prevFilter,
                            filters: {
                                ...prevFilter.filters,
                                prix : 'price >= 500 AND price < 1000'
                            }
                            })); setappear(false)}}> 500-1000 dz</li>
                                    <li  onClick={()=>{ setcontent('+1000dz');setfilter(prevFilter => ({
                            ...prevFilter,
                            filters: {
                                ...prevFilter.filters,
                                prix : 'price >=1000'
                            }
                            })); setappear(false)}}> +1000dz </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    {myarray.map((item, index) => (
                        <div key={index} className="title"style={{
                            backgroundColor: filter.filters[item] ? '#EA5501' : '#D9D9D9',
                            color : filter.filters[item] ? 'white': 'black'
                          }} onClick={() => { 
                            setall(false);
                            setfilter(prevFilter => ({
                            ...prevFilter,
                            filters: {
                                ...prevFilter.filters,
                                [item]: !prevFilter.filters[item]
                            }
                            }))
                            
                        }}
                        
                        >
                            {item}
                        </div>
                    ))}

                
                </div>
                    
                
                   
                        
                  
                </div>
    </div>
  )
}
