import React from 'react'
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <Container>

            <Logo><h2>Home<span>Doc</span></h2></Logo>

            <Links>
                <li><NavLink activeClassName="active" to="/">Diagnostics</NavLink></li>
                <li><NavLink activeClassName="active" to="/healthchecks">Health Checks</NavLink></li>
                <li><NavLink activeClassName="active" to="/boosterdose">Predications</NavLink></li>
            </Links>

            <Buttons>
                <Link to={"/login"}>Login</Link>
                <a href="tel:+917030266661">Call Us</a>
            </Buttons>

        </Container>
    )
}

export default Navbar

const Container = styled.div`
    background-color: #f8f8f8;
    display: flex;
    padding: 20px 30px;
    span{
        color: skyblue;
    }

    .active{
        color: skyblue;
    }
`;

const Logo = styled.div`
    /* background-color: yellow; */
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Links = styled.ul`
    /* background-color: blue; */

    display: flex;
    list-style: none;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
    width: 50%;

    li{
        a{
            color: #000;
            text-decoration: none;
        }
    }
`;

const Buttons = styled.div`
    display: flex;
    align-items: center;

    a{
        padding: 8px 20px;
        text-decoration: none;
        color: #000;
        border: none;
        background-color: #dcdcdc;

        &:hover{
            color: #fff;
            background-color: skyblue;
        }
    }

    a:nth-child(1){
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50px;
        margin: 0 10px;
    }

    a:nth-child(2){
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50px;
        margin: 0 10px;
    }
`;