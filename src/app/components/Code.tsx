import { motion } from "motion/react";

export default function Code(props: { code: string }) {
  return (
    <motion.code
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
      className="bg-neutral-700 rounded-lg px-2 light:bg-neutral-500"
    >
      {props.code}
    </motion.code>
  );
}
