import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const [active, setActive ] = useState(false);

    const handleClick = () => {
        setActive(!active);
    }

  return (
    <nav className='flex items-center flex-wrap bg-red-600 p-3 '>
        <Link href='/'>
          <a className='inline-flex items-center p-3 mr-5 '>
            <svg
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              className='fill-current text-white h-8 w-8 mr-2'
            >
             <path
              d="M0,0.054V20h21V0.054H0z M15.422,18.129l-5.264-2.768l-5.265,2.768l1.006-5.863L1.64,8.114l5.887-0.855
	l2.632-5.334l2.633,5.334l5.885,0.855l-4.258,4.152L15.422,18.129z"
            />
            </svg>
            <span className='text-xl text-white font-bold uppercase tracking-wide'>
              Rock & Wings
            </span>
          </a>
        </Link>
        <button
          className=' inline-flex p-3 hover:bg-red-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-red-500 hover:text-white '>
                Home
              </a>
            </Link>
            <Link href='/Menu'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-red-500 hover:text-white'>
                Menu
              </a>
            </Link>
            <Link href="/about">
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-red-500 hover:text-white'>
                    About Us
                </a>
            </Link>
            <Link href='/Contact'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-red-500 hover:text-white'>
                Contact us
              </a>
            </Link>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
