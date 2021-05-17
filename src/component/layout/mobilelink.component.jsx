import {useState} from 'react';
import { MobileNav,Hamburger,MobileLink,Icons } from './linkstyles/linkstyle';
import{NavLink} from 'react-router-dom'
import twit from '../../assets/twitter 1 (1).png'
import linked from '../../assets/linkedin (1) 1.png'
import ig from '../../assets/instagram 1 (1).png'

const MobileLinkednav = () => {
    const [isShowing,setShowing] =  useState(false)
    const toggleShowing = ()=>{
        setShowing(!isShowing)
    }
    return (
        <MobileNav>

            <Hamburger onClick={toggleShowing} isClear={isShowing} >
                <div></div>
                <div></div>
            </Hamburger>

            <MobileLink  isOpen = {isShowing} >
                <div>
                        <ul>
                            <li> <NavLink onClick={toggleShowing} to='/'>About</NavLink> </li>
                            <li> <NavLink onClick={toggleShowing} to='/about'>Speakers</NavLink></li>
                            <li> <NavLink onClick={toggleShowing} to='/project'>Schedule </NavLink></li>
                            <li> <NavLink onClick={toggleShowing} to='/contact'>Register</NavLink> </li>

                        </ul>
                        <Icons>
                            <a href="https://twitter.com/ecxunilag"><img src={twit} alt="twitter" /></a> 
                            <a href="https://twitter.com/ecxunilag"><img src={linked} alt="linkedin" /></a>
                            <a href="https://twitter.com/ecxunilag"><img src={ig} alt="instagram" /></a> 
                            
                        </Icons>

                </div>
                
               
            </MobileLink>

        </MobileNav>

            

      
        
     );
}
 
export default MobileLinkednav;
