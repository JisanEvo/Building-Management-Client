import { FaBuildingCircleCheck, FaCodePullRequest } from "react-icons/fa6";
import MenuItem from "../MenuItem";
import { FaUserGraduate, FaUsers } from "react-icons/fa";

const AdminMenu = () => {
    return (
        <div>
              {/* admin related */}
            <MenuItem label='Manage Members' address='manage' icon={FaUsers}></MenuItem>
            <MenuItem label='Make Announcement' address='makeAnnounce' icon={FaBuildingCircleCheck
            } ></MenuItem>
            <MenuItem label='Admin Profile' address='adminProfile' icon={FaUserGraduate} ></MenuItem>
            <MenuItem label='Agreement Requests' address='request' icon={FaCodePullRequest} ></MenuItem>
        </div>
    );
};

export default AdminMenu;