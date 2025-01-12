import React, { useState } from 'react';
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
            id
        }
    }
}
`

const Header = () => {
    const Usedata = useStaticQuery(data);
    const headerdata = Usedata.allContentfulHeader.nodes;
    const [active, setActive] = useState('default');
    return (
        <div className='fixed-top'>
            <Navbar expand="xl" bg="dark" variant="dark" fixed="top">
                <Container>
                    <Link to='/'><Navbar.Brand>Rumi</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='ms-2' />
                    <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                        <Nav>
                            {headerdata.map(menus =>
                                <Link className='nav-item nav-link'
                                    to={menus.link}
                                    key={menus.id}
                                    activekey={active}
                                    onSelect={(selectedKey) => setActive(selectedKey)}
                                    activeClassName="active"
                                >
                                    {menus.home}
                                </Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
