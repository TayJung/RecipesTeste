import Styled from "styled-components";

export const Footer = Styled.footer`
display:flex;
flex-direction:column;
width:100%;
height:49vh;
@media only screen and (min-width: 320px) and (max-width: 500px){
  height:90vh;
}

`;
export const ContainerNavFooter = Styled.section`
width:100%;
height:30vh;
display:flex;
justify-content: space-around;
align-items:center;
@media only screen and (min-width: 320px) and (max-width: 500px){
  height:100vh;
  
  flex-direction:column-reverse;
  justify-content: center;
}
`;

export const BoxNetworks = Styled.div`
width:20%;
display:flex;
justify-content:space-evenly;
@media only screen and (min-width: 320px) and (max-width: 800px){
  width:80%;  
  height:20vh;
  align-items:center;
}
`;
export const ImageNetworks = Styled.img`
width:15%;
cursor:pointer;
@media only screen and (min-width: 320px) and (max-width: 800px){
width:18%;
height:50%
}
`;

export const BoxNav = Styled.nav`
width:60%;
height:7vh;

display:flex;
justify-content:flex-end;
@media only screen and (min-width: 320px) and (max-width: 800px){
  width:100%;
  height:40vh;
 
}
`;

export const Ul = Styled.ul`
width:80%;
display:flex;
justify-content:space-evenly;
align-items:center;
list-style:none;
@media only screen and (min-width: 320px) and (max-width: 800px){
  flex-direction:column;
  width:100%;

  
}
`;
export const Link = Styled.a`
color:#373737;
text-decoration:none;
text-transform: uppercase;
font-size:1em;
font-weight:700;

`;

export const Li = Styled.li`
width:20%;
height:6vh;
display:flex;
align-items:center;
justify-content:center;
&:hover{
  border: #373737 solid 3px;
}
@media only screen and (min-width: 320px) and (max-width: 800px){
width:40%;
height:8vh;
}
`;

export const ContainerInfo = Styled.section`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:100%;
height:15vh;
background-color:#446061;
@media only screen and (min-width: 320px) and (max-width: 800px){
width:100%;
height:20vh;
}
`;

export const P = Styled.p`
color:#FFFFFF;
font-size:0.8em;
text-align:justify;
@media only screen and (min-width: 320px) and (max-width: 800px){
  font-size:0.4em;
  width:90%;
}
`;
