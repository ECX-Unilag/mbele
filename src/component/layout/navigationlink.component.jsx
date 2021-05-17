import { Links } from './linkstyles/linkstyle';
import{NavLink} from 'react-router-dom'

const Linked = () => {
    return ( 
        <Links>
            <li> <NavLink to=''>About</NavLink></li>
            <li> <NavLink to='/'>Speakers</NavLink> </li>
            <li> <NavLink to=''>Schedule </NavLink></li>
            <li> <NavLink to=''>Register</NavLink> </li>
        </Links>
     );
}
 
export default Linked;
