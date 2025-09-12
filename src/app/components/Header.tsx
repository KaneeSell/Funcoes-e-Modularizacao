import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";

interface ArticleProps {
  img: StaticImageData;
  titulo: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}
export default function Header(props: ArticleProps) {
  return (
    <motion.header
      id={props.id || ""}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
        transition: { ease: "easeOut", duration: 0.6, times: [0.4] },
      }}
      viewport={{
        once: true,
      }}
      transition={{
        ease: "easeOut",
        duration: 0.3,
      }}
      className="flex flex-col justify-center items-center gap-10 my-5 scroll-mt-20"
    >
      <section className="flex justify-center relative mt-[-40px] h-[200px] md:h-[300px] w-full">
        <Image
          className="object-cover object-[50%_30%]"
          src={props.img}
          height={500}
          width={1000}
          alt="Logo Imagem Kane'e Sell"
        />
        <motion.h2
          initial={{
            x: 100,
          }}
          whileInView={{
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            ease: "easeOut",
            duration: 0.3,
          }}
          className="text-4xl font-serif text-white bg-black/50 mt-20 md:mt-30 text-shadow-lg absolute md:text-5xl font-extrabold"
        >
          {props.titulo}
        </motion.h2>
        <motion.section
          initial={{
            x: -100,
          }}
          whileInView={{
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            ease: "easeOut",
            duration: 0.3,
          }}
          className={`
        text-shadow-lg font-serif bg-black/50 px-3 bottom-10 md:bottom-20 absolute md:max-w-2/3 flex flex-col justify-center 
        items-center text-2xl text-center text-white
      ${props.className}
      `}
        >
          {props.children}
        </motion.section>
      </section>
    </motion.header>
  );
}
