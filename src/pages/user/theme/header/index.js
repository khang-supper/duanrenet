import "./style.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import { Formater } from "../../../../utils/formater";

const Header = () => {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-6 header-top-left">
          <ul>
            <li><AttachEmailIcon/> <span>nguyenduykhang2004.cd@gmail.com</span></li>
            <li>Miễn phí ship đơn hàng từ {Formater(200000)}</li>
          </ul>
        </div>
        <div className="col-md-6 header-top-rigth">
          <ul>
            <li>
              <FacebookIcon />
            </li>
            <li>
              <AccessTimeFilledIcon />
            </li>
            <li>
              <AccountCircleIcon />
            </li>
            <li>
              <AddShoppingCartIcon />
            </li>
            <li>
              <AccountBoxIcon />
              <span>đăng nhập</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-xl-3 col-lg-3">hello</div>
        <div className="col-xl-3 col-lg-6">khang</div>
        <div className="col-xl-3 col-lg-3">khanh</div>
      </div>
    </div>
    </>
  );
};
export default Header;
