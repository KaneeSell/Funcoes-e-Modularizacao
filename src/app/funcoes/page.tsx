"use client";

import Body from "../components/Body";
import CArticle from "../components/container/CArticle";
import CH3 from "../components/container/CH3";
import CHeader from "../components/container/CHeader";
import ContainerDiv from "../components/container/ContainerDiv";
import ContainerMD from "../components/container/ContainerMD";
import ContainerSM from "../components/container/ContainerSM";
import Footer from "../components/Footer";
import Hr from "../components/Hr";
import Menu from "../components/menu/Menu";
import LayoutPaiTema from "../components/theme/LayoutPaiTema";
import Comparativo from "./Comparativo";

export default function Funcoes() {
  return (
    <LayoutPaiTema>
      <Menu />
      <Body>
        <ContainerDiv>
          <ContainerSM>
            <CHeader title="Funções" />
            <Hr />
            <CH3 title="Vantagens" />
            <CArticle>
              <ol className="list-disc ps-5 text-start">
                <li>
                  <strong>Fácil Organização:</strong> Simples de organizar em
                  programas pequenos.
                </li>
                <li>
                  <strong>Poucos Arquivos:</strong> Não precisa de múltiplos
                  arquivos.
                </li>
              </ol>
            </CArticle>
          </ContainerSM>
          <ContainerSM aniDirecao={-100}>
            <CH3 title="Desvantagens" />
            <CArticle>
              <ol className="list-disc ps-5 text-start">
                <li>Difícil de manter em projetos grandes.</li>
                <li>Sem reaproveitamento em outros programas.</li>
                <li>Arquivo único pode ficar confuso.</li>
              </ol>
            </CArticle>
          </ContainerSM>
        </ContainerDiv>
        <ContainerMD>
          <CH3 title="Exemplos práticos" />
          <CArticle>
            <Comparativo />
          </CArticle>
        </ContainerMD>
        <Footer btnReturn />
      </Body>
    </LayoutPaiTema>
  );
}
