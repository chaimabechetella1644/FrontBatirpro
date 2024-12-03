import React from 'react';
import './table.css';
import { useNavigate } from 'react-router';

function Table({data, button, headers, product, setDisplayEdit, command, demmand, profiles }) {
  
    const navigate = useNavigate()

    function handleDisplay(e){
        if (product){
            setDisplayEdit(true)
            console.log("Done from product");
            
        }else{
            if(command){
                // console.log("we are in command section");
                // const array = Object.values(e);
                
                navigate('/displayOrder', { state: { data:  e } });
                console.log(e);
                
            }else{
                if(demmand){
                    navigate('/admin_demmande', { state: { data:  e } });  
                }
                else{
                    if(profiles){
                        (headers[3] === 'Speciality' ) ?
                        navigate('/Marketowner', { state: { data:  e } })
                        :
                        navigate('/ConstructersProfil', { state: { data:  e } })
                    }
                }
            }
        }
    }

    
    const itemTitle= headers[3]
    console.log(itemTitle);
    
    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index}>{header.charAt(0).toUpperCase() + header.slice(1)}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {data.map((item, index) => (
                        command ? 
                        <tr key={index}>
                            <td >{item.Number}</td>
                            <td >{item.Name}</td>
                            <td >{item.Date}</td>
                        
                            <td>
                                <button onClick={() => handleDisplay(item)}>{button}</button>
                            </td>
                            <td style={{display : product ? '' : 'none'}}>
                                <button className='delete' > Delete </button>
                            </td>
                        </tr>
                        :
                        demmand ?
                        <tr key={index}>
                            <td >{item.firstName}</td>
                            <td >{item.lastName}</td>
                            <td >{item.phoneNum}</td>
                            <td >{item.metier}</td>
                        
                            <td>
                                <button onClick={() => handleDisplay(item)}>{button}</button>
                            </td>
                        </tr>
                        :
                        profiles ?
                        <tr key={index}>
                            <td >{item.firstName}</td>
                            <td >{item.lastName}</td>
                            <td >{item.addresse}</td>
                            <td>
                                {itemTitle === 'Speciality'
                                ?
                                item.Speciality
                                :
                                item.metier
                                }
                            </td>
                        
                            <td>
                                <button onClick={() => handleDisplay(item)}>{button}</button>
                            </td>
                        </tr>
                        :
                        <tr key={index}>
                            {Object.values(item).map((value, idx) => (
                                <td key={idx}>{value}</td>
                            ))}
                            <td>
                                <button onClick={() => handleDisplay(item)}>{button}</button>
                            </td>
                            <td style={{display : product ? '' : 'none'}}>
                                <button className='delete' > Delete </button>
                            </td>
                        </tr>
                        
                        

                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
