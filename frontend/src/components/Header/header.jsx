import {Link} from "react-router-dom";
import Search from "../Search/search";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { FaHeartCrack } from "react-icons/fa6";
import { IoMdGitCompare } from "react-icons/io";
import Tooltip from '@mui/material/Tooltip';


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));
  


function Header(){
    return(
       <header>
         <div className="top-strip py-2 border-t-[1px] border-gray-250 border-b-[1px] bg-[#f6f6e9]">
            <div className="container">
                <div className="flex items-center justify-between">
                    <div className="col1 w-[50%]">
                        <p className="text-[12px] font-[1000]">India's First one stop marketplace</p>
                    </div>

                    <div className="col2 flex items-center justify-end">
                       <ul className="flex items-center gap-3">
                            <li className="list-none">
                                <Link to="#" className="text-[13px] font-[400] link transition">Help Center</Link>
                            </li>

                            <li className="list-none">
                                <Link to="/order-tracking" className="text-[13px] font-[400] link transition">Order Tracking</Link>
                            </li>
                       </ul>

                    </div>
                </div>
            </div>
         </div>
         <div className="header py-3 bg-primary">
            <div className="container flex items-center justify-between">

                <div className="col1 w-[15%]">
                    <Link to="/"><img src="./public/logo.png" /></Link>
                </div>

                <div className="col2 w-[10%]">
                </div>

                <div className="col3 w-[45%]">
                    <Search/>
                </div>

                <div className="col4 w-[30%] flex items-center pl-7">
                    <ul className="flex items-center justify-end gap-3 w-full">
                        <li className="list-none"> 
                            <Link to='/login' className="link2 transition text-[15px] font-[500]">Login</Link>&nbsp;|&nbsp;<Link to='/signin ' className="link2 transition text-[15px] font-[500]">Register</Link>
                        </li>


                        <li>
                            <Tooltip title="Compare">
                                <IconButton aria-label="compare">
                                    <StyledBadge badgeContent={4} color="secondary">
                                        <IoMdGitCompare />
                                    </StyledBadge>
                                </IconButton>
                            </Tooltip>
                        </li>


                        <li>
                            <Tooltip title="Cart">
                                <IconButton aria-label="cart">
                                    <StyledBadge badgeContent={4} color="secondary">
                                        <ShoppingCartIcon />
                                    </StyledBadge>
                                </IconButton>
                            </Tooltip>
                        </li>

                        <li>
                            <Tooltip title="Wishlist">
                                <IconButton aria-label="wishlist">
                                    <StyledBadge badgeContent={4} color="secondary">
                                        <FaHeartCrack />
                                    </StyledBadge>
                                </IconButton>
                            </Tooltip>
                        </li>

                    </ul>


                </div>



            </div>
         </div>
       </header>
    );
}

export default Header;