import React from "react";
import RedVelvet from "../Assets/ImagesMain/redVelvetCake.png";
import Pizza from "../Assets/ImagesMain/margheritaPizza.png";
import Smoothie from "../Assets/ImagesMain/peanutSmoothie.png";
import ImageAbout from "../Assets/ImagesMain/imageAbout.png";
import * as S from "../Style/styleMain";

const Main = () => {
  return (
    <S.Main>
      <S.BoxTitulo id="recipes">
        <S.TitleRecipes>Latest Recipes</S.TitleRecipes>
      </S.BoxTitulo>
      <S.ContainerImage>
        <S.BoxMenu>
          <S.BoxImage>
            <S.ImageFood src={RedVelvet} alt="" />
            <S.RecipesName>Red Velvet Cake</S.RecipesName>
          </S.BoxImage>
          <S.BoxImage>
            <S.ImageFood src={Pizza} alt="" />
            <S.RecipesName>Margherita Pizza</S.RecipesName>
          </S.BoxImage>
          <S.BoxImage>
            <S.ImageFood src={Smoothie} alt="" />
            <S.RecipesName>Peanut Smoothie</S.RecipesName>
          </S.BoxImage>
        </S.BoxMenu>
      </S.ContainerImage>
      <S.ContainerAbout id="about">
        <S.ImageAbout src={ImageAbout} alt="" />
        <S.BoxAbout>
          <S.TitleAbout>About</S.TitleAbout>
          <S.TextAbout>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu
            tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis
            dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur lorem,
            quis tempor lorem justo quis nisi. Nam interdum, nisi nec mollis
            sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris.
            Pellentesque mattis hendrerit semper. Orci varius natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus mus. Ut
            vestibulum nisl ante, et ultricies sapien facilisis aliquam.
          </S.TextAbout>
        </S.BoxAbout>
      </S.ContainerAbout>
      <S.ContainerSubscribe id="subscribe">
        <S.TitleSubscribe>Subscribe</S.TitleSubscribe>
        <S.SubTitle>Sign up for newsletter</S.SubTitle>
        <S.Input placeholder="Your Email" />
        <S.Button type="submit">submit</S.Button>
      </S.ContainerSubscribe>
    </S.Main>
  );
};
export default Main;
