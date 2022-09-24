import Styled, { createGlobalStyle } from "styled-components";
import Background from "../Assets/ImagesHeader/backgroundHeader.png";
import BackgroundMobile from "../Assets/ImagesHeader/backgroundHeaderMobile.png";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400&display=swap');
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family: 'Montserrat', sans-serif;
  list-style:none;
}
`;

export const Header = Styled.header`
background-image:url(${Background});
background-size:100% 100vh;
background-repeat:no-repeat;
width:100%;
height:100vh;
border:solid #FFFFFF 15px;
@media only screen and (min-width: 320px) and (max-width: 800px){
  background-image:url(${BackgroundMobile});
  border:solid #FFFFFF 10px;
  height:110vh;
  background-size:100% 110vh;
}

`;

export const ContainerHeader = Styled.section`
width:100%;
height:15vh;
display: flex;
justify-content:space-between;
align-items:center;
`;

export const Logo = Styled.h2`
color:#373737;
font-size:3em;
display: flex;
align-items:center;
height:15vh;
width:20%;
justify-content:center;
@media only screen and (min-width: 320px) and (max-width: 500px){
  opacity:0;
}
`;

export const NavBar = Styled.nav`
width:50%;
height:15vh;
justify-content:center;
display: flex;
align-items:center;

@media only screen and (min-width: 320px) and (max-width: 500px){
 display:none;
}
`;

export const Ul = Styled.ul`
width:80%;
display:flex;
justify-content:space-evenly;
align-items:center;
list-style:none;
`;

export const Link = Styled.a`
color:#373737;
text-decoration:none;
text-transform: uppercase;
font-size:1em;
font-weight:700;

`;

export const Li = Styled.li`
width:25%;
height:6vh;
display:flex;
align-items:center;
justify-content:center;
&:hover{
  border: #373737 solid 3px;
}
`;

export const ContainerTitle = Styled.section`
display:flex;
align-items:center;
justify-content:center;
width:100%;
height:81vh;
`;

export const Title = Styled.h1`
text-transform: uppercase;
color:#373737;
font-size:5em;
font-weight:600;
@media only screen and (min-width: 320px) and (max-width: 800px){
  font-size:2em;
}
`;

export const MenuResponsivo = Styled.button`
opacity:0;
@media only screen and (min-width: 320px) and (max-width: 500px){
  opacity:1;
  background:none;
  border:none;
  font-size:2em;
  font-weight:bold;
  margin-right:2vw;
  padding-bottom:5vh;
  color:#373737;
}
`;

export const ContainerMobile = Styled.section`

width:70%;
backdrop-filter:blur(3px);
height:60vh;
z-index:5;
display:flex;
align-items:center;
justify-content:center;
background: rgb(55,55,55);
background: linear-gradient(24deg, rgba(55,55,55,0.8855917366946778) 15%, rgba(102,84,72,0.5130427170868348) 59%, rgba(255,255,255,1) 90%);
margin-top:45vh;

`;

export const NavBarMobile = Styled.nav`
display:flex;
align-items:center;
justify-content:center;
height:100%;
width:100%;
`;

export const UlMobile = Styled.ul`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
gap:2rem;
width:70%;
height:60vh;
`;

export const LiMobile = Styled.li`

`;
export const LinkMobile = Styled.a`
color:#373737;
text-decoration:none;
text-transform: uppercase;
font-size:1em;
font-weight:700;
`;
