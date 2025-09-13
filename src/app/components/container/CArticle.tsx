import { motion } from "motion/react";

export default function CArticle(props: { children: React.ReactNode }) {
  return (
    <motion.article
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
      className="font-serif text-xl"
    >
      {props.children}
    </motion.article>
  );
}
