import "./search.css"
import Button from "@mui/material/Button"
import { IoMdSearch } from "react-icons/io";

function Search(){
    return(
       <div className="searchbox w-[100%] h-[50px] bg-[#f6f6e9] rounded-[5px] relative p-2">
        <input type="text" placeholder="Search..."  className="w-full h-[35px] focus:outline-none bg-inherit p-2"/>
        <Button className="z-50 !absolute top-[6px] right-[5px] !w-[40px] !min-w-[40px] h-[40px] !rounded-full !text-black"><IoMdSearch className="text-black text-[20px]"/></Button>
       </div>
    );
}

export default Search;