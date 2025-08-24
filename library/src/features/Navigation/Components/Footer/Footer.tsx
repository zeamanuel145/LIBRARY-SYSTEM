import React from "react";
import './Footer.css';

import {Facebook,Instagram,Twitter} from '@mui/icons-material';

export const Footer: React.FC = () => {
    return (
        
            <div className="footer">
                <p className="footer-text">123,LibraryStreet</p>
                <p className="footer-text">Return Policy</p>
                <p className="footer-text">LateFees</p>
                <p className="footer-text">Library card conditions</p>
                <div className="footer-social-cluster">
                    <p className="footer-social-text">Socials</p>
                    <Facebook className="footer-social"/>
                    <Instagram className="footer-social"/>
                    <Twitter className="footer-social"/>

                </div>
                
            </div>

    )
};