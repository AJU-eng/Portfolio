import React from "react";

function Skills() {
  return (
    <div className="div">
      <h1 className="div_head pt-10">SKILLS</h1>
      <div className="lg:flex min-h-full lg:justify-around mt-20 ml-28">
        <div className=" lg:flex-none flex justify-center align-middle  lg:w-1/4 h-80  w-64  bg-sky-500 rounded">
          <div className="lg:flex lg:justify-center lg:align-middle w-32 h-32 mx-auto mt-10 bg-white rounded-full overflow-hidden">
            <img
              src="https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png"
              alt=""
            />
          </div>
          <p></p>
        </div>
        <div className=" lg:flex-none flex justify-center align-middle lg:mt-0 mt-6 lg:w-1/4 w-64 h-80 bg-sky-500 rounded">
          <div className="lg:flex lg:justify-center lg:align-middle w-32 h-32 mx-auto mt-10 bg-white rounded-full overflow-hidden">
            <img
              src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
              alt=""
            />
          </div>
        </div>
        <div className=" lg:flex-none flex justify-center align-middle lg:mt-0 mt-6  lg:w-1/4 w-64 h-80 bg-sky-500 rounded">
          <div className="lg:flex lg:justify-center lg:align-middle w-32 h-32 mx-auto mt-10 bg-black rounded-full overflow-hidden">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="lg:flex min-h-full lg:justify-around mt-20 ml-28">
        <div className="lg:flex-none flex justify-center align-middle  lg:w-1/4 h-80  w-64  bg-sky-500 rounded">
          <div className="w-32 h-32 mx-auto mt-10 bg-white rounded-full">
            <img
              src="https://ionicframework.com/docs/icons/logo-react-icon.png"
              alt=""
            />
          </div>
        </div>
        <div className="lg:flex-none flex justify-center align-middle  lg:w-1/4 h-80 lg:mt-0 mt-5 w-64  bg-sky-500 rounded">
          <div className="w-32 h-32 mx-auto mt-10 bg-white rounded-full">
            <img
              src="https://miro.medium.com/v2/resize:fit:320/1*wWUfWY0hKs3-VR8QNUjklQ.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
