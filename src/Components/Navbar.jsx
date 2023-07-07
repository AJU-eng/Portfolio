import React from "react";
// import './Navbar.css'
function Navbar() {
  return (
    <nav className="bg-sky-950 text-white  h-14 fixed min-w-full z-10 ">
      {/* <div>
            <img src="https://www.pngfind.com/pngs/m/258-2585091_awesome-image-kenra-professional-logo-hd-png-download.png" alt="" />
        </div> */}
      <div className=" font-mono lg:flex lg:justify-end  space-x-8  mr-24 pt-4">
        <div>
          <p className="hover:text-sky-300 font-bold">Home</p>
        </div>
        <div>
          <p className="hover:text-sky-500 font-bold">About</p>
        </div>
        <div>
          <p className="hover:text-sky-500 font-bold">Contact Us</p>
        </div>
        <div>
          <p>Skills</p>
        </div>
        <div>
          <p>Services</p>
        </div>
        <div>
          <p>Experince</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
