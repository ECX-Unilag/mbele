import styled from "styled-components";
import { color } from "../../theme/color";
import { font } from "../../theme/font";



export const CoverNav = styled.div`
   
   position:fixed;
   top:0;
   right:0;
   width:100%;
   background-color:${color.darkblue};

`


// nav style
export const Nav = styled.nav`   
    position:relative;
    width: 85%;
    margin: auto;
    padding: 30px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

// nav container
export const Nav_container = styled.div`


`

// nav ul styles
export const Links = styled.ul`
 
      display: flex;
      width: 40%;
      justify-content: space-between;
      li{ 
        list-style: none;
        a{
           text-decoration: none;
           font-family :  ${font.textfont}; 
           font-size: 16px;
           color:  ${color.textwhite};
           font-weight: 400;
           &:hover{
             color: ${color.buttonyellow};
             text-decoration: underline;
           }

        }
        /* .active{
          font-weight: 600;
          color:  ${color.buttonyellow};
          text-decoration: underline;
        } */
           
      }
      @media (max-width:768px){
        display: none;
      }

`


// Logo style
export const Logos = styled.div`
  
  width:70px;
  @media(max-width:500px){
    
  }
  img{
      width:100%;
      
  }

`

// mobilenav

export const MobileNav = styled.nav`
      display:none;
      @media(max-width:786px){
        display:block;     
      }


`

// mobile Link
export const MobileLink = styled.div`
     
    background:${color.portblue};
    position:fixed;
    top:0;
    right:0;
    overflow:hidden;
    transition:0.5s ease;
    width:${props=> props.isOpen ? '100vw' : '0'};
    height:${props=> props.isOpen ? '100vh' : '0'};
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:2;
    div:first-child{
      width:50%;
      margin:auto;
      text-align:center;
    }

    ul{
      
      li{
        margin-bottom: 30px;
        list-style-type:none;
        a{
          text-decoration:none;
          color:#ffffff;
          font-size:20px;
          font-weight:600px;
        }
      }
      
    }


`

// Icons
export const Icons = styled.div`
   
   display:flex;
 
   width:70%;
   margin-top:10px;
   margin:auto;
   justify-content:space-between;
   @media(max-width:500px){
     width:70%;
   }

   a{

     text-decoration:none;
     
   }

`

// hamburger
export const Hamburger = styled.button`   
   position:absolute;
   background:transparent;
   border:transparent;
   &:focus{
     outline:none;
   }
   top:36px;
   right:30px;
   z-index:4;
   @media(max-width:500px){
     top:36px;
     right:2px;
   }
   div:first-child{
    transform: ${props=> props.isClear ? "rotate(45deg)":"rotate(0deg)"};
    width: 25px;
    height: 3px;
    border-radius: 5px;
    transition:0.5s ease;
    background:${color.buttonyellow};
    margin-bottom:${props=>props.isClear?"0px": "10px"};
   }
   div:last-child{
    transition:0.5s ease;
    float:right;
    transform: ${props=> props.isClear ? "rotate(-45deg)":"rotate(0deg)"};
    width:${props=>props.isClear?"25px": "18px"};
    height:3px;
    background:${color.buttonyellow}
   }
  

`