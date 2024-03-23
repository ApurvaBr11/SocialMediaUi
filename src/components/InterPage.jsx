import React from "react";
import {Link} from 'react-router-dom'
import "../App.css";

const InterPage = () => {
  return (
    <div className="lg:flex lg:flex-row flex flex-col h-screen absolute top-0 w-full">
      <div className="lg:w-2/5 w-full  bg-[#3D3C42] flex flex-col justify-center items-start text-white bgpic">
        <div className="lg:ml-6 sm:m-0 md:m-0">
          <h1 className="lg:text-7xl font-bold lg:m-6">
            Welcome <span className="text-[#FD0054]">@Ex</span>change
          </h1>
          <h1 className="lg:text-xl font-bold lg:mx-6">
            Exange your<span className="text-[]"> Feelings</span> & Thoughts and{" "}
            <br />
            <span className="text-[#FD0054]">"BE_YOURSELF"</span>
          </h1>
          <h1></h1>
        </div>
      </div>
      <div className=" lg:w-3/5 w-full relative bgpic2">
        <div className="relative  h-96 w-60   lg:left-[60%]   blurdiv"></div>
        <div className="w-[90%] h-[40vh]  relative lg:bottom-60 lg:flex gap-2">
          <div className="w-2/5 flex flex-col gap-4 justify-center items-center p-12 bg- rounded mx-2 md:mx-12 sm:mx-12 ">
          <Link to='/login' className="bg-[#181823] rounded-full w-full py-3 text-white font-bold text-md text-center">
                SignUp
              </Link>
              <Link to='/login' className="bg-[#181823] rounded-full w-full py-3 text-white font-bold text-md text-center">
                LogIn
              </Link>
          </div>
          <div className="w-3/5 flex gap-4">
            <div className="w-1/2">
              <img
                src="https://i.pinimg.com/originals/77/a2/71/77a2719a5f9ade27941c879ae3c7bca9.gif"
                alt=""
              />
            </div>
            <div className="w-1/2 flex flex-col gap-4">
              <div className="hii">
                <img
                  src="https://i.pinimg.com/originals/d6/87/7f/d6877f97c5abbd226fcb00547ce9f592.gif"
                  alt=""
                />
              </div>
              <div className="">
                <img
                  src="https://i.pinimg.com/originals/82/28/56/8228562a8ae1ef35a39074c7cae7d986.gif"
                  alt=""
                />
              </div>
              <button className="bg-[#181823] rounded-full w-full py-3 text-white font-bold text-md">
                SignUp
              </button>
              <button className="bg-[#181823] rounded-full w-full py-3 text-white font-bold text-md">
                LogIn
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterPage;
