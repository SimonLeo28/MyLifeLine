import React from 'react'
import { Link } from 'react-router-dom'

const Navbar1 = () => {
  return (
    <div className='text-1xl font-bold bg-[#F6F5F5] flex flex-row justify-between items-center p-9 h-[8px] text-black'>
        <img src=""></img>
        <div className='bg-transparent flex flex-row gap-10 text-2xl'>
            <Link to={"/Create-Journal"}>Create a Journal</Link>
            <Link to={"/Login"}>Logout</Link>
        </div>
    </div>
  )
}

export default Navbar1
