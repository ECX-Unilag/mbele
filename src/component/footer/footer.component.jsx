import { Link } from 'react-router-dom'
import './footer.style.css'

const Footer = () => {
    return ( 

        <div className="footer">

            <div className="cover">

            <div className="first">

                <div className="sharebox">
                  <p className="share">Share</p>
                  
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-twitter"></i>
                </div>

                <div className="follow">
                    <p className="share">Follow us</p>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-facebook-f"></i>
                   <i className="fab fa-twitter"></i>
                </div>
                


            </div>

            <div className="hrline"></div>

            <div className="fourbox">
                <div className="eachbox">
                    <p className="title">About</p>
                    <Link to="https://ecx.website/">Ecx</Link>
                    <Link to="">Testimonial</Link>
                    <Link to="https://thenextconf.web.app/team/">Meet the Team</Link>
                </div>

                <div className="eachbox">
                    <p className="title">Explore Past Events</p>
                    <Link to="https://drive.google.com/folderview?id=1TYVWOgivnKBAx-pBwyDXHU1N2kHFGXaO">ECX 1.0 2019</Link>
             
                </div>

                <div className="eachbox">
                    <p className="title">Events Resources</p>
                    <Link to="">Partnership Proposition</Link>
                    <Link to="">FAQs</Link>
                </div>

                <div className="eachbox">
                 
                    <Link to="">
                        No spam, only the latest news, updates and certificate information!
                    </Link>
                    <button className="subscribe">Subscribe</button>
                </div>

            </div>

            </div>


        </div>
     );
}
 
export default Footer;
