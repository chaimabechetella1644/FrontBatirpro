
import card_image from './image/5b8d8c75254d0c3a1bee5db241af2a89.jpg'

import './card.css'

export function CardH({ imgSrc, title, description }) {
    return (
        <div className="card">
            <div className="top">
                <div className="color" > </div>
                <div className="img">
                    <img src={imgSrc} alt={title} />
                </div>
            </div>
            <div className="text">
                <h1>{title}</h1>
                <p>{description}</p>
                <div className="button"><button>See more</button></div>
            </div>
        </div>
    );
}