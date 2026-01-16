import { motion } from "framer-motion";
import Card from "./Card";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <Card>
          <motion.span
            className="hero-greeting"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Hello, I’m
          </motion.span>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="gradient-text">Gautam Pokharkar</span>
          </motion.h1>

          <motion.h2
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            I build modern, animated web applications with React.
          </motion.p>
        </Card>
      </div>
    </section>
  );
}
