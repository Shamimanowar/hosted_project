import React, { useState } from 'react';
import { Navbar, Nav, NavbarBrand, NavbarToggler, NavItem, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggler = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar dark color='dark' expand='sm' style={{ fontSize: '25px' }}>
                <NavbarToggler onClick={toggler} />
                <NavbarBrand href='/'>Photo Gallery</NavbarBrand>
                <div className='container'>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <Link to='/home' className='nav-link active'>Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/people' className='nav-link'>People</Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/flower' className='nav-link'>Flower</Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/resort' className='nav-link'>Resort</Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/about' className='nav-link'>about</Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/contact' className='nav-link'>Contact</Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/logout' className='nav-link'>Logout</Link>
                            </NavItem>

                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </div>
    );
}

export default Navigation;