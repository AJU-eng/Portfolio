import React from "react";
import { FaHtml5, FaCss3, FaJs } from "react-icons/fa";
import { IconContext } from "react-icons";
function Skills() {
  return (
    <div className="div">
      <h1 className="div_head">SKILLS</h1>
      <div className="lg:flex min-h-full lg:justify-around mt-20 ml-28">
        <div className="w-1/4 h-80  bg-sky-400 rounded">
          <div className="lg:flex lg:justify-center lg:align-middle w-32 h-32 mx-auto mt-10 bg-white  rounded-full overflow-hidden">
            <IconContext.Provider value={{ color: "orange", size: 100 }}>
              <div>
                <FaHtml5 />
              </div>
            </IconContext.Provider>
          </div>
        </div>
        <div className="w-1/4 h-80 bg-sky-400 rounded">
          <div className="lg:flex lg:justify-center lg:align-middle w-32 h-32 mx-auto mt-10 bg-white rounded-full overflow-hidden">
            <IconContext.Provider value={{ color: "blue", size: 100 }}>
              <div>
                <FaCss3 />
              </div>
            </IconContext.Provider>
          </div>
        </div>
        <div className="w-1/4 h-80 bg-sky-400 rounded">
          <div className="lg:flex lg:justify-center lg:align-middle w-32 h-32 mx-auto mt-10 bg-black rounded-full overflow-hidden">
            <IconContext.Provider value={{ color: "yellow", size: 120 }}>
              <div>
                <FaJs />
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </div>
      <div className="lg:flex min-h-full lg:justify-around mt-20 ml-28">
        <div className="w-1/4 h-80  bg-sky-400 rounded">
          <div className="w-32 h-32 mx-auto mt-10 bg-white rounded-full">
            <img src="https://i.redd.it/8mx2wdq04h271.png" alt="" />
          </div>
        </div>
        <div className="w-1/4 h-80 bg-sky-400 rounded">
          <div className="w-32 h-32 mx-auto mt-10 bg-white rounded-full">
            <img
              src="https://ih1.redbubble.net/image.683518800.8491/st,small,507x507-pad,600x600,f8f8f8.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
