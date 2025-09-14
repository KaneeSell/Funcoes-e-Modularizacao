import { motion } from "motion/react";

export default function CH3(props: { title: string }) {
  return (
    <motion.h3
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        times: [0.5],
        duration: 1,
      }}
      className="text-2xl font-semibold font-serif mx-3"
    >
      {props.title}
    </motion.h3>
  );
}

export function H3(props: { children: React.ReactNode }) {
  return (
    <motion.h3
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            times: [0.5],
            duration: 1,
          }}
          className="text-2xl font-semibold font-serif mx-3"
        >
          {props.children}
        </motion.h3>
  );
}
