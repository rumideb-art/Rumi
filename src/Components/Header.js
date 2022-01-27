import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'gatsby';

const data = graphql`
{
    allContentfulHeader {
        nodes {
            home
            link
        }
    }
}
`

const Header = () => {
    const Usedata = useStaticQuery(data);
    const headerdata = Usedata.allContentfulHeader.nodes;
    return (
        <div className='fixed-top'>
            <Navbar expand="xl" bg="dark" variant="dark" fixed="top">
                <Container>
                    <Link to='/'><Navbar.Brand>Rumi</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='ms-2' />
                    <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                        <Nav className="me-auto">
                            {headerdata.map((e, index) => {
                                return (
                                    <Link className='nav-item nav-link' to={e.link} key={index}> {e.home}</Link>
                                )
                            })}

                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
