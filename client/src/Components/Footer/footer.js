import React from 'react';
import FooterLogo from '../../assets/Hackathon-logo.jpg'
import {Link} from 'react-router-dom'
import './footer.css'
const Footer =() =>{
    return(
        <div className='footer'>
           
                <div className='c-1' id='logofooter'>
                    <Link to='/'> <img src={FooterLogo}></img> </Link>   
                </div>
                <div className='c-1'>
                    <h3>Quick Links</h3>
                   <Link style={{textDecoration:'none'}}  to='/about-us'> <p style={{color:'white'}}>About us</p> </Link>
                    <p>Quote</p>
                    <Link style={{textDecoration:'none'}}  to='/faqs'> <p style={{color:'white'}}>FAQs</p> </Link>

                    </div>
                <div className='c-1'>
                    <h3>Information</h3>
                    <Link style={{textDecoration:'none'}}  to='/privacy-policy'> <p style={{color:'white'}}>Privacy Policy</p> </Link>
                    <Link style={{textDecoration:'none'}}  to='/termsofuse'> <p style={{color:'white'}}>Terms of Use</p> </Link>
                    <p>Sitemap</p>
                </div>
            
            <div className='c-1'>
                <h3>Connect With Us</h3>
                <Link style={{textDecoration:'none'}}  to='/contact-us'> <p style={{color:'white'}}>Contact us</p> </Link>

            </div>
        </div>
    );
}
export default Footer