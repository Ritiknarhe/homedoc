import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Predications = () => {
    return (
        <>
            <Navbar />
            <Container>

                <div className="greendiv"></div>

                <div className="texts">

                    <h1>Health Checks @ Home</h1>
                    <p>The easiest way to keep life on track. Period.</p>

                </div>

                <div className="innercontainer">

                    <TestContainer>
                        <h2>60 Tests</h2>

                        

                        

                        <div className="buttons">
                            <Link to="#">Get better health</Link>
                            <a href="#">Detailed test breakdown</a>
                        </div>

                    </TestContainer>

                    

                    <TestContainer>
                        <h2>73 Tests</h2>

                        

                        <div
                            className="buttons">
                            <Link to="#">Get better health</Link>
                            <a href="#">Detailed test breakdown</a>
                        </div>

                    </TestContainer>

                </div>

            </Container>
            <Footer />

        </>
    )
}

export default Predications

const Container = styled.div`
    position: relative;
    z-index: -3;
    padding-bottom: 50px;
    
    .greendiv{
        background-color:lightgreen;
        position: absolute;
        height: 50%;
        width: 100%;
        z-index: -1;
    }

    .texts{
        text-align: center;
        padding: 80px 0;
    }

    .innercontainer{
        display:flex;
        margin: 0 auto;
        width: 80%;
        justify-content: space-between;
    }
`

const TestContainer = styled.div`
    width: 100%;
    background-color: #fff;
    padding: 50px 50px;
    border-radius: 10px;
    box-shadow: 0 0 50px rgba(0,0,0,0.1);

    h2{
        text-align: center;
        font-weight: normal;
        font-size: 24px;
    }

    h2:nth-child(1){
        margin-bottom: 15px;
    }
    
    h2:nth-child(2){
        margin-top: 15px;
        margin-bottom: 30px;
    }

    li{
        list-style: none;
        margin: 15px 0;
        font-size: 14px;
        color: #b8b8b8;
    }

    .buttons{
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        justify-content: center;
        padding:50px;

        a:nth-child(1){
            background-color: lightgreen;
            padding: 12px 20px;
            margin-bottom: 8px;
            text-decoration: none;
            width: 70%;
            color: #000000;
            border-radius: 8px;

        }
        
        a:nth-child(2){
            text-decoration: none;
            width: 70%;
            color: #b8b8b8;
        }
    }
`