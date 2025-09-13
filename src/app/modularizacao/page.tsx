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

export default function Modularizao() {
  return (
    <LayoutPaiTema>
      <Menu />
      <Body>
        <Container>
          <CHeader title="Modularização" />
          <Hr />
          <CH3 title="Vantagens" />
          <CArticle>
            <ol className="list-disc ps-5">
                <li>Permite reuso de código em vários projetos.</li>
                <li>Organização clara entre interface (cabeçalho) e implementação.</li>
                <li>Facilita manutenção, testes e colaboração em equipe.</li>
                <li>Escalável para projetos grandes.</li>
            </ol>
          </CArticle>
        </Container>
        <Container>
            <CH3 title="Desvantagens"/>
            <CArticle>
                <ol className="list-disc ps-5">
                    <li>Exige mais arquivos.</li>
                    <li>Precisa de compilação separada e linkagem.</li>
                    <li>Mais difícil para iniciantes entenderem a estrutura.</li>
                </ol>
            </CArticle>
        </Container>
      </Body>
    </LayoutPaiTema>
  );
}
