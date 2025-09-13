"use client";
import React, { useState } from "react";
import "../assets/styles/prism-dracula.css";

import dynamic from "next/dynamic";
const CodeBlock = dynamic(() => import("../components/CodeBlock"), { ssr: false });

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

export default function Comparativo() {
  const [jsOutputSem, setJsOutputSem] = useState<string>("");
  const [jsOutputCom, setJsOutputCom] = useState<string>("");
  const [cOutputSem, setCOutputSem] = useState<string>("");
  const [cOutputCom, setCOutputCom] = useState<string>("");

  function runJs(code: string, setOutput: (out: string) => void) {
    try {
      const log: string[] = [];
      const customConsole = {
        log: (...args: unknown[]) => log.push(args.join(" ")),
      };
      new Function("console", code)(customConsole);
      setOutput(log.join("\n"));
    } catch (e: unknown) {
      if (e instanceof Error) {
        setOutput("Erro: " + e.message);
      } else {
        setOutput("Erro desconhecido");
      }
    }
  }

  return (
    <div className="flex flex-col font-serif p-4">
      <h1 className="text-2xl font-bold mb-6 text-center text-[var(--color-primary)]">
        Comparativo: Com e Sem Função
      </h1>

      {/* C */}
      <section className="mb-10">
        <h2 className="text-[var(--color-primary)] font-bold text-2xl mb-4">C (Destaque)</h2>
        <div className="grid grid-cols-1 gap-6">
          {/* Sem função */}
          <div className="w-full rounded-lg p-4 shadow-md bg-neutral-800  light:bg-neutral-400 text-sm lg:text-base">
            <h3 className="text-[var(--color-primary)] font-semibold mb-2 light:text-black">Sem função</h3>
            <CodeBlock code={exemplos.c.semFuncao} language="c" />
            <button
              className="mt-3 bg-[var(--color-primary)] text-white font-semibold rounded-md px-5 py-2 shadow-md hover:bg-[#3ccf65] transition"
              onClick={() =>
                runJs(
                  `const a=2,b=3;console.log('Resultado:',a+b);const x=5,y=7;console.log('Multiplicação:',x*y);`,
                  setCOutputSem
                )
              }
            >
              ▶ Executar
            </button>
            {cOutputSem && (
              <div className="mt-3 text-[var(--color-primary)] light:text-black">
                <b>Saída:</b>
                <CodeBlock code={cOutputSem} language="c" />
              </div>
            )}
          </div>

          {/* Com função */}
          <div className="w-full rounded-lg p-4 shadow-md bg-neutral-800  light:bg-neutral-400 text-sm lg:text-base">
            <h3 className="text-[var(--color-primary)] font-semibold mb-2 light:text-black">Com função</h3>
            <CodeBlock code={exemplos.c.comFuncao} language="c" />
            <button
              className="mt-3 bg-[var(--color-primary)] text-white font-semibold rounded-md px-5 py-2 shadow-md hover:bg-[#3ccf65] transition"
              onClick={() =>
                runJs(
                  `function soma(a,b){return a+b;}const resultado=soma(2,3);console.log('Resultado:',resultado);function multiplica(x,y){return x*y;}const mult=multiplica(5,7);console.log('Multiplicação:',mult);`,
                  setCOutputCom
                )
              }
            >
              ▶ Executar
            </button>
            {cOutputCom && (
              <div className="mt-3 text-[var(--color-primary)] light:text-black">
                <b>Saída:</b>
                <CodeBlock code={cOutputCom} language="c" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* JavaScript */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-[var(--color-primary)]">JavaScript</h2>
        <div className="grid grid-cols-1 gap-6">
          <div className="w-full rounded-lg p-4 shadow-md bg-neutral-800  light:bg-neutral-400 text-sm lg:text-base">
            <h3 className="font-semibold mb-2 text-[var(--color-primary)] light:text-black">Sem função</h3>
            <CodeBlock code={exemplos.js.semFuncao} language="javascript" />
            <button
              className="mt-3 bg-[var(--color-primary)] text-white font-semibold rounded-md px-5 py-2 shadow-md hover:bg-[#3ccf65] transition"
              onClick={() => runJs(exemplos.js.semFuncao, setJsOutputSem)}
            >
              ▶ Executar
            </button>
            {jsOutputSem && (
              <div className="mt-3 text-[var(--color-primary)] light:text-black">
                <b>Saída:</b>
                <CodeBlock code={jsOutputSem} language="javascript" />
              </div>
            )}
          </div>

          <div className="w-full rounded-lg p-4 shadow-md bg-neutral-800  light:bg-neutral-400 text-sm lg:text-base">
            <h3 className="font-semibold mb-2 text-[var(--color-primary)] light:text-black">Com função</h3>
            <CodeBlock code={exemplos.js.comFuncao} language="javascript" />
            <button
              className="mt-3 bg-[var(--color-primary)] text-white font-semibold rounded-md px-5 py-2 shadow-md hover:bg-[#3ccf65] transition"
              onClick={() => runJs(exemplos.js.comFuncao, setJsOutputCom)}
            >
              ▶ Executar
            </button>
            {jsOutputCom && (
              <div className="mt-3 text-[var(--color-primary)] light:text-black">
                <b>Saída:</b>
                <CodeBlock code={jsOutputCom} language="javascript" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SQL */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-[var(--color-primary)]">SQL</h2>
        <div className="grid grid-cols-1 gap-6">
          <div className="w-full rounded-lg p-4 shadow-md bg-neutral-800  light:bg-neutral-400 text-sm lg:text-base">
            <h3 className="font-semibold mb-2 text-[var(--color-primary)] light:text-black">Sem função</h3>
            <CodeBlock code={exemplos.sql.semFuncao} language="sql" />
          </div>
          <div className="w-full rounded-lg p-4 shadow-md bg-neutral-800  light:bg-neutral-400 text-sm lg:text-base">
            <h3 className="font-semibold mb-2 text-[var(--color-primary)] light:text-black">Com função</h3>
            <CodeBlock code={exemplos.sql.comFuncao} language="sql" />
          </div>
        </div>
        <p className="mt-2 text-gray-400 text-sm italic light:text-gray-600">
          Execução em tempo real disponível apenas para JavaScript.
        </p>
      </section>
    </div>
  );
}
