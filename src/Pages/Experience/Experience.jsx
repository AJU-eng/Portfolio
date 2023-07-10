import React from "react";
import img from "./broto.png";
import img1 from "./slide.png";
function Experience() {
  return (
    <div className="div pt-5">
      <h1 className="div_head">PROJECTS</h1>
      <div className="lg:flex pt-5">
        <div className="lg:w-1/2 min-h-screen bg-white">
          <div className="h-1/2 bg-red">
            <img src={img} alt="" />
            <h1 className="text-center text-sky-500 text-4xl pt-3">
              Brototype
            </h1>
            <p className="text-center text-sky-500 leading-8 pt-5">
              The clone website offers a range of features and tools that allow
              users to easily design and showcase their prototypes. Users can
              create interactive wireframes, mockups, and user interface designs
              using a drag-and-drop interface, without the need for coding or
              advanced design skills. The platform provides a library of
              pre-designed UI elements and templates, making it easy for users
              to create professional-looking prototypes.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 min-h-screen bg-sky-500">
          <h1 className="text-center text-white text-4xl pt-5">Slidebean</h1>
          <p className="text-center text-white leading-8">
            The Slidebean clone website project is a web application designed to
            replicate the functionality and features of the popular presentation
            software, Slidebean. The project aimed to provide users with an
            intuitive and user-friendly platform for creating
            professional-looking presentations quickly and efficiently. To
            ensure a seamless user experience, the clone website incorporates
            responsive design principles, making it compatible with various
            devices and screen sizes. This enables users to create and present
            their presentations on desktop computers, laptops, tablets, and
            smartphones, enhancing accessibility and convenience.
          </p>
          <img src={img1} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Experience;
