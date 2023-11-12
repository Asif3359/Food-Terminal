import MenuItem from '../../../SharedPage/MenuItems/MenuItem';
import { Link } from "react-router-dom";

const MenuCategory = ({ items,title }) => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-8'>
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className='flex justify-center items-center flex-col my-5'>
                <Link to={`/order/${title}`}><button className='btn btn-sm btn-outline border-0 border-b-4'>ORDER YOUR FAVOURITE FOOD</button></Link>
            </div>
        </div>
    );
};

export default MenuCategory;