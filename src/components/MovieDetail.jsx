import { useEffect, useState } from "react";
import "./MovieDetail.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Text, Heading, Button } from "@chakra-ui/react";
import BookingModal from "./BookingModal";

function MovieDetail() {
    const id = useParams();
    const [data, setData] = useState([]);

    const fetchMovie = async () => {
        const res = await axios.get("https://api.tvmaze.com/search/shows?q=all");
        setData(res.data);
    }

    let temp = data.filter((item) => {
        return item.show.id == id.id;
    });

    useEffect(() => {
        fetchMovie();
    }, [])

    return (
        <div className="mainDiv">
            {temp.map((item) => {
                return (
                    <div key={item.show.id} className="Container">
                        <div className="imgDiv">
                            <img src={item.show.image.original} alt="" />
                        </div>
                        <div className="detailsDiv">
                            <Heading>Title: <span style={{ color: "Orange" }}>{item.show.name}</span></Heading>
                            <Text fontSize={"xl"}><span style={{ fontSize: "22px", color: "black", fontWeight: "bold" }}>Summary: </span>{item.show.summary.replace(/(<([^>]+)>)/ig, '')}</Text>
                            <Text fontSize={"xl"}><span style={{ fontSize: "24px", color: "black", fontWeight: "bold" }}>Genres: </span>{item.show.genres.join(", ")}</Text>
                            <Text fontSize={"xl"}><span style={{ fontSize: "24px", color: "black", fontWeight: "bold" }}>Rating: </span>{item.show.rating.average === null ? 7.5 : item.show.rating.average}</Text>
                            <Text fontSize={"xl"}><span style={{ fontSize: "24px", color: "black", fontWeight: "bold" }}>Status: </span>{item.show.status === "Running" ? "Ongoing" : item.show.status}</Text>
                            <div style={{ display: "flex", gap: "20px" }}>
                                <BookingModal movie={item.show.name} />
                                <Link to={"/"}><Button style={{ width: "100%" }}>Go Back</Button></Link>
                            </div>

                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default MovieDetail;