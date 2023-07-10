import React from "react";

function Services() {
  return (
    <div className="div pt-24">
      <h1 className="div_head pt-24">SERVICES</h1>
      <div className="lg:flex lg:justify-around lg:space-x-5  lg:mt-10">
        <div className="lg:w-1/3 h-80 pt-5 w-72 lg:mx-0 mx-20 bg-sky-950 rounded overflow-hidden">
          <img
            className="lg:h-full lg:w-full"
            src="https://riseuplabs.com/wp-content/uploads/2021/07/mobile-application-development-guidelines-riseuplabs.jpg"
            alt=""
          />
        </div>
        <div className="lg:w-1/3 lg:h-80 lg:pt-9 pt-4 w-72 lg:mx-0 mx-20 bg-sky-950 rounded overflow-hidden">
          <img
            className="h-80"
            src="https://careerswithstem.com.au/wp-content/uploads/2018/07/web-development-programming-resized.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
