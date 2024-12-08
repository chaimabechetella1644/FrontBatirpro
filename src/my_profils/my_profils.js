import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card2 } from '../components/profils_card/card';
import { Navbar } from '../components/navbar/navbar';
import './my_profils.css';
import { NavLink, useLocation } from 'react-router-dom';
import publication_image from './image/photo-1575971637203-d6255d9947a9.avif'
import like_image from './image/Vector.png'
import './my_profils.css'
import Review from '../components/review/review';
import Addreview from '../components/addreview/addreview';

export function My_Profils() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    
    const id_prof = searchParams.get('id'); 
    const [profileDetails, setProfileDetails] = useState(null);
    const [client, setClient] = useState(null); // Use state for client
    const [experiences, setExperiences] = useState(null);
    const [reviews, setReviews] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [diplay, setdisplay] = useState({
        addreview: true,
        localisation: false,
    });

    const [valuelab, setvaluelab] = useState('');

    // Handle button clicks
    const handleButtonClick = (translation, e) => {
        setvaluelab(translation);
        if (e === 'addreview') {
            setdisplay({
                review: false,
                addreview: true,
            });
        } else if (e === 'review') {
            setdisplay({
                review: true,
                addreview: false,
            });
        }
    };

    const style = { borderColor: '#D9A363', transition: 'all 0.3s' };

    // Fetch profile details
    useEffect(() => {
        if (!id_prof) {
            setError('Error: No user ID provided.');
            setLoading(false);
            return;
        }
        const fetchProfDetails = async () => {
            try{
                const response = await axios.get(`http://127.0.0.1:8000/api/professionals/${id_prof}/`) ;
                    setProfileDetails(response.data);
                    setClient(response.data.client); // Use setClient to update state
                    console.log("client object : ", response.data.client);
                    setExperiences(response.data.metiers);
                    setLoading(false);
            } catch (err){
                console.error('Failed to fetch profile details:', err);
                setError('Failed to load profile details.');
                setLoading(false);
            }
        }
        fetchProfDetails();
        const fetchReviews = async () => {
            try{
                const response = await axios.get(`http://127.0.0.1:8000/api/professionals/${id_prof}/reviews/`);
                    setReviews(response.data);
                    console.log("reviews: ", response.data)
                    setLoading(false);
        }catch(err) {
            console.error('Failed to fetch reviews:', err);
            setError('Failed to load reviws.');
        }}

        fetchReviews();

    }, [id_prof]);


    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!profileDetails) {
        return <p>Error: No profile information available.</p>;
    }

    return (
        <div className="my_profils">
            <Navbar />
            <div className="personal_information">
                <Card2
                    imgSrc={profileDetails.image_url}
                    user_name={client.first_name + ' ' +client.last_name }
                    num_tlfn={client.telephone}
                    address={profileDetails.localisation}
                    rating = {profileDetails.avis_moyenne}
                />
                <div className="my_informations">
                    <div className="About_me">
                        <h3>About me</h3>
                        <p>{profileDetails.about_me}</p>
                    </div>
                    <div className="About_me">
                        <h3>Experience</h3>
                        {experiences.map((e, index)=>{
                            return( <ul key={index + 1}>  {e.nom_metier} : {e.description}</ul>)
                        })}
                    </div>
                </div>
            </div>
            <div className="button">
                <button>
                    <NavLink
                        style={{ textDecoration: 'none', color: 'white' }}
                        to="/hireInfo"
                    >
                        Hire Now
                    </NavLink>
                </button>
            </div>

            <div className="contcontainer">
                <div className="profilcontainer">
                    <div className="bascontainer">
                        <div className="bas">
                            <div className="titles">
                                <button
                                    onClick={() => handleButtonClick('0px, -14px', 'review')}
                                    style={{ color: diplay.review ? '#B69B7D' : '#ffff' }}
                                >
                                    Reviews
                                </button>
                                <button
                                    onClick={() => handleButtonClick('133px, -14px', 'addreview')}
                                    style={{ color: diplay.addreview ? '#B69B7D' : '#ffff' }}
                                >
                                    Add Review
                                </button>
                            </div>
                            <hr style={style} className="transition-hr" />
                            <div className="content">
                                <Review display={diplay} reviews={reviews} />
                                <Addreview display={diplay} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}










// import { Card2 } from '../components/profils_card/card'
// import { Navbar } from '../components/navbar/navbar'
// import './my_profils.css'
// import { NavLink, useLocation } from 'react-router-dom';
// import publication_image from './image/photo-1575971637203-d6255d9947a9.avif'
// import like_image from './image/Vector.png'
// import './my_profils.css'
// import Review from '../components/review/review';
// import Addreview from '../components/addreview/addreview';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import axios from 'axios';

// export function My_Profils() {
//     console.log('my profile rendring')
//     const location = useLocation();
//     const searchParams = new URLSearchParams(location.search);
//     const id_prof = searchParams.get('id');
//     console.log(id_prof)

//     const [diplay, setdisplay] = useState({
//         addreview: true,
//         localisation: false
//     });
//     const [details, setdetails] = useState([{
//         imgSrc :'pic',
//         user_name: '',
//         num_tlfn : '',
//         first_name : '',
//     }]);
//     const [metiers, setmetiers] = useState(['']);
//     const [loading, setLoading] = useState(true); // State to handle loading
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         console.log('UseEffect Triggered'); // Debugging log
//         console.log('ID in UseEffect:', id_prof);

//         const fetchProfDetails = async () => {
//             try {
//                 console.log('Fetching prof details...');
//                 const response = await axios.get(`http://127.0.0.1:8000/api/professionals/${id_prof}/`);
                
//                 console.log('Response received:', response.data);
//                 setdetails(response.data);
//                 setmetiers(response.data.metiers);
//                 setLoading(false);
//             } catch (error) {
//                 console.error('Fetch Error:', error);
//                 setLoading(false);
//             }
//         };

//         if (id_prof) {
//             fetchProfDetails();
//         }
//     }, [id_prof]);
//     const [valuelab, setvaluelab] = useState(''); 

//     // Handle button clicks
//     const handleButtonClick = (translation, e) => {
//         setvaluelab(translation); // Always call setvaluelab
//         if (e === 'addreview') {
//             setdisplay({
//                 review: false,
//                 addreview: true,
//             });
//         } else {
//             if (e === 'review') {
//                 setdisplay({
//                     review: true,
//                     addreview: false,
//                 });
//             }
//         }
//     };

//     const style = { borderColor: '#D9A363', transition: 'all 0.3s' }; // Define the missing style object

//     if (!details) {
//         return <p>Error: No profile information available.</p>;
//     }

//     return (
//         <div className="my_profils">
//             <Navbar />
//             <div className="personal_information">
//                 <Card2
//                     imgSrc={details.image_url}
//                     user_name={details.client.first_name + ' '+ details.client.last_name}
//                     num_tlfn={details.client.telephone}
//                     address={details.localisation}
//                 />
//                 <div className="my_informations">
//                     <div className="About_me">
//                         <h3>About me</h3>
//                         <p>
//                             {details.about_me}
//                         </p>
//                     </div>
//                     <div className="About_me">
//                         <h3>Experience</h3>
//                         {/* <p>
//                             je suis un constructeur de chantier, responsable de la coordination et de la supervision 
//                             des travaux sur un site de construction. Mon rôle consiste à organiser les étapes du chantier,
//                             gérer les équipes, assurer la qualité et la sécurité, et veiller au respect des délais et du budget
//                             pour mener à bien chaque projet de construction.
//                         </p> */}
//                         {metiers.map((metier, index)=>{
//                             return( <ul> {metier.nom_metier} : {metier.description} </ul> )
//                         })}
//                         <p></p>
//                     </div>
//                 </div>
//             </div>
//             <div className="button">
//                 <button> <NavLink style={{ textDecoration: 'none' , color: 'white' }} to='/hireInfo'>Hire Now </NavLink></button>
//             </div>

//             <div className="contcontainer">
//                 <div className="profilcontainer">
//                     <div className="bascontainer">
//                         <div className="bas">
//                             <div className="titles">
//                                 <button onClick={() => handleButtonClick('0px, -14px', 'review')} style={{color: diplay.review ? '#B69B7D' : '#ffff'}} >Reviews</button>
//                                 <button onClick={() => handleButtonClick('133px, -14px', 'addreview')} style={{color: diplay.addreview ? '#B69B7D' : '#ffff'}} >Add Review</button>
//                             </div>
//                             <hr style={style} className="transition-hr" />
//                             <div className="content">
//                                 <Review display={diplay} />
//                                 <Addreview display={diplay} />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
