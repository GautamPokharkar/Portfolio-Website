import { motion } from "framer-motion";
import Card from "./Card";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <Card>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            I’m a passionate full-stack developer focused on building clean,
            scalable, and user-friendly web applications.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            I build fast, scalable web apps with React and Node.js,
            focused on clean UX and real-world performance.

          </motion.p>
        </Card>
      </div>
    </section>
  );
}
