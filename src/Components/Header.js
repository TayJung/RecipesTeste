import React, { useState } from "react";
import * as S from "../Style/styleHeader";

const Header = () => {
  const [open, setOpen] = useState(false);

  const Modal = () => {
    return (
      <S.ContainerMobile>
        <S.NavBarMobile>
          <S.UlMobile>
            <S.LiMobile>
              <S.LinkMobile href="#about" alt="">
                About
              </S.LinkMobile>
            </S.LiMobile>
            <S.LiMobile>
              <S.LinkMobile href="#recipes" alt="">
                Recipes
              </S.LinkMobile>
            </S.LiMobile>
            <S.LiMobile>
              <S.LinkMobile href="#subscribe" alt="">
                Subscribe
              </S.LinkMobile>
            </S.LiMobile>
          </S.UlMobile>
        </S.NavBarMobile>
      </S.ContainerMobile>
    );
  };

  return (
    <S.Header>
      <S.ContainerHeader>
        <S.Logo>RC</S.Logo>
        <S.MenuResponsivo
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open === true ? "x" : "≡"}
        </S.MenuResponsivo>
        {open && Modal()}
        <S.NavBar>
          <S.Ul>
            <S.Li>
              <S.Link href="#about" alt="">
                {" "}
                About
              </S.Link>
            </S.Li>
            <S.Li>
              <S.Link href="#recipes" alt="">
                Recipes
              </S.Link>
            </S.Li>
            <S.Li>
              <S.Link href="#subscribe" alt="">
                Subscribe
              </S.Link>
            </S.Li>
          </S.Ul>
        </S.NavBar>
      </S.ContainerHeader>
      <S.ContainerTitle>
        <S.Title>Recipes</S.Title>
      </S.ContainerTitle>
    </S.Header>
  );
};
export default Header;
