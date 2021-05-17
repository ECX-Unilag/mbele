import Linked from './navigationlink.component';
import {Nav} from './linkstyles/linkstyle';
import Logoplace from './logo.component';
import MobileLinkednav from './mobilelink.component';



const Navbar = () => {
    return ( 
        <Nav>
       
                <Logoplace/>
                <Linked/>
                <MobileLinkednav/>
            
        </Nav>
            
           
        
     );
}
 
export default Navbar;