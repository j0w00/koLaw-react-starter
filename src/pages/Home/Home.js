import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import { Navbar, Nav } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';
import Footer from '../../components/Footer';

function Home() {
    const address1 = '8310 North Capital of Texas Highway';
    const address2 = 'Prominent Point I, Suite 305';
    const city = 'Austin';
    const state = 'TX';
    const zip = 78731;

    const addressURI = encodeURI(`${address1} ${address2} ${city}, ${state} ${zip}`);
    const googleAPIKey = '';

    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="">Ko Law Firm</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#practice-areas">Practice Areas</Nav.Link>
                        <Nav.Link href="#our-team">Our Team</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Jumbotron>
                <Container className='text-center'>
                    <Row>
                        <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
                            <h1 className='font-weight-bold'>The Ko Law Firm, PLLC</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis sint quod dicta aperiam earum dolores eveniet nesciunt veniam, vitae odit iure ex nemo quam nulla ullam esse ducimus accusamus quaerat.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis sint quod dicta aperiam earum dolores eveniet nesciunt veniam, vitae odit iure ex nemo quam nulla ullam esse ducimus accusamus quaerat.</p>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>

            <section id='practice-areas' className='mb-4'>
                <Container>
                    <h2 className='font-weight-bold text-center'>Main Practice Areas</h2>

                    <Row>
                        <Col md={6}>
                            <h5 className='font-weight-bold'>Business</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, quas perferendis odit magnam veniam nobis tempora sit non debitis officiis, accusamus officia distinctio omnis modi repellendus vitae provident a perspiciatis.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consequatur cupiditate dolor eveniet sunt asperiores odit dicta eaque suscipit vitae saepe praesentium qui, doloremque aliquam quidem accusantium reiciendis quasi. At.</p>
                        </Col>
                        <Col>
                            <h5 className='font-weight-bold'>Real Estate</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, quas perferendis odit magnam veniam nobis tempora sit non debitis officiis, accusamus officia distinctio omnis modi repellendus vitae provident a perspiciatis.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consequatur cupiditate dolor eveniet sunt asperiores odit dicta eaque suscipit vitae saepe praesentium qui, doloremque aliquam quidem accusantium reiciendis quasi. At.</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6} lg={3}>
                            <h5 className='font-weight-bold'>Immigration</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, quas perferendis odit magnam veniam nobis tempora sit non debitis officiis, accusamus officia distinctio omnis modi repellendus vitae provident a perspiciatis.</p>
                        </Col>
                        <Col md={6} lg={3}>
                            <h5 className='font-weight-bold'>Probate, Wills & Estates</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, quas perferendis odit magnam veniam nobis tempora sit non debitis officiis, accusamus officia distinctio omnis modi repellendus vitae provident a perspiciatis.</p>
                        </Col>
                        <Col md={6} lg={3}>
                            <h5 className='font-weight-bold'>Family</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, quas perferendis odit magnam veniam nobis tempora sit non debitis officiis, accusamus officia distinctio omnis modi repellendus vitae provident a perspiciatis.</p>
                        </Col>
                        <Col md={6} lg={3}>
                            <h5 className='font-weight-bold'>Criminal</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, quas perferendis odit magnam veniam nobis tempora sit non debitis officiis, accusamus officia distinctio omnis modi repellendus vitae provident a perspiciatis.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id='our-team' className='mb-4'>
                <Container>
                    <h2 className='font-weight-bold text-center'>Our Team</h2>

                    <Row>
                        <Col xs={{span: 12, order: 2}} md={8} lg={9}>
                            <h5 className='font-weight-bold'>Ramey Ko</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, quas perferendis odit magnam veniam nobis tempora sit non debitis officiis, accusamus officia distinctio omnis modi repellendus vitae provident a perspiciatis.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consequatur cupiditate dolor eveniet sunt asperiores odit dicta eaque suscipit vitae saepe praesentium qui, doloremque aliquam quidem accusantium reiciendis quasi. At.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consequatur cupiditate dolor eveniet sunt asperiores odit dicta eaque suscipit vitae saepe praesentium qui, doloremque aliquam quidem accusantium reiciendis quasi. At.</p>
                        </Col>
                        <Col md={{ order: 2 }}>
                            <img src='https://via.placeholder.com/300' alt='Ramey Ko' className='img-fluid w-100 rounded-circle mb-3' />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={{ span: 12, order: 2 }} md={8} lg={9}>
                            <h5 className='font-weight-bold'>Rick Coffer (of Counsel)</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, quas perferendis odit magnam veniam nobis tempora sit non debitis officiis, accusamus officia distinctio omnis modi repellendus vitae provident a perspiciatis.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consequatur cupiditate dolor eveniet sunt asperiores odit dicta eaque suscipit vitae saepe praesentium qui, doloremque aliquam quidem accusantium reiciendis quasi. At.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consequatur cupiditate dolor eveniet sunt asperiores odit dicta eaque suscipit vitae saepe praesentium qui, doloremque aliquam quidem accusantium reiciendis quasi. At.</p>
                        </Col>
                        <Col md={{ order: 1 }}>
                            <img src='https://via.placeholder.com/300' alt='Rick Coffer' className='img-fluid w-100 rounded-circle mb-3' />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id="contact" className='mb-4'>
                <Container>
                    <h2 className='font-weight-bold'>Contact</h2>

                    <Row>
                        <Col>
                            <address>
                                {address1}<br />
                                {address2}<br />
                                {city}, {state} {zip}
                            </address>

                            <address>
                                <a href='mailto:ramey@jwalegal.com'>Ramey@JWALegal.com</a>
                            </address>

                            <address>
                                <strong>(O)</strong> 512.794.9200<br />
                                <strong>(F)</strong> 512.419.9293
                            </address>
                        </Col>
                        <Col sm={6}>
                            <ResponsiveEmbed aspectRatio="16by9">
                                <embed src={`https://www.google.com/maps/embed/v1/place?key=${googleAPIKey}&q=${addressURI}`} />
                            </ResponsiveEmbed>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Footer />
        </>
    )
}

export default Home