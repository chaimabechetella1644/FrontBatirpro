import React from 'react';
import './buttons.css';

function Buttons({setOption, option}) {
    return (
        <div className="buttons-container">
            <button className="constructors-btn" onClick={()=>{setOption({constructor : true,marketplace : false})}} style={{backgroundColor :option.constructor ? 'var(--main-color1)' : 'var(--main-color2)', color : option.constructor ? 'white' : 'black' }} >Constructors</button>
            <button className="marketplace-btn" onClick={()=>{setOption({constructor : false,marketplace : true})}}  style={{backgroundColor :option.marketplace ? 'var(--main-color1)' : 'var(--main-color2)',  color : option.constructor ? 'white' : 'black'  }} >Marketplace</button>
        </div>
    );
}

export default Buttons;