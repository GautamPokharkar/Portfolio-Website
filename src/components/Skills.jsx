import { motion } from "framer-motion";
import Card from "./Card";

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "HTML",
  "CSS",
  "Git",
  "MongoDB",
  "REST APIs",
  "Framer Motion",
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <Card>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Skills
          </motion.h2>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                className="skill-tag"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
