import { Links } from './linkstyles/linkstyle';
import{NavLink} from 'react-router-dom'

const Linked = () => {
    return ( 
        <Links>
            <li> <NavLink to='/'>Home</NavLink> </li>
            <li> <NavLink to=''>About</NavLink></li>
            <li> <NavLink to=''>Projects </NavLink></li>
            <li> <NavLink to=''>Contact</NavLink> </li>
        </Links>
     );
}
 
export default Linked;