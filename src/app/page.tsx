"use client"
import Body from "./components/Body";
import Buttons from "./components/Buttons";
import CArticle from "./components/container/CArticle";
import CH3 from "./components/container/CH3";
import CHeader from "./components/container/CHeader";
import Container from "./components/container/Container";
import Footer from "./components/Footer";
import Hr from "./components/Hr";
import Menu from "./components/menu/Menu";
import LayoutPaiTema from "./components/theme/LayoutPaiTema";

export default function Inicio() {
  return (
    <LayoutPaiTema>
      <Menu />
      <Body>
        <Container>
          <CHeader title="Funções e Modularização" />
          <Hr />
          <CH3 title="Bem Vindo!" />
          <CArticle>
            <p>
              Aqui, você encontrará explicações, exemplos práticos e conteúdos
              interativos sobre dois temas essenciais:
            </p>
            <span className="flex items-center gap-2 justify-center w-full">
            <Buttons href="/funcoes" color="blue" title="Funções"/>
            <Buttons href="/modularizacao" color="blue" title="Modularização"/>
            </span>
            <p>
              Nosso objetivo é tornar o aprendizado mais colaborativo, visual e
              prático, reforçando a importância do trabalho em equipe no
              desenvolvimento de software.
            </p>
          </CArticle>
        </Container>
        <Footer/>
      </Body>
    </LayoutPaiTema>
  );
}
