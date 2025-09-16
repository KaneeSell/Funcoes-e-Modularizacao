import { motion } from "motion/react";

export default function ContainerSM(props: { children: React.ReactNode, aniDirecao?: -100 | 100 }) {
  const aniDirecao = props.aniDirecao || 100;
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: aniDirecao,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className={`
        flex flex-col items-center justify-center md:w-full lg:w-100 border rounded-xl
        light:bg-black/5 bg-white/5 gap-3 py-5 px-3
        `}
    >
      {props.children}
    </motion.div>
  );
}
