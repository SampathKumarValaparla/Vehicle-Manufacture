import "./Home.css";
import Users from "../Users";
import { useState } from "react";
import Tabel from "./Tabel";

const Home = () => {
  const  [query, setQuery] = useState("");

  const search = (data) => {
    return data.filter((item) => item.Name.toLowerCase().includes(query))
  }


  return (
    <div className='Home'>
        <div className="topbar">
            <h1 className="heading">Vehicle Manufacturing</h1>
            <div className="form">

                <input type={"text"} className="searchbar" placeholder="Search" onChange={e => setQuery(e.target.value)}/>

                <div className="filter">
                <label htmlFor="filterInput">Filter by Vehicle Type</label>
                <input type="text" className="filterInput" onChange={e => setQuery(e.target.value)}/>
                </div>
            </div>
            <Tabel data={search(Users)} />

        </div>
      
    </div>
  )
}

export default Home
