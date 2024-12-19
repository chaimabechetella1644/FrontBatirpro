import { Navbar } from "../components/navbar/navbar"
import './home.css'
import page1_image from './image/9d4d3c6aadacab8c70857797a47d270f.jpg'
import Marketplace_image from './image/construction.png'
import Mains_ouvre_image from './image/machine-de-construction (1).png'
import Recrutement_image from './image/maison.png'
import aboutus_image from './image/i1-removebg-preview 1.png'
import offres_image from './image/offre_image.png'
import why_image from './image/2923fa2b219b9826ee3361474aaefb9a-removebg-preview.png'
import Advanced_Technology_img from './image/information-technology.png'
import Expert_Planning_img from './image/plan-daffaires.png'
import Quality_Results_img from './image/resultats.png'
import Trusted_Partnerships_img from './image/equipe.png'
import Skilled_Network_img from './image/gens.png'
import image from '../components/contentcard/images/9cda754c2b3e6e26ed346b6903fd5210-removebg-preview.png'
import { CardH } from "../components/home_card/card"
import { Footer } from "../components/footer/footer"
import Card from "../components/contentcard/contentcard"
import { Link, NavLink } from "react-router-dom"
import panier from '../components/navbar/image/panier.png'
import favoris from '../components/navbar/image/favori.png'
import card_image from '../components/home_card/image/5b8d8c75254d0c3a1bee5db241af2a89.jpg'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios";

export default function Home() {

    const [products, setProducts] = useState([]);
    const [profs, setProfs] = useState([]);
    const [loading, setLoading] = useState(true); // State to handle loading
    const [error, setError] = useState(null);
    const [isloggedIn, setIsLoggedIn] = useState([]);
    const [profil_pic, setProfilPic] = useState([]);

        useEffect(() => {
            const token = localStorage.getItem('authToken');
            const profilePicture = localStorage.getItem('profil_pic');
            if (token) {
                setIsLoggedIn(true);
                setProfilPic(profilePicture);
            }
        }, []);

        const handleRedirectProfils = (imgSrc, user_name, num_tlfn, address, description) => {
            navigate('/my_profils', {
                state: {
                    imgSrc,
                    user_name,
                    num_tlfn,
                    address,
                    description,
                },
            });
        };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/home/products/'); 
                setProducts(response.data.products);
                setProfs(response.data.professionals)
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchProducts()
    },[]);

    const items = [
        {
            imgSrc: Advanced_Technology_img,
            title: "Advanced Technology",
            description: "Easy access to premium construction materials."
        },
        {
            imgSrc: Expert_Planning_img,
            title: "Expert Planning",
            description: "Simplifies your project’s planning with tools and resources."
        },
        {
            imgSrc: Quality_Results_img,
            title: "Quality Results",
            description: "Focused on delivering only the best, we support."
        }
    ];


    const rightItems = [
        {
            imgSrc: Trusted_Partnerships_img,
            title: "Trusted Partnerships",
            description: "Collaborate with trusted suppliers and professionals."
        },
        {
            imgSrc: Skilled_Network_img,
            title: "Skilled Network",
            description: "We connect you to a network of skilled professionals."
        },
        {
            imgSrc: Advanced_Technology_img,
            title: "Cost Efficiency",
            description: "With our flexible delivery options and competitive prices."
        }
    ];

    const navigate = useNavigate();
    
        const handleRedirectPanier = () => {
            navigate('/panier');
        };

        const handleRedirectFavoris = () => {
            navigate('/favoris');
        };

        const handleRedirectMains = () => {
            navigate('/profils');
        };
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    
    function handleRec(){
        navigate('/recrutement');
    }
    function handleMarket(){
        navigate('/offers');
    }
    const handleLogout = () => {
        localStorage.removeItem('authToken'); 
        localStorage.removeItem('profil_pic'); 
        localStorage.removeItem('usertype'); 
        setIsLoggedIn(false); 
        navigate('/'); 
    };

    return(
        <div className="Home">
            <div className="navbar">
                <div className="navbar_left"></div>
                <div className="navbar_right">
                    <div className="info">
                        <ul>
                            <li> home </li>
                            {/* <li><Link to="home" smooth={true} duration={500}>Home</Link></li> */}
                            <li onClick={() => scrollToSection('about')}>About Us</li>
                            <li onClick={() => scrollToSection('products')}>Products</li>
                            <li onClick={() => scrollToSection('offers')}>Offers</li>
                            <li onClick={() => scrollToSection('profiles')}>Profiles</li>
                            <li onClick={() => scrollToSection('why-us')}>Why Us</li>
                        </ul>
                        <div className="icons">
                            <div onClick={handleRedirectPanier} style={{ cursor: 'pointer' }}>
                                <img src={panier} alt="Panier" />
                            </div>
                            <div onClick={handleRedirectFavoris} style={{ cursor: 'pointer' }}> <img src={favoris}  /></div>
                        </div>
                        {isloggedIn ? (
                        <>
                            <button onClick={handleLogout}>Logout</button>
                            <div className="profile-icon">
                                <img
                                    src={profil_pic|| 'default-avatar.png'} // Fallback image
                                    alt="Profile"
                                    style={{
                                        borderRadius: '50%',
                                        width: '34px',
                                        height: '32px',
                                        objectFit: 'cover',
                                        position: 'absolute',
                                        top: '2px',
                                        right: '5px',
                                        cursor: 'pointer',
                                        border: '2px solid #EA5501',
                                    }}
                                />
                            </div>
                        </>
                    ) : (
                        <button onClick={() => navigate('/login')}>Connect</button>
                    )}
                    </div>
                </div>
            </div>
            <div className="page1">
                <div className="image">
                    <img src={page1_image}/>
                    <div className='image_op'> 
                        <div className="text">
                            <h1>Bienvenue Batipro</h1>
                            <h1>the best platform of our  construction </h1>
                            <h1>aid for you my dear</h1>
                            <button>explore</button>
                        </div>
                    </div>

                </div>
                <div className="categorie_card">
                    <div className="simple_card">
                        <div onClick={()=>{navigate('/offers');}}>
                            <img src={Marketplace_image} />
                            <p>Marketplace</p>
                        </div>
                        <div onClick={handleRedirectMains}>
                        
                            <img src={Mains_ouvre_image} alt="Mains d'ouvre" />
                            <p>Mains d'ouvre</p>
                        </div>
                        <div onClick={()=>{navigate('/recrutement');}}>
                            <img src={Recrutement_image} />
                            <p >Recrutement</p>
                        </div>
                    </div>
                </div>
            </div>
           
            <div id="about" className="about_us">
                <div className="img">
                    <img src={aboutus_image}/>
                </div>
                <div className="text">
                    <h1> About us </h1>
                    <p>
                        Batirpro is a dedicated platform for Algeria’s construction industry, 
                        connecting customers with top-quality materials and skilled professionals.
                        Whether you're looking for tiles, plumbing services, or expert craftsmanship,
                        we simplify access to trusted resources with an extensive catalog and seamless delivery options.
                        At Batirpro, we’re building a better way to construct—together. options. At Batirpro, 
                        we’re building a better way to construct—together.options. At Batirpro, we’re building a better way
                    </p>
                </div>
            </div>
           

            <div id="products"  className="Products">
                <h1> Our Products</h1>
                <div className="cardcontainerss">
                    <div className="here"> 
                        {products.map((todo, index)=>{
                            return( <Card   
                                        key={index + 1}   
                                        product_id = {todo.id_produit} 
                                        image = {todo.image_url} 
                                        description = {todo.description} 
                                        productName={todo.nom} 
                                        price={todo.prix} 
                                    />)
                        })}

                    </div>
                </div>
            </div>

            <div id="offers" className="offre">
                <div className="text">
                    <h1> our offres </h1>
                    <p>
                        Batirpro is a dedicated platform for Algeria’s construction industry, 
                        connecting customers with top-quality materials and skilled professionals.
                        Whether you're looking for tiles, plumbing services, or expert craftsmanship,
                        we simplify access to trusted resources with an extensive catalog and seamless delivery options.
                        At Batirpro, we’re building a better way to construct—together. options. At Batirpro, 
                        we’re building a better way to construct—together.options. At Batirpro, we’re building a better way
                    </p>
                </div>
                <div className="img">
                    <img src={offres_image}/>
                </div>
            </div>
            <div 
                style={{ cursor: 'pointer' }} id="profiles" className=" Profils">
                <h1> our  profils</h1>
                <div className="card_home">
                    {profs.map((card, index) => (
                        <NavLink style={{ textDecoration: 'none' , color: 'black' }}
                        key={index}
                        to={`/my_profils?id=${encodeURIComponent(card.id)}`}
                        // to={`/my_profils?id=${encodeURIComponent(card.id)}imgSrc=${encodeURIComponent(card.image_url)}&user_name=${encodeURIComponent(card.client.username)}&num_tlfn=${encodeURIComponent(card.client.telephone)}&address=${encodeURIComponent(card.localisation)}`}
                        >
                            <CardH 
                            key={index + 1}   
                            imgSrc = {card.image_url} 
                            title = {card.client.first_name + ' ' +card.client.last_name}
                            description = {card.description_experience} />
                        </NavLink>
                    ))}
                </div>
            </div>

            <div id="why-us" className="why">
                <h1 className="title"> Why choose batirpro? </h1>
                <h1 className="title1"> high quality innovate design </h1>
                <div className="quality">
                <div className="left">
                    {items.map((item, index) => (
                        <div
                            className={`quati1 ${index === 1 ? 'quati3' : ''}`}
                            key={index}
                        >
                            <div className="img">
                                <img src={item.imgSrc} alt={item.title} />
                            </div>
                            <div className="text">
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                    <div className="middle_img">
                        <img src={why_image}/>
                    </div>

                    <div className="right">
                        {rightItems.map((item, index) => (
                            <div
                                className={`quati2 ${index === 1 ? 'quati4' : ''}`}
                                key={index}
                            >
                                <div className="img">
                                    <img src={item.imgSrc} alt={item.title} />
                                </div>
                                <div className="text">
                                    <h1>{item.title}</h1>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    

                </div>
            </div>

            <Footer/>

        </div>
    )

}