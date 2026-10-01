import "./Footer.css";
function Footer(){
    return(
     <footer className="footer">
        <div className="footer-container">
            <div className="footer-section">
                <h1>
                    MyWebsite
                </h1>
                <p>
                    Building modern and responsive 
                    web application using React
                </p>
            </div>
            <div className="footer-section">
                <h3>Quick Links</h3>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/services">Services</a>
                <a href="/contact">Contact</a>
            </div>
            <div className="footer-section">
                <h3>Contact</h3>
                <p>Email:example@gmail.com</p>
                <p>Phone:9798301958</p>
                <p>India</p>
            </div>

        </div>
        <div className="footer-bottom">
            <p>
                @2026 MyWebsite.All Rights Reserved
            </p>
        </div>
     </footer>
    )
}

export default Footer;