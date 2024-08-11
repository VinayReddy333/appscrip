import { IoIosSearch } from "react-icons/io";
import { MdOutlineFavorite } from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";

import { IoManOutline } from "react-icons/io5";
import './index.css'



    const  Logo = () => {
        return (
            <div className="container">
                <img src="https://res.cloudinary.com/dsqi87vu5/image/upload/Logo_lij2nn.png" alt="logo" />
                <div className="logo-text">
                    <h1 className="heading">
                    LOGO</h1>
                </div>
                <div className="icons">
                    <IoIosSearch />
                    <MdOutlineFavorite />
                    <IoBagCheckOutline />
                    <IoManOutline />
                    <select>
                        <option>ENG</option>
                        <option>SPAIN</option>
                        <option>TELUGU</option>
                    </select>
                </div>
            </div>
        );
    }

    export default Logo;
    