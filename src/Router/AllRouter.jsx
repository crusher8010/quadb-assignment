import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import MovieDetail from "../components/MovieDetail";

function AllRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/moviedetails/:id" element={<MovieDetail />}></Route>
        </Routes>
    )
}

export default AllRouter;