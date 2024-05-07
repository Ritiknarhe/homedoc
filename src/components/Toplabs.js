import React from 'react'
import styled from 'styled-components'

const Toplabs = () => {
    return (
        <Container>
            <h1 className='feature'>Top Labs Working with HomeDoc</h1>
            <div className="image">
                <img src='./images/companies.png' />
            </div>
        </Container>
    )
}

export default Toplabs

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .feature{
        width: 100%;
        text-align: center;
        color: skyblue;
        background-color: #f8f8f8;
        padding: 20px 0;
        /* font-style: italic; */
        font-weight: 800 !important;
        font-family: sans-serif;
        letter-spacing: 1px;
        /* text-transform: uppercase; */
    }

    .image{
        margin: 0;
        padding: 0;
        position: relative;
        height: 50%;
        width: 100%;
        background-color: #f8f8f8;
        display: flex;
        justify-content: center;
        align-items: center;

        img{
            margin: 0;
            padding: 0;
        }
    }
`