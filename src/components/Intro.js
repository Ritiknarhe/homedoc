import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Intro = () => {
    return (
        <Container>
            <h1>Diagnostics made Easier. And Cheaper.</h1>
            <h3>Save upto 50%</h3>
            <Link to="/healthchecks">Book Now</Link>
        </Container>
    );
}

export default Intro

const Container = styled.div`
    background-color: skyblue;
    padding: 75px 0 150px 50px;

    h1{
        font-size: 50px;
    }
    h3{
        font-size: 24px;
        font-weight: 100;
        margin-bottom: 20px;
        padding: 15px 0;
    }

    a{
        padding: 8px 20px;
        text-decoration: none;
        color: #fff;
        border: none;
        background-color: #000;
        border-radius: 50px;

        &:hover{
            box-shadow: 3px 3px 10px #0000005b;
        }
    }
`