import React from 'react'
import styled from 'styled-components'

const HighlightCard = (props) => {
    return (

        <Card>

            <Icon>
                {props.icon}
            </Icon>

            <Text>
                <h1>{props.title}</h1>
            </Text>

        </Card>

    )
}

export default HighlightCard

const Card = styled.div`
    display: flex;
    width: max-content;
    border-radius: 25px;
    box-shadow: 0 0 5px rgba(0,0,0,0.2), 2px 2px 5px rgba(0,0,0,0.2);
    width: 40%;
    margin: 20px 0;

    &:hover{
        box-shadow: 0 0 10px rgba(0,0,0,0.2), 2px 2px 10px rgba(0,0,0,0.2);
    }
`

const Icon = styled.div`
    padding: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 5px rgba(0,0,0,0.2);
    border-radius: 25px;

    .mui-iconn{
        font-size: 100px;
    }
`

const Text = styled.div`
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`