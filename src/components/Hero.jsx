import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">

      {/* Canvas Background */}
      <div className="absolute inset-0 z-0">
        <ComputersCanvas />
      </div>

      {/* Hero Content */}
      <div
        className={`absolute inset-0 top-[120px] pointer-events-none z-10 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >

        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="pointer-events-auto">

          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Shreejoy</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            AI Developer & Cybersecurity Enthusiast
          </p>

          <a
            href="/resume.pdf"
            download
            className="inline-block mt-6 bg-[#915EFF] hover:bg-purple-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition duration-300"
          >
            Download Resume
          </a>

        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10 pointer-events-none">

        <a href="#about" className="pointer-events-auto">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">

            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />

          </div>
        </a>

      </div>

    </section>
  );
};

export default Hero;