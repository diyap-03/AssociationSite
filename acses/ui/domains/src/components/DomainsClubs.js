import React, { useState, useEffect } from "react";
import { getDomains } from "../services/api";
import { Link } from "react-router-dom";
// import { Button } from "bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Domains = () => {
  const [search, setSearch] = useState("");
  const [domains, setDoamins] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    getDomains().then((data) => setDoamins(data));
  }, []);

  const base = "/clubs/";

  const uniqueTypes = [...new Set(domains.map((ele) => ele.type))].sort();

  const handleSubmit = () => {
    navigate('/clubs/addclub');
  };


  return (
    <>
      <div className="card-section">
        <div className="search-container">
          <input
            type="search"
            placeholder="Search.."
            name="search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </div>
        <div className="Addclub">
          <button type="submit" className="btn btn-secondary" onClick={handleSubmit}>Add Club/Domain</button>
        </div>
        <br></br>
        <br></br>

          {uniqueTypes.map((type) => (
            <React.Fragment key={type}>
              {domains.some((ele) => ele.type === type) && (
                <>
                  <h1 className="heading-domains">
                    {type.charAt(0).toUpperCase() + type.slice(1) + "s"}
                    <i className="arrow-icon">➞</i>
                  </h1>
                  <br></br>
                </>
              )}
              <div className="card-container">
              {domains
                .filter(
                  (ele) =>
                    ele.type === type &&
                    (ele.title.toLowerCase().includes(search.toLowerCase()) ||
                      ele.type.toLowerCase().includes(search.toLowerCase()))
                )
                .map((filterDomains) => (
                  <Link
                    to={base + filterDomains.path}
                    style={{ textDecoration: "none" }}
                    key={filterDomains._id}
                  >
                    <div className="card-x">
                      <div className="card-sidebar">
                        <img className="card-image" src={filterDomains.image} alt="" />
                      </div>
                      <div className="card-main">
                      <h2 className="card-name">{filterDomains.title}</h2>
                      <p className="card-body">
                        {filterDomains.description}
                      </p>
                      </div>
                    </div>
                  </Link>
                ))}
                
              </div>
            </React.Fragment>
          ))}
          {domains.length==0 && <div>No Such Data Found</div>}
          
        </div>
    </>
  );
};

export default Domains;
