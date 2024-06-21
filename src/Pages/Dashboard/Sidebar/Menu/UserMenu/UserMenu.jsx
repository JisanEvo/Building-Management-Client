// import { MenuItem } from "@headlessui/react";
import { CgProfile } from "react-icons/cg";
import { TfiAnnouncement } from "react-icons/tfi";
import MenuItem from "../MenuItem";

const UserMenu = () => {
    return (
        <div>
                         <MenuItem label='Profile' address='/dashboard/profile' icon={CgProfile}></MenuItem>
                         <MenuItem label='Announcement' address='/dashboard/announcement' icon={TfiAnnouncement}></MenuItem>
        </div>
    );
};

export default UserMenu;