
import validate from './images/Subtract.png'
import './validate.css'

export function Validate() {
    return(
        <div className='validate_page'>
            <div className='img'>
                <img src={validate}/>
            </div>
            <p> The order is validated </p>
            <button>ok</button>
        </div>
    )
}