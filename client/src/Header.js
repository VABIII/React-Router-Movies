import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import "./Movies/Header.css"

const StyledDiv = styled.div`
  display: flex;
`



export default function Header() {

    return(
        <div className="header">
            <Link className="Link" to="/">Home</Link>
            <Link className="Link" to="/saved-movies">Saved Movie List</Link>
        </div>
    )
}












































