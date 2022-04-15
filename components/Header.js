import Image from 'next/image';
import logoPic from '../public/logo3.png';
import HeaderLink from '../components/HeaderLink';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import GroupIcon from '@mui/icons-material/Group';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import { Avatar } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

function Header() {
	return (
		<div>
			<header className="sticky top-0 z-40 bg-[#1D2226]  flex items-center justify-around py-1.5 px-3 focus-within:shadow-lg">
				<div className="flex items-center space-x-2 w-full max-w-xs">
					<Image alt="logo-pic" src={logoPic} width={80} height={70} />

					<div className="flex bg-gray-700 text-white/75 items-center space-x-1  py-2.5 px-4 rounded w-full">
						<SearchRoundedIcon />
						<input
							type="text"
							placeholder="Search"
							className="hidden md:inline-flex bg-transparent focus:outline-none text-sm placeholder-white/75  flex-grow"
						/>
					</div>
				</div>
				<div className="flex items-center space-x-6">
					<HeaderLink Icon={HomeRoundedIcon} text="Home" feed active />
					<HeaderLink Icon={GroupIcon} text="My Network" feed />
					<HeaderLink Icon={BusinessCenterIcon} text="Jobs" feed hidden />
					<HeaderLink Icon={ChatIcon} text="Messaging" feed />
					<HeaderLink Icon={NotificationsIcon} text="Notifications" feed />
					<HeaderLink Icon={Avatar} text="Me" feed avatar hidden />
					<HeaderLink Icon={LogoutIcon} text="Logout" feed hidden logout />
				</div>
			</header>
		</div>
	);
}

export default Header;
