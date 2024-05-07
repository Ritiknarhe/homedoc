import React from 'react'
import Navbar from './Navbar';
import Intro from './Intro';
import Highlights from './Highlights';
import Toplabs from './Toplabs';
import Footer from './Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <Intro />
            <Highlights />
            <Toplabs />
            <Footer />
        </>
    )
}

export default Home