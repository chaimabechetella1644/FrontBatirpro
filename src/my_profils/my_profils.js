import { Card2 } from '../components/profils_card/card'
import { Navbar } from '../components/navbar/navbar'
import './my_profils.css'
import { NavLink, useLocation } from 'react-router-dom';
import publication_image from './image/photo-1575971637203-d6255d9947a9.avif'
import like_image from './image/Vector.png'
import './my_profils.css'
import Review from '../components/review/review';
import Addreview from '../components/addreview/addreview';
import { useState ,useEffect} from 'react';
import axios from 'axios';

export function My_Profils() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const imgSrc = searchParams.get('imgSrc');
    const user_name = searchParams.get('user_name');
    const num_tlfn = searchParams.get('num_tlfn');
    const address = searchParams.get('address');


    // Ensure useState is always called here, unconditionally
    const [diplay, setdisplay] = useState({
        addreview: true,
        localisation: false
    });

    const [valuelab, setvaluelab] = useState('');  // Ensure useState is called here as well

    // Handle button clicks
    const handleButtonClick = (translation, e) => {
        setvaluelab(translation); // Always call setvaluelab
        if (e === 'addreview') {
            setdisplay({
                review: false,
                addreview: true,
            });
        } else {
            if (e === 'review') {
                setdisplay({
                    review: true,
                    addreview: false,
                });
            }
        }
    };

    const style = { borderColor: '#D9A363', transition: 'all 0.3s' }; // Define the missing style object

    if (!user_name) {
        return <p>Error: No profile information available.</p>;
    }

    return (
        <div className="my_profils">
            <Navbar />
            <div className="personal_information">
                <Card2
                    imgSrc={imgSrc}
                    user_name={user_name}
                    num_tlfn={num_tlfn}
                    address={address}
                />
                <div className="my_informations">
                    <div className="About_me">
                        <h3>About me</h3>
                        <p>
                            je suis un constructeur de chantier, responsable de la coordination et de la supervision 
                            des travaux sur un site de construction. Mon rôle consiste à organiser les étapes du chantier,
                            gérer les équipes, assurer la qualité et la sécurité, et veiller au respect des délais et du budget
                            pour mener à bien chaque projet de construction.
                        </p>
                    </div>
                    <div className="About_me">
                        <h3>Experience</h3>
                        <p>
                            je suis un constructeur de chantier, responsable de la coordination et de la supervision 
                            des travaux sur un site de construction. Mon rôle consiste à organiser les étapes du chantier,
                            gérer les équipes, assurer la qualité et la sécurité, et veiller au respect des délais et du budget
                            pour mener à bien chaque projet de construction.
                        </p>
                    </div>
                </div>
            </div>
            <div className="button">
                <button> <NavLink style={{ textDecoration: 'none' , color: 'white' }} to='/hireInfo'>Hire Now </NavLink></button>
            </div>

            <div className="contcontainer">
                <div className="profilcontainer">
                    <div className="bascontainer">
                        <div className="bas">
                            <div className="titles">
                                <button onClick={() => handleButtonClick('0px, -14px', 'review')} style={{color: diplay.review ? '#B69B7D' : '#ffff'}} >Reviews</button>
                                <button onClick={() => handleButtonClick('133px, -14px', 'addreview')} style={{color: diplay.addreview ? '#B69B7D' : '#ffff'}} >Add Review</button>
                            </div>
                            <hr style={style} className="transition-hr" />
                            <div className="content">
                                <Review display={diplay} />
                                <Addreview display={diplay} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
