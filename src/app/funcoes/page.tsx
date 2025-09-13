"use client";

import Body from "../components/Body";
import Buttons from "../components/Buttons";
import CodeBlock from "../components/CodeBlock";
import CArticle from "../components/container/CArticle";
import CH3 from "../components/container/CH3";
import CHeader from "../components/container/CHeader";
import Container from "../components/container/Container";
import ContainerMD from "../components/container/ContainerMD";
import Hr from "../components/Hr";
import Menu from "../components/menu/Menu";
import LayoutPaiTema from "../components/theme/LayoutPaiTema";
import Comparativo from "./Comparativo";

export default function Funcoes() {
  const exemplos = {
    js: {
      semFuncao: `// Sem função
const a = 2;
const b = 3;
const resultado = a + b;
console.log('Resultado:', resultado);`,
      comFuncao: `// Com função
function soma(a, b) {
  return a + b;
}
const resultado = soma(2, 3);
console.log('Resultado:', resultado);`,
    },
    c: {
      semFuncao: `// Sem função
int a = 2;
int b = 3;
printf("Soma: %d\\n", a + b);

int x = 5;
int y = 7;
printf("Multiplicação: %d\\n", x * y);

int base = 2;
int expoente = 8;
int pot = 1;
for(int i=0;i<expoente;i++) pot *= base;
printf("Potência: %d\\n", pot);

int n = -10;
if(n < 0) n = -n;
printf("Valor absoluto: %d\\n", n);

int num = 16;
int raiz = 0;
for(int i=0;i<=num;i++) if(i*i==num) raiz = i;
printf("Raiz inteira: %d\\n", raiz);

int maior = 10;
int menor = 3;
if(menor > maior) maior = menor;
printf("Maior: %d\\n", maior);`,
      comFuncao: `// Com função
int soma(int a, int b) { return a + b; }
int multiplica(int x, int y) { return x * y; }
int pot(int base, int exp) { int r=1; for(int i=0;i<exp;i++) r*=base; return r; }
int absoluto(int n) { return n<0?-n:n; }
int raizint(int n) { int i=0; while(i*i<n) i++; return i*i==n?i:0; }
int maior(int a, int b) { return a>b?a:b; }
printf("Soma: %d\\n", soma(2, 3));
printf("Multiplicação: %d\\n", multiplica(5, 7));
printf("Potência: %d\\n", pot(2,8));
printf("Valor absoluto: %d\\n", absoluto(-10));
printf("Raiz inteira: %d\\n", raizint(16));
printf("Maior: %d\\n", maior(10,3));`,
    },
    sql: {
      semFuncao: `-- Sem função
SELECT 2 + 3 AS resultado;`,
      comFuncao: `-- Com função
CREATE FUNCTION soma(a INT, b INT) RETURNS INT
BEGIN
  RETURN a + b;
END;
-- Uso:
SELECT soma(2, 3) AS resultado;`,
    },
  };
  return (
    <LayoutPaiTema>
      <Menu />
      <Body>
        <Container>
          <CHeader title="Funções" />
          <Hr />
          <CH3 title="Vantagens" />
          <CArticle>
            <ol className="list-disc ps-5 text-start">
              <li>Código mais simples de organizar em programas pequenos.</li>
              <li>Não precisa de múltiplos arquivos.</li>
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
            <Comparativo/>
          </CArticle>
        </ContainerMD>
      </Body>
    </LayoutPaiTema>
  );
}
