import Linked from './navigationlink.component';
import {Nav,CoverNav} from './linkstyles/linkstyle';
import Logoplace from './logo.component';
import MobileLinkednav from './mobilelink.component';



const Navbar = () => {
    return ( 
        <CoverNav>
            <Nav>
       
                <Logoplace/>
                <Linked/>
                <MobileLinkednav/>
            
            </Nav>

        </CoverNav>
        
            
           
        
     );
}
 
export default Navbar;