import axios from "axios";
import { useEffect, useState } from "react";
import "./Home.css";
import { Button, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Home() {
    const [data, setData] = useState([]);


    const fetchData = async () => {
        const res = await axios.get("https://api.tvmaze.com/search/shows?q=all");
        console.log(res.data);
        setData(res.data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="main">
            {data.map((item) => {
                return (
                    <div key={item.show.id}>
                        <img src={item.show.image.medium} alt="" />
                        <Heading size={"lg"}>Title: <span>{item.show.name}</span></Heading>
                        <Text fontSize={"xl"}>Rating: <span>{item.show.rating.average === null ? 7.5 : item.show.rating.average}</span></Text>
                        <Link to={`/moviedetails/${item.show.id}`}><Button colorScheme='blue'>{`More Details >>`}</Button></Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Home;