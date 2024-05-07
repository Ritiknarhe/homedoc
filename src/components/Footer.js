import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <Container>

            <FooterLinks>
                <LinksContainer>

                    <div>
                        <h3>Company</h3>

                        <ul>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Jobs</li>
                            <li>A.I</li>
                        </ul>
                    </div>

                </LinksContainer>

                <LinksContainer>

                    <div>
                        <h3>Our Services</h3>

                        <ul>
                            <li>Diagnostics Centers</li>
                            <li>Diagnostics Tests in Bhiwandi</li>
                            <li>Diagnostics Tests in Thane</li>
                            <li>Diagnostics Tests in Pune</li>
                            <li>Diagnostics Tests in Airoli</li>
                            <li>Diagnostics Tests in Vashi</li>
                        </ul>
                    </div>

                </LinksContainer>

                <LinksContainer>

                    <div>
                        <h3>Knowledge Center</h3>

                        <ul>
                            <li>Best Doctors</li>
                            <li>Understand Series</li>
                            <li>Blog</li>
                            <li>Knowledge Base</li>
                        </ul>
                    </div>

                </LinksContainer>

                <LinksContainer>

                    <div>
                        <h3>Others</h3>

                        <ul>
                            <li>Credits</li>
                            <li>Terms and Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>

                </LinksContainer>

                <LinksContainer></LinksContainer>
            </FooterLinks>

            <Rights>
                <p>Copyright © 2022. All rights reserved.</p>
            </Rights>

        </Container>
    )
}

export default Footer

const Container = styled.div`
    padding: 70px;
    background-color: #e2e2e235;
`

const FooterLinks = styled.div`
    display: flex;
    `

const LinksContainer = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3{
        font-weight: normal;
        font-size: 16px;
        margin: 30px 0;
    }

    li{
        list-style: none;
        font-weight: lighter;
        margin: 3px 0;
        font-size: 15px;
    }
`

const Rights = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px 0;
`