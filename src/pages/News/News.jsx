import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const News = () => {

    const {id} = useParams()

    return (


        <div>
            <Header></Header>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="col-span-3">
                    <h2>news details</h2>
                    {
                        id
                    }

                </div>
                <RightSideNav></RightSideNav>
            </div>
        </div>



    );
};

export default News;