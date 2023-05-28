import React from 'react'
import { Link } from 'react-router-dom'
function FooterComponent() {
  return (
    <footer className="bottom-0 left-0 z-50 w-full p-4  border-t  md:flex md:items-center md:justify-between md:p-6 bg-slate-800 border-slate-600">
    <span className="text-sm  sm:text-center text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-400 sm:mt-0">
        <li>
        <Link to={"blog"}><p className="mr-4 hover:underline md:mr-6 ">Blogposts</p></Link>
        </li>
        <li>
            <a href="#gallery" className="mr-4 hover:underline md:mr-6">Gallery</a>
        </li>
        <li>
            <a href="#category" className="mr-4 hover:underline md:mr-6">Category</a>
        </li>
        <li>
         <a href="#skill" className="mr-4 hover:underline md:mr-6">Skills</a>
        </li>
        <li>
        <a href="#profession" className="hover:underline">Profession</a>
        </li>
    </ul>
</footer>
  )
}

export default FooterComponent