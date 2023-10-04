import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {


    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-5 ">All Caterogy</h2>
            <p className="bg-gray-200 px-7 py-7 rounded-lg font-semibold text-xl">National News</p>
            <div className="py-7 px-12">
                {
                    categories.map(category => <Link className="block mb-5 text-xl text-[#9F9F9F] font-medium" key={category.id}>{category.name}</Link>)
                }

            </div>
        </div>
    );
};

export default LeftSideNav;