// import React from 'react'
// import { Link } from 'react-router-dom'
// import logo from '../assets/logo1.png'

// function Navbar() {
//   return (
//      <header className="text-gray-600 body-font shadow-lg h-25 bg-orange-50 ">
//   <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center h-100">
//     <a className="flex title-font font-medium items-center text-gray-900 mb-4  md:mb-0">
//       <img src={logo} height="170px"/>
//     </a>
//     <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
//      <Link to='/'> <a className="mr-5 hover:text-gray-900 text-2xl">Home</a> </Link>
//      <Link to='/tracker'>  <a className="mr-5 hover:text-gray-900 text-2xl">About Us</a></Link>
    
//      <Link to='/ecommerce' ><a className="mr-5 hover:text-gray-900 text-2xl">Blogs</a></Link>
//      <Link to='https://melodious-smakager-75ba34.netlify.app/'> <a className="mr-5 hover:text-gray-900 text-2xl">Music</a></Link>
//      <Link to='/yoga'> <a className="mr-5 hover:text-gray-900 text-2xl">Health System</a></Link>
//      <Link to='/contact'> <a className="mr-5 hover:text-gray-900 text-2xl">Contact-Us</a></Link>
//      <Link to='/login'> <button className=" hover:text-gray-900 text-2xl">login</button></Link>
//      <Link to='/signup'> <button className=" hover:text-gray-900 text-2xl">signup</button></Link>

//     </nav>
    
//   </div>
// </header>
    
//   )
// }

// export default Navbar


import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo1.png';

function Navbar() {
  return (
    <header className="text-gray-600 body-font shadow-lg h-25 bg-orange-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center h-100">
        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Link to="/">
            <img src={logo} height="150" alt="Logo" />
          </Link>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-end">
          <Link to="/">
            <a className="mr-5 hover:text-gray-900 text-2xl">Home</a>
          </Link>
          <Link to="/tracker">
            <a className="mr-5 hover:text-gray-900 text-2xl">About Us</a>
          </Link>
          <Link to="/ecommerce">
            <a className="mr-5 hover:text-gray-900 text-2xl">Blogs</a>
          </Link>
         
          <Link to="/yoga">
            <a className="mr-5 hover:text-gray-900 text-2xl">Health System</a>
          </Link>
          <Link to="/contact">
            <a className="mr-5 hover:text-gray-900 text-2xl">Contact-Us</a>
          </Link>
          <Link to="/sign-in">
            <button className="mr-2 hover:text-gray-900 text-2xl">Login</button>
          </Link>
          <Link to="/sign-up">
            <button className="hover:text-gray-900 text-2xl">Signup</button>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
