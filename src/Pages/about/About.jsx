import React from "react";
import img2 from "./181.png";
function About() {
  return (
    <div className="min-h-screen bg-sky-950 ">
      <h1 className="text-center text-3xl text-sky-500 font-bold pt-5">
        ABOUT
      </h1>
      <div className="lg:flex">
        <div className=" lg:w-1/2 w-full lg:mt-0  mt  text-white lg:min-h-screen">
          <img src={img2} alt="" />
        </div>
        <div className="lg:w-1/2 w-full lg:pt-8 text-lg pl-5 leading-10 text-white">
          "Hello, I'm Ajay, a passionate full stack web developer with a focus
          on creating dynamic and immersive digital experiences. With a strong
          background in both front-end and back-end development, I thrive in
          crafting elegant and user-friendly interfaces while ensuring robust
          functionality behind the scenes. Constantly expanding my skill set and
          staying updated with the latest technologies, I'm dedicated to
          delivering high-quality solutions that exceed client expectations.
          Let's collaborate and bring your web projects to life!"
        </div>
      </div>
    </div>
  );
}

export default About;
