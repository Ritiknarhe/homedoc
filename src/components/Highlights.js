import React from 'react'
import HighlightCard from './HighlightCard'
import MedicationIcon from '@mui/icons-material/Medication';
import PaymentsIcon from '@mui/icons-material/Payments';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import VerifiedIcon from '@mui/icons-material/Verified';
import styled from 'styled-components'

const Highlights = () => {
    return (
        <Container>
            <h1 className='feature'>Our Features</h1>

            <HighlightCard icon={<MedicationIcon className='mui-iconn' />} title="Free Home Collection" />

            <HighlightCard icon={<PaymentsIcon className='mui-iconn' />} title="Pay With Cash" />

            <HighlightCard icon={<AccountBalanceWalletIcon className='mui-iconn' />} title="Easy Refunds" />

            <HighlightCard icon={<VerifiedIcon className='mui-iconn' />} title="High Quality Diagnostic Labs" />
        </Container>
    )
}

export default Highlights

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
        margin: 10px 0;
        font-weight: 800 !important;
        font-family: sans-serif;
        letter-spacing: 1px;
        /* text-transform: uppercase; */
    }
`