import { Button } from "@mui/material";
import { RiMenu2Line } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import "./navigation.css";
import { Link } from "react-router-dom";
import { IoRocketSharp } from "react-icons/io5";


function Navigation(){
    return(
        <nav className="bg-[#f6f6e9] py-1">           
            <div className="container flex items-center justify-end gap-5">
                <div className="col1 w-[20%]"> 
                    <Button className="!text-black gap-2 w-full">
                        <RiMenu2Line /> Shop By Categories
                        <IoIosArrowDown className="text-[12px] ml-auto"/>
                    </Button>
                </div>

                <div className="col2 w-[60%]">
                    <ul className="flex items-center gap-5">
                        <li className="list-none">
                            <Link to='/fashion'>
                            <Button className="!font-[500]">Fashion</Button></Link>   
                        </li>
                        <li className="list-none">
                            <Link to='/food'>
                            <Button className="!font-[500]">Food</Button></Link>   
                        </li>
                        <li className="list-none">
                            <Link to='/education'>
                            <Button className="!font-[500]">Education</Button></Link>   
                        </li>
                        <li className="list-none">
                            <Link to='/entertainment'>
                            <Button className="!font-[500]">Entertainment</Button></Link>   
                        </li>
                        <li className="list-none">
                            <Link to='/stays'>
                            <Button className="!font-[500]">Stays</Button></Link>   
                        </li>
                        <li className="list-none">
                            <Link to='/careers'>
                            <Button className="!font-[500]">Careers</Button></Link>   
                        </li>                        
                    </ul>
                </div>

                <div className="col3 w-[20%]">
                    <p className="text-[14px] font-[1000] flex items-center gap-2 mb-0 mt-0">
                    <IoRocketSharp className="text-[20px]"/> THINKUNI for your unidays</p>
                </div>


            </div>

        </nav>
    );
}

export default Navigation;