import Image from 'next/image';
import bg from '../public/bg.jpg';
import { Avatar } from '@mui/material';

import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

import { useSession } from 'next-auth/react';
function Sidebar() {
	const { data: session } = useSession();

	return (
		<div className="space-y-4 min-w-max max-w-lg">
			<div className="bg-[#1D2226] rounded-lg overflow-hidden relative flex flex-col items-center text-center">
				<div className="relative w-full h-14 ">
					<Image alt="logo5" src={bg} layout="fill" priority />
				</div>
				<Avatar src={session?.user?.image} className="!h-14 !w-14 !border-2 !absolute !top-5 !cursor-pointer" />

				<div className="mt-5 py-4 space-x-0.5">
					<h4 className=" text-white/75  hover:underline decoration-purple-700 underline-offset-1 cursor-pointer">{session?.user?.name}</h4>
					<p className="text-white/75 text-sm">{session?.user?.email}</p>
				</div>
				<div className="hidden md:inline text-left text-white/75 text-sm">
					<div className="font-medium sidebarButton space-y-0.5">
						<div className="flex justify-between space-x-2">
							<h4>Who viewed your profile</h4>
							<span className="text-blue-500">321</span>
						</div>
						<div className="flex justify-between space-x-2">
							<h4>Views of your post</h4>
							<span className="text-blue-500">1,892</span>
						</div>
					</div>
					<div className="sidebarButton">
						<h4 className="leading-4 text-xs text-white ">Access exclusive tools & insights</h4>
						<h4 className="text-white font-medium">
							<span className="w-3 h-3 bg-gradient-to-tr from-yellow-700  to-yellow-200 inline-block rounded-sm mr-1  " /> Try Premium
							for free
						</h4>
					</div>
					<div className="sidebarButton flex items-center space-x-1.5">
						<BookmarkOutlinedIcon className="!-ml-1" />
						<h4 className="text-white font-medium">My items</h4>
					</div>
				</div>
			</div>
			<div className="hidden md:flex bg-[#1D2226] text-white/75 rounded-lg overflow-hidden flex-col space-y-2 pt-2.5 sticky top-20 ">
				<p className="sidebarLink">Groups</p>
				<div className="flex items-center justify-between">
					<p className="sidebarLink">Events</p>
					<AddRoundedIcon className="!h-5" />
				</div>
				<p className="sidebarLink">Followed Hashtags</p>
				<div className="sidebarButton text-center">
					<h4 className="dark:text-white font-medium text-sm">Discover More</h4>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
