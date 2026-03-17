import React from "react";
import { EarthCanvas } from "./canvas";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center gap-10 py-20"
    >

      <EarthCanvas />

      <p className="text-gray-400 tracking-widest">CONNECT</p>

      <div className="flex gap-10">

        <a href="https://github.com/Ctrl-Joy" target="_blank" rel="noreferrer">
          <img src="/socials/github.png" className="w-10 h-10" />
        </a>

        <a href="https://www.linkedin.com/in/shreejoy-bikalp-283748209" target="_blank" rel="noreferrer">
          <img src="/socials/linkedin.png" className="w-10 h-10" />
        </a>

        <a href="https://x.com/_BRAHMOS_" target="_blank" rel="noreferrer">
          <img src="/socials/twitter.png" className="w-10 h-10" />
        </a>

        <a href="mailto:bikalpshreejoy@gmail.com">
          <img src="/socials/gmail.png" className="w-10 h-10" />
        </a>

      </div>

    </section>
  );
};

export default Contact;