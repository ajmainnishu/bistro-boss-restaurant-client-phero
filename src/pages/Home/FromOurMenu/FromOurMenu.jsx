import { Link } from "react-router-dom";
import FetchData from "../../../shared/FetchData/FetchData";
import MenuItems from "../../../shared/MenuItems/MenuItems";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";

const FromOurMenu = () => {
    const [menu] = FetchData();
    return (
        <div className="space-y-12">
            <SectionTitle title={'FROM OUR MENU'} subTitle={'Check it out'}></SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {
                    menu.slice(0, 6).map(items => <MenuItems key={items._id} items={items}></MenuItems>)
                }
            </div>
            <div className="text-center">
                <Link to={`/menu`} className="btn bg-transparent border-0 text-[#1F2937] text-xl font-semibold border-b-2 border-[#1F2937]">View full menu</Link>
            </div>
        </div>
    );
};

export default FromOurMenu;