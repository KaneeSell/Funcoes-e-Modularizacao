import { motion } from "motion/react";

export default function ContainerMD(props: { children: React.ReactNode }) {
  return (
    <motion.div
    initial={{
        opacity: 0,
        y: 100,
    }}
    animate={{
        opacity: 1,
        y: 0,
    }}
    transition={{
        duration: 0.5,
    }}
      className={`
        flex flex-col items-center justify-center min-w-full lg:min-w-250 border rounded-xl
        light:bg-black/5 bg-white/5 gap-3 py-5 px-3
        `}
    >
      {props.children}
    </motion.div>
  );
}
