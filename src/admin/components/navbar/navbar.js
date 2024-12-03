
import profile_image from './images/5b8d8c75254d0c3a1bee5db241af2a89.jpg'
import './navbar.css'
import { Link ,NavLink } from 'react-router-dom'

export function Navbar() {
    return(
        <div className="navbar_admin">
            <div className="logo"> 
                <img src={profile_image}/>
            </div>
            
            <NavLink
                to="/ProffesionalProfils"
                style={({ isActive }) =>
                    isActive
                    ? {
                        width: "100%",
                        alignItems: "center",
                        textAlign: "center",
                        border: "1px solid var(--main-color2)",
                        padding: "5px 0px",
                        borderRadius: "5px",
                        backgroundColor: "var(--main-color1)",
                        color: "white"
                        }
                    : {}
                }
                >
                Admin Name
            </NavLink>
            <NavLink
                to="/profiles"
                style={({ isActive }) =>
                    isActive
                    ? {
                        width: "100%",
                        alignItems: "center",
                        textAlign: "center",
                        border: "1px solid var(--main-color2)",
                        padding: "5px 0px",
                        borderRadius: "5px",
                        backgroundColor: "var(--main-color1)",
                        color: "white"
                        }
                    : {}
                }
                >
                ProfiLe
            </NavLink>
            <NavLink
                to="/demands"
                style={({ isActive }) =>
                    isActive
                    ? {
                        width: "100%",
                        alignItems: "center",
                        textAlign: "center",
                        border: "1px solid var(--main-color2)",
                        padding: "5px 0px",
                        borderRadius: "5px",
                        backgroundColor: "var(--main-color1)",
                        color: "white"
                        }
                    : {}
                }
                >
                Demmande
            </NavLink>
            <NavLink
                to="/addProduct"
                style={({ isActive }) =>
                    isActive
                    ? {
                        width: "100%",
                        alignItems: "center",
                        textAlign: "center",
                        border: "1px solid var(--main-color2)",
                        padding: "5px 0px",
                        borderRadius: "5px",
                        backgroundColor: "var(--main-color1)",
                        color: "white"
                        }
                    : {}
                }
                >
                Ajouter
            </NavLink>
            <NavLink
                to="/commands"
                style={({ isActive }) =>
                    isActive
                    ? {
                        width: "100%",
                        alignItems: "center",
                        textAlign: "center",
                        border: "1px solid var(--main-color2)",
                        padding: "5px 0px",
                        borderRadius: "5px",
                        backgroundColor: "var(--main-color1)",
                        color: "white"
                        }
                    : {}
                }
                >
                 orders
            </NavLink>
            
        </div>
    )
}