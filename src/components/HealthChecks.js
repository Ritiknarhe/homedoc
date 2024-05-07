import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const HealthChecks = () => {
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
                        <h3>60 Tests</h3>

                        <h3>&#8377; 999 / person</h3>

                        <ul>

                            <li>Serum Calcium</li>
                            <li>Diabetic Profile (4 tests)</li>
                            <li>Kidney Function Test (9 tests)</li>
                            <li>LFT (12 tests)</li>
                            <li>Iron Deficiency Profile (4 tests)</li>
                            <li>Lipid Profile (8 tests)</li>
                            <li>Thyroid Profile (3 tests)</li>
                            <li>CBP (19 tests)</li>
                            <li><strike>Pancreatic Profile (2 tests)</strike></li>
                            <li><strike>Cardiac Risk Markers (5 tests)</strike></li>
                            <li><strike>Serum Electrolytes (3 tests)</strike></li>
                            <li><strike>Testosterone</strike></li>
                            <li><strike>Vitamin D + Vitamin B12 (2 tests)</strike></li>

                        </ul>

                        <div className="buttons">
                            <Link to="#">Get better health</Link>
                            <a href="#">Detailed test breakdown</a>
                        </div>

                    </TestContainer>

                    <TestContainer
                        initial={{ scale: 1 }}
                        animate={{
                            scale: 1.1
                        }}
                    >
                        <h3>63 Tests</h3>

                        <h3>&#8377; 1499 / person</h3>

                        <ul>

                            <li>Serum Calcium</li>
                            <li>Diabetic Profile (4 tests)</li>
                            <li>Kidney Function Test (9 tests)</li>
                            <li>LFT (12 tests)</li>
                            <li>Iron Deficiency Profile (4 tests)</li>
                            <li>Lipid Profile (8 tests)</li>
                            <li>Thyroid Profile (3 tests)</li>
                            <li>CBP (19 tests)</li>
                            <li>Testosterone</li>
                            <li>Vitamin D + Vitamin B12 (2 tests)</li>
                            <li><strike>Pancreatic Profile (2 tests)</strike></li>
                            <li><strike>Cardiac Risk Markers (5 tests)</strike></li>
                            <li><strike>Serum Electrolytes (3 tests)</strike></li>

                        </ul>

                        <div className="buttons">
                            <Link to="#">Get better health</Link>
                            <a href="#">Detailed test breakdown</a>
                        </div>

                    </TestContainer>

                    <TestContainer>
                        <h3>73 Tests</h3>

                        <h3>&#8377; 1999 / person</h3>

                        <ul>

                            <li>Serum Calcium</li>
                            <li>Diabetic Profile (4 tests)</li>
                            <li>Kidney Function Test (9 tests)</li>
                            <li>LFT (12 tests)</li>
                            <li>Iron Deficiency Profile (4 tests)</li>
                            <li>Lipid Profile (8 tests)</li>
                            <li>Thyroid Profile (3 tests)</li>
                            <li>CBP (19 tests)</li>
                            <li>Testosterone</li>
                            <li>Vitamin D + Vitamin B12 (2 tests)</li>
                            <li>Pancreatic Profile (2 tests)</li>
                            <li>Cardiac Risk Markers (5 tests)</li>
                            <li>Serum Electrolytes (3 tests)</li>

                        </ul>

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

export default HealthChecks

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

    h3{
        text-align: center;
        font-weight: normal;
        font-size: 24px;
    }

    h3:nth-child(1){
        margin-bottom: 15px;
    }
    
    h3:nth-child(2){
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