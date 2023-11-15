import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";

const Home = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <h1> Total Donation Item: {data.length}</h1>
                
            </div>
        </div>
    );
};

export default Home;