function NavBar() {
    return (
        <nav className="absolute top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between rounded">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-green-600 text-white font-bolf flex items-center justify-center rounded">
                        E
                    </div>
                    <span className="font-bold text-xl text-green-700">
                        ELECT
                    </span>
                </div>

                <ul className="flex gap-6 text-gray-700 font-medium">
                    <li className="hover:text-green-600 cursor-pointer">Home</li>
                    <li className="hover:text-green-600 cursor-pointer">About</li>
                    <li className="hover:text-green-600 cursor-pointer">Updates</li>
                    <li className="hover:text-green-600 cursor-pointer">Partners</li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;