import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav>
                        <Nav.Link href="#practice-areas">Practice Areas</Nav.Link>
                        <Nav.Link href="#our-team">Our Team</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href='//www.linkedin.com/' target='_blank'><FontAwesomeIcon icon={faLinkedin} size="lg" /></Nav.Link>
                        <Nav.Link href='//www.twitter.com/' target='_blank'><FontAwesomeIcon icon={faTwitterSquare} size="lg" /></Nav.Link>
                        <Nav.Link href='mailto:ramey@jwalegal.com' target='_blank'><FontAwesomeIcon icon={faEnvelope} size="lg" /></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </footer>
    )
}

export default Footer
