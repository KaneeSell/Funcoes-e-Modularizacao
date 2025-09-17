"use client";

import Body from "../components/Body";
import CodeBlock from "../components/CodeBlock";
import CArticle from "../components/container/CArticle";
import CH3 from "../components/container/CH3";
import CHeader from "../components/container/CHeader";
import Container from "../components/container/Container";
import ContainerMD from "../components/container/ContainerMD";
import Footer from "../components/Footer";
import Hr from "../components/Hr";
import Menu from "../components/menu/Menu";
import LayoutPaiTema from "../components/theme/LayoutPaiTema";
import Comparativo from "./Comparativo";

export default function Funcoes() {
  const exemplo = `int nome(int parametros) {
	return "Saída de dados";
}`;
  return (
    <LayoutPaiTema>
      <Menu />
      <Body>
        <Container aniDirecao={100}>
          <CHeader title="Funções" />
          <Hr />
          <CH3 title="O que é?" />
          <CArticle>
            <ol className="list-disc ps-5 text-start">
              <li>
                <strong>Definição:</strong> No universo da programação, uma
                função pode ser entendida como uma &quot;caixinha&quot; ou um
                bloco de código que agrupa um conjunto específico de instruções.
                O principal objetivo de uma função é executar uma tarefa bem
                definida e, idealmente, isolada do restante do programa.
              </li>
              <li>
                <strong>Características Principais de uma Função:</strong>
                <ol className="list-disc ps-5 text-start">
                  <li>
                    <strong>Nome:</strong> Toda função possui um nome único que
                    a identifica. É através desse nome que você
                    &quot;chama&quot; ou &quot;invoca&quot; a função para que
                    ela execute suas instruções.
                  </li>
                  <li>
                    <strong>Parâmetros (Entradas de Dados):</strong> Uma função
                    pode receber informações externas para realizar sua tarefa.
                    Pense neles como os &quot;ingredientes&quot; que você dá à
                    sua &quot;caixinha&quot; para que ela possa trabalhar.
                  </li>
                  <li>
                    <strong>Retorno (Saída de Dados):</strong> Após executar
                    suas instruções, uma função pode devolver um resultado ou
                    não. Esse resultado é conhecido como valor de retorno.
                  </li>
                  <CodeBlock code={exemplo} language="c" />
                </ol>
              </li>
            </ol>
          </CArticle>
        </Container>
        <Container>
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
        </Container>
        <Container aniDirecao={-100}>
          <CH3 title="Desvantagens" />
          <CArticle>
            <ol className="list-disc ps-5 text-start">
              <li>Difícil de manter em projetos grandes.</li>
              <li>Sem reaproveitamento em outros programas.</li>
              <li>Arquivo único pode ficar confuso.</li>
            </ol>
          </CArticle>
        </Container>
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
