import girl from "../../assets/girl.svg";
import { useCursorHover } from "../../hooks/useCursorHover";
import { motion } from "motion/react";

export default function AboutMe() {
  const { handleMouseEnter, handleMouseLeave } = useCursorHover();
  return (
    <section
      className="bg-primary-black flex flex-col gap-10 px-4 py-5 sm:p-6 md:p-20 lg:flex-row lg:px-28"
      id="about"
    >
      <div className="flex-center lg:w-1/2">
        <img src={girl} alt="girl illustration" />
      </div>
      <div className="lg:w-1/2">
        <h3 className="text-primary-white mb-10 text-[28px]/[114%] tracking-tight lg:text-5xl/[117%]">
          <span className="pr-2 md:pr-4">About</span>{" "}
          <span className="font-extrabold">Me</span>
        </h3>
        <article
          className="flex flex-col gap-4 text-zinc-300"
          onMouseEnter={() => handleMouseEnter(150)}
          onMouseLeave={() => handleMouseLeave(40)}
        >
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: true }}
          >
            I'm Zaid Qureshi, a junior Full Stack Developer from Saudi Arabia
            with a genuine passion for writing code that solves real problems.
            My stack spans both the front and back end — from React and
            TypeScript on the client side, to Node.js, Python, and PostgreSQL on
            the server. I enjoy the full journey of building a product, from
            designing clean UIs to architecting reliable APIs.
          </motion.p>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring" }}
            viewport={{ once: true }}
          >
            I'm currently on a focused path to become a professional Software
            Engineer, with a clear goal: to work in Japan. The Japanese tech
            industry's reputation for precision, craftsmanship, and innovation
            deeply resonates with how I approach my own work. I believe great
            software is built with the same discipline — thoughtful, clean, and
            built to last.
          </motion.p>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 3, type: "spring" }}
            viewport={{ once: true }}
          >
            Outside of coding, I'm constantly learning — whether that's
            exploring new frameworks, experimenting with side projects, or
            diving into system design concepts. I'm the kind of developer who
            stays up late debugging not out of obligation, but because I
            genuinely want to understand how things work. If you're looking for
            someone hungry to grow, ship great software, and bring energy to a
            team — I'm your guy.
          </motion.p>
        </article>
      </div>
    </section>
  );
}
