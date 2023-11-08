import { motion } from "framer-motion";
import React from "react";
import Drawable from "./Drawerable";
export default function Home() {

  return (
    <div className="flex h-screen">
      <motion.h1>
        <Drawable />
      </motion.h1>
    </div>
  );
}
