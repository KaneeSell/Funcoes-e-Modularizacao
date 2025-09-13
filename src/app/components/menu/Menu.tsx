"use client";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import logo from "../../favicon.ico";
import { Fragment, useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { ThemeBtn, ThemeBtnReduzido } from "../theme/ThemeButton";
import { BtnWhatsapp } from "../Contato";
import BtnLogout from "../BtnLogout";
import Link from "next/link";
import { MdOutlineViewModule } from "react-icons/md";
import { PiFunctionBold } from "react-icons/pi";
import { GrGroup } from "react-icons/gr";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const titulo = "Funções e Modularização";
  const funcoes = {
    theme: { isAtive: true },
    logOut: { isAtive: false },
    whatsapp: { isAtive: false },
  };
  const navegadores = [
    { href: "/", titulo: "Início", icon: <IoHomeOutline size={20} /> },
    {
      href: "/funcoes",
      titulo: "Funções",
      icon: <PiFunctionBold size={20} />,
    },
    {
      href: "/modularizacao",
      titulo: "Modularização",
      icon: <MdOutlineViewModule size={20} />,
    },
  ];

  function Navegadores(props: { titulo: string }) {
    return (
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: menuOpen ? 1 : 0,
        }}
        transition={{
          times: [0.5],
          ease: "easeOut",
          duration: 0.6,
        }}
        className="flex hover:bg-gray-200 rounded-lg px-3 py-1 my-1 light:hover:bg-neutral-600 light:hover:text-white hover:text-black font-bold cursor-pointer"
      >
        {props.titulo}
      </motion.span>
    );
  }

  function MenuInferiorMobile() {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            y: 40,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            ease: "easeOut",
            duration: 0.4,
          }}
          className={`
        flex z-10
        brightness-90 h-15 w-full md:hidden fixed bottom-0 left-0 px-3
        justify-between items-center bg-gray-800 light:bg-neutral-400
        `}
        >
          <nav
            className={`
          flex justify-between items-center w-full gap-1
          `}
          >
            {navegadores.map((nav, index) => (
              <Link
                key={index}
                href={nav.href}
                className="py-4 w-1/4 justify-center items-center flex light:hover:bg-neutral-600 light:hover:text-white hover:bg-gray-200 hover:text-black"
              >
                {nav.icon}
              </Link>
            ))}
          </nav>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <div
    id="inicio"
      className={`
        flex w-full justify-between h-15 text-white light:text-black
        `}
    >
      {/* Menu Inferior Mobile */}
      <MenuInferiorMobile />
      {/* Menu Superior */}
      <motion.div
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeOut",
          duration: 0.4,
        }}
        className={`
            brightness-90 h-15 w-full flex fixed top-0 left-0 px-3 z-10
            justify-between items-center backdrop-blur bg-white/10 light:bg-black/10
            `}
      >
        <motion.span
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            times: [0.4],
            ease: "easeOut",
            duration: 0.6,
          }}
          className="flex items-center gap-2"
        >
          <Image alt="icon" src={logo} height={45} />
        </motion.span>
        <motion.span
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            times: [0.4],
            ease: "easeOut",
            duration: 0.6,
          }}
          className="fixed w-full left-0 flex justify-center items-center"
        >
          <h1 className="cursor-default text-2xl font-extrabold font-serif">
            {titulo}
          </h1>
        </motion.span>
        <motion.span
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            times: [0.4],
            ease: "easeOut",
            duration: 0.6,
          }}
          className="flex items-center gap-5"
        >
          {funcoes.whatsapp.isAtive && (
            <BtnWhatsapp className="hidden md:flex z-1" />
          )}
          {funcoes.theme.isAtive && (
            <ThemeBtnReduzido
              className="hidden md:flex z-1"
              icones="icones-5"
              size="20px"
            />
          )}
          <button
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
            onBlur={() => {
              setTimeout(() => setMenuOpen(false), 100);
            }}
            className={`
        ${!menuOpen && "cursor-pointer"}
        flex flex-col gap-1 relative cursor-default focus:outline-none z-2
        `}
          >
            <motion.span
              initial={{
                x: 0,
                y: 0,
                rotate: 0,
              }}
              animate={{
                x: 0,
                y: menuOpen ? 8 : 0,
                rotate: menuOpen ? 45 : 0,
              }}
              transition={{
                ease: "easeOut",
                duration: 0.4,
              }}
              className="h-1 bg-white light:bg-black w-7 flex rounded-2xl z-1"
            />
            <motion.span
              initial={{
                x: 0,
                y: 0,
                rotate: 0,
                opacity: 1,
              }}
              animate={{
                x: 0,
                y: 0,
                rotate: 0,
                opacity: menuOpen ? 0 : 1,
              }}
              transition={{
                ease: "easeOut",
                duration: 0.4,
              }}
              className="h-1 bg-white light:bg-black w-7 flex rounded-2xl z-1"
            />
            <motion.span
              initial={{
                x: 0,
                y: 0,
                rotate: 0,
              }}
              animate={{
                x: 0,
                y: menuOpen ? -8 : 0,
                rotate: menuOpen ? -45 : 0,
              }}
              transition={{
                ease: "easeOut",
                duration: 0.4,
              }}
              className="h-1 bg-white light:bg-black w-7 flex rounded-2xl z-1"
            />
            {/* Menu Suspenso */}
            <motion.nav
              initial={{
                scale: 0,
                x: 50,
                y: -80,
                opacity: 0,
              }}
              animate={{
                scale: menuOpen ? 1 : 0,
                x: menuOpen ? 0 : 40,
                y: menuOpen ? 0 : -75,
                opacity: menuOpen ? 1 : 0,
              }}
              transition={{
                ease: "easeOut",
                duration: 0.3,
              }}
              className="absolute right-[-10] top-[-10] bg-gray-700 light:bg-neutral-400 rounded-2xl py-2 px-3 pt-10 flex flex-col text-nowrap"
            >
              <span className="h-7 w-7 cursor-pointer absolute right-2.5 top-1.5 z-15" />
              <AnimatePresence mode="wait">
                <Fragment key={1}>
                  {navegadores.map((nav, index) => (
                    <Link href={nav.href} key={index}>
                      <Navegadores titulo={nav.titulo} />
                    </Link>
                  ))}
                  {(funcoes.logOut.isAtive || funcoes.theme.isAtive || funcoes.whatsapp.isAtive) && (
                    <Fragment>
                      {funcoes.logOut.isAtive && (
                      <hr className="block my-2" />
                    )}
                    <hr className="block md:hidden my-2" />
                      <span className="flex flex-col gap-2">
                        {funcoes.theme.isAtive && (
                          <ThemeBtn
                            icones="icones-5"
                            size="15px"
                            className="flex md:hidden"
                          />
                        )}
                        {funcoes.whatsapp.isAtive && (
                          <BtnWhatsapp className="flex md:hidden" />
                        )}
                        {funcoes.logOut.isAtive && <BtnLogout />}
                      </span>
                    </Fragment>
                  )}
                </Fragment>
              </AnimatePresence>
            </motion.nav>
          </button>
        </motion.span>
      </motion.div>
    </div>
  );
}
