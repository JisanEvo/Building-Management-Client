import MenuItem from "../MenuItem";
import { CgProfile } from 'react-icons/cg'
import { TfiAnnouncement } from 'react-icons/tfi'
import { GiPayMoney } from 'react-icons/gi'
import { FaAlipay } from "react-icons/fa6";
const MemberMenu = () => {
    return (
        <div>
            <MenuItem label='Profile' address='/dashboard/profile' icon={CgProfile}></MenuItem>
            <MenuItem label='Announcement' address='/dashboard/announcement' icon={TfiAnnouncement}></MenuItem>
            <MenuItem label='Make Payment' address='/dashboard/makePayment' icon={GiPayMoney
            }></MenuItem>
            <MenuItem label='Payment History' address='/dashboard/paymentHistory' icon={FaAlipay}></MenuItem>
        </div>
    );
};

export default MemberMenu;