import { motion } from "framer-motion";
import reactjs from "../../assets/react.svg";
import tailwindcss from "../../assets/tailwind.svg";
import framerMotion from "../../assets/framer.svg";
import redux from "../../assets/redux.svg";
import tanstack from "../../assets/tanstack.svg";
import ecommercess from "../../assets/ecommerce.png";
import nextjs from "../../assets/nextjs.svg";
import movie_web from "../../assets/movie-web.webp";
import topup_game from "../../assets/top-up-game.webp";
import mernProject from "../../assets/mern.png";
import mongodb from "../../assets/logo/mongoDB.svg";
import expressJs from "../../assets/logo/expressJS.svg";
import nodeJs from "../../assets/logo/nodejs.svg";
import { useInView } from "react-intersection-observer";
import dronePage from "../../assets/drone-web.webp";

// import { useEffect, useRef } from "react";

const cardVariants = {
  offscreen: (direction) => ({
    opacity: 0,
    y: direction * 50,
    scale: 0.95,
    rotate: direction * 3,
  }),
  onscreen: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
      delay: 0.2,
    },
  },
};

const hoverVariants = {
  hover: {
    y: -15,
    scale: 1.02,
    rotateX: -5,
    rotateY: 5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10,
    },
  },
};

const imageVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.1 },
};

export const Portfolio = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects = [
    {
      title: "Ecommerce Platform",
      type: "Fullstack Web App",
      href: "https://choirul-toko-kita-apps.vercel.app/",
      image: ecommercess,
      tech: [reactjs, tailwindcss, redux, framerMotion, tanstack],
      tags: ["React", "Redux", "Tailwind", "Framer Motion"],
    },
    {
      title: "Movie Database",
      href: "https://movie-apps-with-next15.vercel.app/",
      image: movie_web,
      tech: [nextjs, tailwindcss, tanstack],
      type: "Next.js App",
      tags: ["Next.js", "TypeScript", "TanStack Query"],
    },
    {
      title: "Game Topup System",
      href: "https://topup-games-indol.vercel.app/",
      image: topup_game,
      tech: [nextjs, tailwindcss, tanstack],
      type: "E-commerce",
      tags: ["Next.js", "Payment Gateway", "Dashboard"],
    },
    {
      title: "News Portal",
      href: "https://news-with-mern-frontend.vercel.app/",
      image: mernProject,
      tech: [reactjs, mongodb, expressJs, nodeJs],
      type: "MERN Stack",
      tags: ["MongoDB", "Express", "React", "Node.js"],
    },
    {
      title: "Drone Single Page",
      href: "https://drone-web-spa.vercel.app/",
      image: dronePage,
      tech: [reactjs, tailwindcss, framerMotion],
      type: "Single Page Animation",
      tags: ["React", "TailwindCSS", "Framer-Motion"],
    }
  ];

  return (
    <div
      className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 lg:px-8 py-12"
      ref={ref}
    >
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          custom={index % 2 === 0 ? 1 : -1}
          initial="offscreen"
          animate={inView ? "onscreen" : "offscreen"}
          variants={cardVariants}
          whileHover="hover"
          className="relative group"
        >
          <motion.a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative h-[400px] rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300"
            variants={hoverVariants}
          >
            {/* Background Image with Parallax Effect */}
            <motion.div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${project.image})` }}
              variants={imageVariants}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />
            </motion.div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title and Type */}
              <h3 className="text-2xl font-bold mb-2 drop-shadow-md">
                {project.title}
              </h3>
              <p className="text-blue-400 font-medium mb-4 flex items-center gap-2">
                <span className="h-2 w-2 bg-blue-400 rounded-full animate-pulse" />
                {project.type}
              </p>

              {/* Tech Stack */}
              <div className="flex gap-3 opacity-90 hover:opacity-100 transition-opacity">
                {project.tech.map((tech, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="tooltip"
                    data-tip={tech.replace(".svg", "").split("/").pop()}
                  >
                    <img
                      src={tech}
                      className="w-8 h-8 object-contain"
                      alt="Technology"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Hover Indicator */}
            <div className="absolute top-4 right-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-sm font-medium">View Project</span>
              <svg
                className="w-4 h-4 animate-bounce-horizontal"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </motion.a>
        </motion.div>
      ))}
    </div>
  );
};
