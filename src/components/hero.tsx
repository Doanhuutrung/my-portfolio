import { motion } from "framer-motion";

const Hero = () => (
  <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-4xl font-bold md-4"
    >
      {" "}
      Welcome to my portfolio
    </motion.h1>
    <motion.p
    initial={{x: -100}}
    animate={{x:0}}
    transition={{type: 'spring', stiffness: 120}}>
        I Create amazing digital experiences
    </motion.p>
  </section>
);

export default Hero;