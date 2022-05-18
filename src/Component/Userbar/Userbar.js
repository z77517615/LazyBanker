import React  from "react";
import './Userbar.css'
import { useAuthContext } from '../../Hooks/useAuthContext';


export default function Userbar(){
    const {user} =useAuthContext()

    return ( 
        <nav className="userbar">
            <ul>
            {user && (
                <>  
                    <img src ={user.photoURL}></img>
                    <div>
                        <li className="name">Hello , {user.displayName}</li>
                        <p>Welcome to create your own Financial Tracker</p>
                    </div>

                </>
            )}
            </ul>
        </nav>
     );
}
 