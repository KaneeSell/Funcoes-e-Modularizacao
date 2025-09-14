"use client";
import React, { useState } from "react";
import "../assets/styles/prism-dracula.css";

import dynamic from "next/dynamic";
import CH3, { H3 } from "../components/container/CH3";
import CArticle from "../components/container/CArticle";
import Code from "../components/Code";
const CodeBlock = dynamic(() => import("../components/CodeBlock"), {
  ssr: false,
});

const SemExecucao = () => (
  <p className="mt-2 text-gray-400 text-sm italic light:text-gray-600">
    Execução em tempo real disponível apenas para C no arquivo main.c.
  </p>
);
const extrutura = `/meu_programa
   ├── main.c
   ├── matematica.h
   ├── matematica.c`;
const exemplos = {
  c: {
    main_c: `#include <stdio.h>
#include "matematica.h"

int main() {
    int x = 10, y = 5;

    printf("Soma: %d\n", somar(x, y));
    printf("Subtração: %d\n", subtrair(x, y));
    printf("Multiplicação: %d\n", multiplicar(x, y));
    printf("Divisão: %.2f\n", dividir(x, y));

    return 0;
}
`,
    matematica_h: `#ifndef MATEMATICA_H
#define MATEMATICA_H

int somar(int a, int b);
int subtrair(int a, int b);
int multiplicar(int a, int b);
float dividir(int a, int b);

#endif/`,
    matematica_c: `#include "matematica.h"

int somar(int a, int b) {
    return a + b;
}

int subtrair(int a, int b) {
    return a - b;
}

int multiplicar(int a, int b) {
    return a * b;
}

float dividir(int a, int b) {
    if (b == 0) return 0; // evitar divisão por zero
    return (float) a / b;
}
`,
  },
  js: {
    nestjs: `@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}`,
    angular: `@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
`,
  },
};

export default function Comparativo() {
  const [cOutputMain, setCOutputMain] = useState<string>("");

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
      {/* C */}
      <section className="flex items-center flex-col justify-center mb-10">
        <h2 className="text-[var(--color-primary)] font-bold text-2xl mb-4">
          C (Destaque)
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {/* Com Modularizacao */}
          <CH3 title="Como extruturar:" />
          <span className="flex mx-auto">
            <CodeBlock code={extrutura} language="bash" />
          </span>
          <H3>
            Arquivo <Code code="matematica.h" /> (cabeçalho - interface do
            módulo)
          </H3>
          <div className="w-full flex flex-col items-center justify-center rounded-lg p-4 shadow-md bg-neutral-800  light:bg-neutral-400 text-sm lg:text-base">
            <h3 className="text-[var(--color-primary)] font-semibold mb-2 light:text-black">
              matematica.h
            </h3>
            <div className="w-full">
              <CodeBlock code={exemplos.c.matematica_h} language="c" />
              {SemExecucao()}
            </div>
          </div>
          <H3>
            Arquivo <Code code="matematica.c" /> (cabeçalho - implementação -
            módulo em si)
          </H3>
          <div className="w-full flex flex-col items-center justify-center rounded-lg p-4 shadow-md bg-neutral-800  light:bg-neutral-400 text-sm lg:text-base">
            <h3 className="text-[var(--color-primary)] font-semibold mb-2 light:text-black">
              matematica.c
            </h3>
            <div className="w-full">
              <CodeBlock code={exemplos.c.matematica_c} language="c" />
              {SemExecucao()}
            </div>
          </div>
          <H3>
            Arquivo <Code code="main.c" /> (programa principal)
          </H3>
          <div className="w-full flex flex-col items-center justify-center rounded-lg p-4 shadow-md bg-neutral-800  light:bg-neutral-400 text-sm lg:text-base">
            <h3 className="text-[var(--color-primary)] font-semibold mb-2 light:text-black">
              main.c
            </h3>
            <div className="w-full">
              <CodeBlock code={exemplos.c.main_c} language="c" />
              <button
                className="mt-3 bg-[var(--color-primary)] text-white font-semibold rounded-md px-5 py-2 shadow-md hover:bg-[#3ccf65] transition"
                onClick={() =>
                  runJs(
                    `console.log('Soma: ' + (10 + 5)); console.log('Subtração: ' + (10 - 5)); console.log('Multiplicação: ' + (10 * 5)); console.log('Divisão: ' + (10/5))`,
                    setCOutputMain
                  )
                }
              >
                ▶ Executar
              </button>
              {cOutputMain && (
                <div className="mt-3 text-[var(--color-primary)] light:text-black">
                  <b>Saída:</b>
                  <CodeBlock code={cOutputMain} language="c" />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* JavaScript */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-[var(--color-primary)]">
          JavaScript
        </h2>
        <div className="grid grid-cols-1 gap-6">
          <CH3 title="Exemplo em JavaScript (NestJS/Angular)" />
          <CArticle>
            <ol>
              <li>
                Em <strong>NestJS:</strong> Cada <Code code="@Module" /> agrupa
                controllers, services, providers relacionados.
              </li>
              <li>
                Em <strong>Angular:</strong> Cada <Code code="NgModule" />{" "}
                organiza componentes, diretivas, serviços.
              </li>
            </ol>
          </CArticle>
          <div className="w-full rounded-lg p-4 shadow-md bg-neutral-800  light:bg-neutral-400 text-sm lg:text-base">
            <h3 className="font-semibold mb-2 text-[var(--color-primary)] light:text-black">
              NestJS
            </h3>
            <CodeBlock code={exemplos.js.nestjs} language="javascript" />
            {SemExecucao()}
          </div>

          <div className="w-full rounded-lg p-4 shadow-md bg-neutral-800  light:bg-neutral-400 text-sm lg:text-base">
            <h3 className="font-semibold mb-2 text-[var(--color-primary)] light:text-black">
              Angular
            </h3>
            <CodeBlock code={exemplos.js.angular} language="javascript" />
            {SemExecucao()}
          </div>
        </div>
      </section>
    </div>
  );
}
