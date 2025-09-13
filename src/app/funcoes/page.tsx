"use client"

import Body from "../components/Body";
import Buttons from "../components/Buttons";
import CArticle from "../components/container/CArticle";
import CH3 from "../components/container/CH3";
import CHeader from "../components/container/CHeader";
import Container from "../components/container/Container";
import Hr from "../components/Hr";
import Menu from "../components/menu/Menu";
import LayoutPaiTema from "../components/theme/LayoutPaiTema";

export default function Funcoes() {
  return (
    <LayoutPaiTema>
      <Menu />
      <Body>
        <Container>
          <CHeader title="Funções" />
          <Hr />
          <CH3 title="Vantagens" />
          <CArticle>
            <ol className="list-disc ps-5">
                <li>Código mais simples de organizar em programas pequenos.</li>
                <li>Não precisa de múltiplos arquivos.</li>
            </ol>
          </CArticle>
        </Container>
        <Container>
            <CH3 title="Desvantagens"/>
            <CArticle>
                <ol className="list-disc ps-5">
                    <li>Difícil de manter em projetos grandes.</li>
                    <li>Sem reaproveitamento em outros programas.</li>
                    <li>Arquivo único pode ficar confuso.</li>
                </ol>
            </CArticle>
        </Container>
      </Body>
    </LayoutPaiTema>
  );
}
