import React from 'react'
import logo from "../images/chim.png";

export default function SideBar() {
  return (
    <div className="absolute inset-y-0 left-0 w-21 bg-zinc-800 font-sans">
        <div className='mb-28 bg-black pb-8'>
            <img src ={logo} alt="Patrick's logo"/>
            <h1 className="m-0 p-0 text-2xl font-bold">Patrick</h1>
            <h4 className="text-xs text-gray-400">Web Developer</h4>
        </div>
        <ul className='mb-28 text-gray-400 text-lg font-extralight'>
            <li className='border-t border-gray-700 py-2'>About</li>
            <li className='border-y border-gray-700 py-2'>Skills</li>
            <li className='border-y border-gray-700 py-2'>Work</li>
            <li className='border-b border-gray-700 py-2 text-green-500'>Contact</li>
        </ul>
        <div className='text-xs flex space-x-4 justify-center'>
            <a href='https://www.linkedin.com/in/patrick-ksor-3459b3218/' target='_blank' rel="noopener noreferrer"><i className="fa-brands fa-linkedin fa-xl hover:text-green-500"></i></a>
            <a href='https://github.com/Patrick-UNCG' target='_blank' rel="noopener noreferrer"><i className="fa-brands fa-github fa-xl hover:text-green-500"></i></a>
        </div>
    </div>
  )
}
