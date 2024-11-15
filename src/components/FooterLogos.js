import React from 'react';
import EstrellaImage from './../images/png/estrella_damm_logo.png';
import FooterTestImage from './../images/png/footer-test-logo.png';

const FooterLogos = () => {
    return (
        <div className="footer-logos">

            <h2>Our Sponsors <a href="/#">Become a sponsor</a></h2>
        
            <div className="footer-logos-first">
                <a href="/#">
                    <img src={EstrellaImage} alt="Estrella Damm Logo" loading="lazy" />
                </a>
            </div>

            <div className="footer-logos-second">
                <a href="/#"><img src={FooterTestImage} alt="Sponsor" loading="lazy" /></a>
                <a href="/#"><img src={FooterTestImage} alt="Sponsor" loading="lazy" /></a>
            </div>

            <div className="footer-logos-third">
                <a href="/#"><img src={FooterTestImage} alt="Sponsor" loading="lazy" /></a>
                <a href="/#"><img src={FooterTestImage} alt="Sponsor" loading="lazy" /></a>
                <a href="/#"><img src={FooterTestImage} alt="Sponsor" loading="lazy" /></a>
            </div>
        
        </div>
    );
}

export { FooterLogos };