import React from "react";
import chat from "../assets/chatting.png";
import facebook from "../assets/facebook.png";
import messenger from "../assets/messenger.png";
import "../App.css";

const LoginPage = () => {
  return (
    <div className="flex bg-black h-screen">
      <div className="w-1/3 flex">
        <img
          className="h-screen border-[#FFF1DC] border-r"
          src="https://i.pinimg.com/564x/b3/a7/f5/b3a7f5d8a021726a100e5de0357631d7.jpg"
          alt=""
        />
        <div className="h-screen w-20  relative right-8 flex flex-col gap-8 justify-center items-center z-20">
          {/* <div className="rounded-full flex items-center justify-center w-16 h-16 blurdiv text-center text-white font-bold">
            <img className="scale-125" src={chat} alt="" />
          </div> */}
          <div className="rounded-full flex items-center justify-center w-16 h-16 blurdiv text-4xl text-[#FFF1DC] font-bold ">
            <i class="ri-github-fill hover:-rotate-[6deg] hover:scale-125 ease-in-out"></i>
          </div>
          <div className="rounded-full flex items-center justify-center w-16 h-16 blurdiv text-4xl text-[#FFF1DC] font-bold">
            <i class="ri-messenger-fill  hover:-rotate-[6deg] hover:scale-125 ease-in-out"></i>
          </div>
          <div className="rounded-full flex items-center justify-center w-16 h-16 blurdiv text-3xl text-[#FFF1DC] font-bold">
            <i class="ri-whatsapp-fill  hover:-rotate-[6deg] hover:scale-125 ease-in-out"></i>
          </div>
        </div>
      </div>
      <div className="w-5/6 bg-black flex">
        <div className=" w-full h-full relative right-[5.8%] z-10 mountain flex justify-center items-center">
        <div className="w-1/2   mx-auto">
        <form className="flex flex-col gap-4" >
          <h3 className="text-2xl font-bold mb-3 text-white">
            Register
          </h3>
          <div className="flex flex-col gap-4 h-[160px]">
           
              <div className="lg:flex gap-3">
                <input
                  required
                  type="text"
                  placeholder="First Name"
                  className="infoInput bg-transparent outline-none px-4 py-2  border-b-2 border-white w-1/2"
                  name="firstname"
                />
                <input
                  required
                  type="text"
                  placeholder="Last Name"
                  className="infoInput bg-transparent outline-none px-4 py-2  border-b-2 border-white w-1/2"
                  name="lastname"
                 
                />
              </div>
            

            <div>
              <input
                required
                type="text"
                placeholder="Username"
                className="infoInput bg-transparent outline-none px-4 py-2  border-b-2 border-white w-full"
                name="username"
               
              />
            </div>
            <div className="flex gap-3">
              <input
                required
                type="password"
                className="infoInput bg-transparent outline-none px-4 py-2  border-b-2 border-white w-1/2"
                placeholder="Password"
                name="password"
               
              />
              
                <input
                  required
                  type="password"
                  className="infoInput bg-transparent outline-none px-4 py-2  border-b-2 border-white w-1/2"
                  name="confirmpass"
                  placeholder="Confirm Password"
                 
                />
              
            </div>
          </div>

          
          <button
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm py-2.5 text-center mr-2 mb-2 w-1/2 overflow-hidden h-10 mt-6"
            type="Submit"
          >
           
              {/* <div className="">
                <img
                  className="relative bottom-28 scale-120 w-[800px] opacity-75"
                  src="https://i.pinimg.com/originals/ef/fa/c5/effac5ecee67363733385ec47159eb43.gif"
                  alt=""
                />
                <p className="relative z-20 bottom-52">Loading...</p>
              </div>
            */}
            Register
          </button>
        </form>
      </div>
        </div>
      </div>
      <div className="h-screen w-20  relative right-24 flex flex-col gap-8 justify-center items-center z-20">
        {/* <div className="rounded-full flex items-center justify-center w-16 h-16 blurdiv text-center text-white font-bold">
            <img className="scale-125" src={chat} alt="" />
          </div> */}
        <div className="rounded-full flex items-center justify-center w-16 h-16 blurdiv text-4xl text-[#FFF1DC] font-bold ">
          <i class="ri-github-fill hover:-rotate-[6deg] hover:scale-125 ease-in-out"></i>
        </div>
        <div className="rounded-full flex items-center justify-center w-16 h-16 blurdiv text-4xl text-[#FFF1DC] font-bold">
          <i class="ri-messenger-fill  hover:-rotate-[6deg] hover:scale-125 ease-in-out"></i>
        </div>
        <div className="rounded-full flex items-center justify-center w-16 h-16 blurdiv text-3xl text-[#FFF1DC] font-bold">
          <i class="ri-whatsapp-fill  hover:-rotate-[6deg] hover:scale-125 ease-in-out"></i>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
