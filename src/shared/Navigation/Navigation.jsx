import { Link } from "react-router-dom";

const Navigation = () => {
    // pages link
    const nav = <>
        <li><Link to={`/`} className="font-extrabold text-xl hover:text-[#EEFF25]">HOME</Link></li>
        <li><Link to={`contact`} className="font-extrabold text-xl hover:text-[#EEFF25]">CONTACT US</Link></li>
        <li><Link className="font-extrabold text-xl hover:text-[#EEFF25]">DASHBOARD</Link></li>
        <li><Link to={`menu`} className="font-extrabold text-xl hover:text-[#EEFF25]">OUR MENU</Link></li>
        <li><Link to={`shop`} className="font-extrabold text-xl hover:text-[#EEFF25]">OUR SHOP</Link></li>
    </>
    return (
        <div className="navbar justify-between fixed z-10 text-white bg-[#15151580] md:pt-8 md:pb-6 md:ps-14 md:pe-9">
            <div>
                {/* small device pages link */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-white bg-[#15151580] rounded-box w-52">
                        {nav}
                    </ul>
                </div>
                {/* website logo */}
                <Link to={`/`} className="flex flex-col">
                    <span className="font-[cinzel] font-[900] md:text-3xl text-xl">BISTRO BOSS</span>
                    <span className="font-[cinzel] font-bold md:text-2xl text-lg">RESTAURANT</span>
                </Link>
            </div>
            <div>
                <div className="hidden lg:flex">
                    {/* big device pages link */}
                    <ul className="menu menu-horizontal px-1">
                        {nav}
                    </ul>
                </div>
                <div>
                    {/* button */}
                    <ul className="menu menu-horizontal px-1">
                        <li><Link className="font-extrabold text-xl hover:text-[#EEFF25]">LOGIN</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navigation;