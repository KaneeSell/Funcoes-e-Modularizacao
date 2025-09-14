"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Digitando(props: { text: string }) {
  const fullText = props.text;
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText[i]);
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 100); // velocidade (100ms por caractere)
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.p
      className="text-xl font-mono text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="ml-1"
      >
        |
      </motion.span>
    </motion.p>
  );
}
