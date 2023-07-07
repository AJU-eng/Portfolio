import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Home.css";

function Home() {
  const handleType = (count) => {
    // access word count number
    console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  return (
    <section>
      <div className="lg:flex min-h-screen bg-sky-950 ">
        <div className=" lg:w-1/2 ">hi</div>
        <div className=" lg:w-1/2 pt-40 pl-10 text-white  ">
          <h1 className="Name text-4xl leading-relaxed  ">
            Hi, I'm <span className="text-sky-500">Ajay</span>
          </h1>
          <h1 className="Name text-4xl">
            <span>a</span> {"  "}
            <span>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={[
                  "Web developer",
                  "App developer",
                  "Web developer",
                  "App developer",
                ]}
                loop={100}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={400}
                onLoopDone={handleDone}
                onType={handleType}
              />
            </span>
          </h1>
          <p className="pt-6">
            As a skilled web developer, I am proficient in various programming
            languages, frameworks, and technologies, enabling me to create
            scalable and optimized web solutions tailored to meet clients'
            unique requirements.
          </p>
          <button class=" mt-7 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-sky-500 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-sky-950  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Resume
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
