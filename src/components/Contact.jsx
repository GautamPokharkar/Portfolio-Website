import { motion } from "framer-motion";
import Card from "./Card";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <Card>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Contact
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Interested in working together or have a question?  
            Feel free to reach out.
          </motion.p>

          <motion.div
            className="contact-actions"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a
              href="mailto:yourname@email.com"
              className="btn btn-primary"
            >
              Email Me
            </a>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              GitHub
            </a>
          </motion.div>
        </Card>
      </div>
    </section>
  );
}
