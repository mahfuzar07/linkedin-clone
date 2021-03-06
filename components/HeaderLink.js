import { useSession, signOut } from 'next-auth/react';
function HeaderLink({ Icon, text, avatar, feed, hidden, active, logout }) {
	const { data: session } = useSession();
	return (
		<div
			className={`${hidden && 'hidden md:inline-flex'} cursor-pointer flex flex-col justify-center items-center ${
				feed ? 'text-white/75 hover:text-white  lg:-mb-1.5 space-y-1' : 'text-gray-500 hover:text-gray-700'
			} ${active && 'text-blue-500 hover:text-blue-500'}`}
			onClick={() => logout && signOut()}
		>
			{avatar ? <Icon className="!h-7 !w-7 lg:!-mb-1" src={session?.user?.image} /> : <Icon />}

			<h4 className={`text-sm ${feed && 'hidden lg:flex justify-center w-full mx-auto'}`}>{text}</h4>
			{active && <span className="hidden lg:inline-flex h-0.5 w-[calc(100%+20px)] bg-white  rounded-t-full" />}
		</div>
	);
}

export default HeaderLink;
