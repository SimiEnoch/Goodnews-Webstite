import '../App.css';
import { useState } from 'react';
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineCaretDown,
  AiOutlineCaretUp,
} from 'react-icons/ai';
import icon from '../images/Goodnews-icon.png';

function Header() {
  const [toggleButton, setToggleButton] = useState(false);

  const buttonHandler = () => {
    if (toggleButton === false) {
      setToggleButton(true);
    }
    if (toggleButton === true) {
      setToggleButton(false);
    }
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <header className="max-w-screen-xl sticky flex z-10 top-0 w-full shadow items-center justify-between bg-white h-[100px] md:px-16 p-2 px-8 bg-slate-950 text-white">
    //   <a href="/" class="flex items-center">
    //     <img
    //       src={icon}
    //       className="mr-10 h-6 sm:h-9 sm:rounded-md rounded-full"
    //       alt="Goodnews Logo"
    //     />
    //   </a>
    //   <h2 className="my-10 px-4 text-xl font-bold">
    //     Goodnews & Breakthrough Assembly
    //   </h2>
    //   <nav
    //     className={`absolute bg-slate-950 text-white ${
    //       toggleButton ? 'top-[-1000%]' : 'top-[70px]'
    //     } w-full left-0 z-[-1] p-8 duration-2000 md:left-auto md:w-auto shadow md:shadow-none md:top-0 md:relative md:bg-transparent md:p-0 md:z-[0]`}
    //   >
    //     <ul className="flex gap-8 text-xl md:text-sm flex-col md:flex-row">
    //       <li className="hover:text-slate-800 duration-500 text-xl">
    //         <a href="/" aria-current="page">
    //           Welcome
    //         </a>
    //       </li>
    //       <li className="hover:text-slate-800 duration-500 text-xl ">
    //         <a href="#shop">About</a>
    //       </li>

    //       <li className="hover:text-slate-800 duration-500 text-xl">
    //         <a href="#shop">Give/Donate </a>
    //       </li>
    //       {/* <li className="hover:text-slate-800 duration-500 gap-3 text-xl">
    //           <a href="#about">Live</a>
    //         </li> */}

    //       <li className="hover:text-slate-800 duration-500 text-xl">
    //         <a href="#about">Events</a>
    //       </li>
    //     </ul>
    //   </nav>
    //   <div className="flex items-center lg:order-2">
    //     <button className=" px-4 mx-4 py-[3px] border hidden md:block rounded text-base text-white shadow  bg-green-700">
    //       <a href="#contact">Join Us</a>
    //     </button>
    //   </div>
    //   <div className="md:hidden block text-2xl font-bold">
    //     <button
    //       onClick={buttonHandler}
    //       className={`${
    //         toggleButton ? 'block' : 'hidden'
    //       } duration-500 w-8`}
    //     >
    //       <AiOutlineMenu />
    //     </button>
    //     <button
    //       onClick={buttonHandler}
    //       className={`${
    //         toggleButton ? 'hidden' : 'block'
    //       } duration-500 w-8`}
    //     >
    //       <AiOutlineClose />
    //     </button>
    //   </div>
    // </header>

    <header className="max-w-screen-xl fixed flex z-10 top-0 w-full shadow items-center justify-between bg-white h-[80px] md:px-8 text-black">
      <a href="#" class="flex px-1">
        <img
          src={icon}
          class="h-9 w-full sm:h-9 rounded-full "
          alt="Goodnews Logo"
        />
      </a>
      {/* <h1 className="text-xl font-bold px-5">
        THE GOODNEWS & <br />
        BREAKTHROUGH ASSEMBLY
      </h1> */}

      <nav
        className={`absolute bg-white text-black ${
          toggleButton ? 'top-[-1000%]' : 'top-[70px]'
        } w-full left-0 z-[-1] p-8 duration-2000 md:left-auto md:w-auto shadow md:shadow-none md:top-0 md:relative md:bg-transparent md:p-0 md:z-[0]`}
      >
        <ul
          className="md:flex md:justify-between md:items-center relative p-2 md:w-50  rounded-lg
          w-full lg:w-auto flex gap-8 sm:gap-6 font-bold text-xl md:text-sm flex-col md:flex-row"
        >
          <li className="hover:text-slate-800 duration-500">
            <a
              href="/"
              aria-current="page"
              className="text-yellow-700"
            >
              The Goodnews & Breakthrough Assembly
            </a>
          </li>
          <li className="hover:text-yellow-700 duration-500">
            <span>
              <a href="#about">Welcome </a>
              <hr className="w-full lg:hidden font-extrabold" />
            </span>
          </li>

          <li className="hover:text-yellow-700 duration-500">
            <a href="#live">Live</a>
            <hr className="w-full lg:hidden" />
          </li>

          <div className=" flex flex-col items-center ">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="block relative p-2 md:w-50 flex items-center justify-between font-bold text-lg rounded-lg w-full active:border-slate-700 border-2"
            >
              About
              {!isOpen ? (
                <AiOutlineCaretDown className="h-8" />
              ) : (
                <AiOutlineCaretUp className="h-8" />
              )}
            </button>
            <div className="w-full">
              {isOpen && (
                <div className="flex items-start justify-between bg-slate-800 text-white sm:relative md:absolute md:top-20 flex-col rounded-md p-2">
                  <ul className="space-y-0 lg:w-24">
                    <li>
                      <a
                        href="#"
                        className="flex p-2 font-medium text-white rounded-md hover:text-black hover:bg-gray-100"
                      >
                        Events
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="flex p-2 font-medium text-white rounded-md hover:text-black hover:bg-gray-100"
                      >
                        Brands
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="flex p-2 font-medium text-white rounded-md hover:text-black hover:bg-gray-100"
                      >
                        Categories
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          <li className="hover:text-yellow-700 duration-500">
            <a href="#give">Give/Donate</a>
            <hr className="w-full lg:hidden" />
          </li>

          <div className="flex items-center lg:order-2">
            <button className=" px-4 mx-4 py-[3px] border hidden md:block rounded text-base text-white shadow  bg-green-700">
              <a href="#Join">Join </a>
            </button>
          </div>
        </ul>
      </nav>

      <div className="md:hidden block">
        <button
          onClick={buttonHandler}
          className={`${
            toggleButton ? 'block' : 'hidden'
          } duration-500 w-8`}
        >
          <AiOutlineMenu />
        </button>
        <button
          onClick={buttonHandler}
          className={`${
            toggleButton ? 'hidden' : 'block'
          } duration-500 w-8`}
        >
          <AiOutlineClose />
        </button>
      </div>
    </header>
  );
}

export default Header;
