"use client";

import Body from "../components/Body";
import Buttons from "../components/Buttons";
import Code from "../components/Code";
import CArticle from "../components/container/CArticle";
import CH3 from "../components/container/CH3";
import CHeader from "../components/container/CHeader";
import Container from "../components/container/Container";
import ContainerMD from "../components/container/ContainerMD";
import Hr from "../components/Hr";
import Menu from "../components/menu/Menu";
import LayoutPaiTema from "../components/theme/LayoutPaiTema";
import Comparativo from "./Comparativo";

export default function Modularizao() {
  return (
    <LayoutPaiTema>
      <Menu />
      <Body>
        <Container aniDirecao={100}>
          <CHeader title="Modularização" />
          <Hr />
          <CH3 title="O que é Modularização" />
          <CArticle>
            <ol className="list-disc ps-5 text-start">
              <li>
                <strong>Definição:</strong> É a prática de dividir um programa
                em módulos menores (arquivos, pacotes, bibliotecas, funções)
                para melhorar organização, reutilização e manutenção.
              </li>
              <li>
                <strong>Diferença de apenas usar funções:</strong>
                <ol className="list-disc ps-5 text-start">
                  <li>
                    <strong>Função isolada:</strong> Só organiza um pedaço de
                    código.
                  </li>
                  <li>
                    <strong>Modularização:</strong> organiza o programa inteiro
                    em partes independentes que podem ser importadas,
                    reutilizadas e testadas separadamente.
                  </li>
                  <li>
                    <strong>Em C:</strong> Isso geralmente significa dividir o
                    programa em múltiplos arquivos <code>.c</code> e{" "}
                    <code>.h</code>, cada um representando um módulo.
                  </li>
                </ol>
              </li>
            </ol>
          </CArticle>
        </Container>
        <Container aniDirecao={-100}>
          <CH3 title="Vantagens" />
          <CArticle>
            <ol className="list-disc ps-5 text-start">
              <li>
                <strong>Organização do código:</strong> mais limpo e
                compreensível.
              </li>
              <li>
                <strong>Reutilização:</strong> um módulo pode ser usado em
                outros projetos.
              </li>
              <li>
                <strong>Manutenção facilitada:</strong> corrigir ou melhorar só
                um módulo, sem mexer no resto.
              </li>
              <li>
                <strong>Trabalho em equipe:</strong> cada pessoa pode trabalhar
                em um módulo diferente.
              </li>
              <li>
                <strong>Escalável para projetos grandes:</strong> pode ser
                facilmente expandido.
              </li>
              <li>
                <strong>Facilidade de teste:</strong> cada módulo pode ser
                testado separadamente.
              </li>
              <li>
                <strong>Facilidade de depuração:</strong> erros podem ser
                encontrados e corrigidos mais rapidamente.
              </li>
              <li>
                <strong>Redução de custos:</strong> menos trabalho duplicado.
              </li>
            </ol>
          </CArticle>
        </Container>
        <Container aniDirecao={100}>
          <CH3 title="Desvantagens" />
          <CArticle>
            <ol className="list-disc ps-5 text-start">
              <li>
                <strong>Exige mais arquivos:</strong> Isso pode ser um problema
                para projetos pequenos.
              </li>
              <li>
                <strong>
                  Mais difícil para iniciantes entenderem a estrutura:
                </strong>{" "}
                Isso pode ser um problema para projetos pequenos.
              </li>
            </ol>
          </CArticle>
        </Container>
        <ContainerMD>
          <CH3 title="Exemplos práticos" />
          <CArticle>
            <Comparativo />
          </CArticle>
        </ContainerMD>
        <Container aniDirecao={-100}>
          <CH3 title="Conclusão" />
          <CArticle>
            <ol className="list-disc ps-5 text-start">
              <li>
                <strong>Em C, modularização:</strong> dividir em múltiplos
                arquivos <Code code=".c" /> + <Code code=".h" />.
              </li>
              <li>
                <strong>Em JS/TS (Nest/Angular), modularização:</strong> Já é
                nativa, cada módulo organiza parte do sistema.
              </li>
              <li>
                <strong>Modularizar ≠ apenas usar funções:</strong> É organizar todo o sistema em partes independentes.
              </li>
            </ol>
          </CArticle>
        </Container>
      </Body>
    </LayoutPaiTema>
  );
}
