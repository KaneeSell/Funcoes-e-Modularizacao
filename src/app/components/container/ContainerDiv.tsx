import { motion } from "motion/react";

export default function ContainerDiv(props: { children: React.ReactNode, aniDirecao?: -100 | 100 }) {
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
        flex flex-wrap items-start justify-center min-w-full lg:max-w-2/3 rounded-xl
        gap-3
        `}
    >
      {props.children}
    </motion.div>
  );
}
