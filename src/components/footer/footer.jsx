import React from "react";
import './footer.css';
import { useNavigate } from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate();

    const redirect = () => {
        navigate('/contact');
    }

    return (
        <div className="foot-main-div">
            <div className="text-foot">GET IN TOUCH WITH US TODAY!</div>
            <button className="foot-button" onClick={redirect}>CONTACT US</button>
        </div>
    )
}
