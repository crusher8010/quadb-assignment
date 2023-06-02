import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
    return (
        <footer>
            <div className="footerContainer">
                <div className="socialIcons">
                    <Link to="#"><i className="fa-brands fa-facebook"></i></Link>
                    <Link to="#"><i className="fa-brands fa-instagram"></i></Link>
                    <Link to="#"><i className="fa-brands fa-twitter"></i></Link>
                    <Link to="#"><i className="fa-brands fa-google-plus"></i></Link>
                    <Link to="#"><i className="fa-brands fa-youtube"></i></Link>
                </div>
                <div className="footerNav">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Movies</Link></li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Our Team</li>
                    </ul>
                </div>
                <div className="footerBottom">
                    <p>CopyRight &copy;2023; Designed by <span className="designer">Anirudha</span></p>
                </div>
            </div>
        </footer>

    )
}

export default Footer;