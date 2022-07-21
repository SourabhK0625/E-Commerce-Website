import React from "react";
import youtube from "../../Assets/youtube.jpg"
import spotify from "../../Assets/spotify.jpg"
import facebook from "../../Assets/facebook.jpg"
import "./Footer.css"
const Footer = props =>
{
    return (
       
        <div className="footer">The Generics
            <img alt="" className="imageYoutube" src={youtube}></img>
            <img alt="" className="imageSpotify" src={spotify}></img>
            <img alt="" className="imageFacebook" src={facebook}></img>
        </div>
            
       
        
    )
};
export default Footer;