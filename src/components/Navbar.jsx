import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='text-1xl font-bold bg-[#F6F5F5] flex flex-row justify-between items-center p-9 h-[8px] text-black'>
        <img src=""></img>
        <div className='bg-transparent flex flex-row gap-10 text-2xl'>
            <Link to={"/"} >Home</Link>
            <Link to={"/About"} >About</Link>
            <Link to={"/Contact"} >Contact</Link>
            <Link to={"/Login"}>Login/Register</Link>
        </div>
    </div>
  )
}
 
export default Navbar