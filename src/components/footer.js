import React from "react";
  
const Footer = () => {
    return (
        <footer className='box'>
            <div className='container'>
                <div className='row'>
                    <div className='column'>
                        <div className="heading">Email</div>
                        <a className='footerLink' href="www.google.com">katye333@gmail.com</a>
                    </div>
                    <div className='column'>
                        <div className="heading">Phone</div>
                        <a className='footerLink' href="www.google.com">(940) 393-0735</a>
                    </div>
                    <div className='column'>
                        <div className="heading">Follow Me</div>
                        <div className="followLinks">
                            <a className='footerLink' href="www.google.com" style={{marginRight:20}}>
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a className='footerLink' href="www.google.com">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                    <div className='column'>
                        <div className="subheading">&copy; 2023 By Kaitlin Stevens</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;