import Styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400&display=swap');
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family: 'Montserrat', sans-serif;

}
`;

export const Main = Styled.main`
width:100%;
display:flex;
flex-direction:column;
align-items:center;
background:#F2F4F1;
`;

export const BoxTitulo = Styled.div`
width:100%;
height:30vh;
display:flex;
align-items:center;
justify-content:center;
text-transform: uppercase;
`;

export const TitleRecipes = Styled.h2`
color:#373737;
font-size:2em;
&:after{
  content:'';
  display:block;
  border-bottom: #373737 solid 3px;
  width:30%;
  margin-left:35%;
  margin-top:3vh;
}
@media only screen and (min-width: 320px) and (max-width: 800px){
  font-size:2em; 
  &:after{  
  width:30%;
  margin-left:35%;
  margin-top:3vh;
}  
}
`;

export const ContainerImage = Styled.section`
width:90%;
height:90vh;
display:flex;
flex-direction:column;
@media only screen and (min-width: 320px) and (max-width: 500px){
  height:250vh; 
}
`;

export const BoxMenu = Styled.div`
width:100%;
display:flex;
justify-content:space-around;
@media only screen and (min-width: 320px) and (max-width: 500px){
  flex-direction:column;
  align-items:center;
}
`;

export const BoxImage = Styled.div`
width:20vw;
height:60vh;
background:#FFFFFF;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
box-shadow: 0px 7px 6px #00000029;
color:#373737;
@media only screen and (min-width: 320px) and (max-width: 500px){
  width:90%;
  height:70vh;
  margin-top:10vh;
}
`;

export const ImageFood = Styled.img`
width:100%;
height:26vh;
@media only screen and (min-width: 320px) and (max-width: 500px){
  height:36vh;
}
`;
export const RecipesName = Styled.p`
color:#373737;
font-size:1em;
margin-bottom:12vh;
&:before{
  content:'';
  display:block;
  border-bottom: #373737 solid 3px;
  width:30%;
  margin-left:32%;
  margin-bottom:3vh;
}
@media only screen and (min-width: 320px) and (max-width: 800px){
  &:before{
    width:30%;
  margin-left:32%;
  }
}
`;

export const ContainerAbout = Styled.section`
width:100%;
height:90vh;
display:flex;
@media only screen and (min-width: 320px) and (max-width: 500px){
  flex-direction:column;
  align-items:center;
  height:190vh; 
}
`;

export const ImageAbout = Styled.img`
width:50%;
@media only screen and (min-width: 320px) and (max-width: 500px){
  width:100%;
}
`;
export const BoxAbout = Styled.div`
width:50%;
background:#FFFFFF;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
@media only screen and (min-width: 320px) and (max-width: 500px){
  width:100%;
  height:200vh;
}
`;

export const TextAbout = Styled.p`
width:30vw;
color:#373737;
font-size:1em;
@media only screen and (min-width: 320px) and (max-width: 800px){
  width:90%;
}
`;

export const TitleAbout = Styled.h2`
text-transform: uppercase;
color:#373737;
margin-bottom:13vh;
&:after{
  content:'';
  display:block;
  border-bottom: #373737 solid 3px;
  width:40%;
  margin-left:30%;
  margin-top:3vh;
}
@media only screen and (min-width: 320px) and (max-width: 500px){ 
  &:after{
    width:40%;
    margin-left:30%;
  }
}
`;

export const ContainerSubscribe = Styled.section`
width:100%;
height:60vh;
justify-content:center;
display:flex;
flex-direction:column;
align-items:center;

`;

export const TitleSubscribe = Styled.h2`
color:#373737;
text-transform: uppercase;
margin-bottom:2.5vh;
`;
export const SubTitle = Styled.h3`
color:#373737;
font-weight:100;
font-size:1.5em;
margin-bottom:2.5vh;
`;
export const Input = Styled.input`
width:30%;
height:10vh;
outline:none;
border:none;
padding-left:2vw;
margin-bottom:2.5vh;
@media only screen and (min-width: 320px) and (max-width: 500px){
  width:90%;
}
`;

export const Button = Styled.button`
width:10%;
height:7vh;
border: #373737 solid 3px;
text-transform: uppercase;
font-size:1em;
font-weight:600;
cursor:pointer;
color:#373737;
&:hover{
color:#fff;
background-color:#373737;
}
@media only screen and (min-width: 320px) and (max-width: 500px){
  width:90%;
  height:10vh;
}
`;
