import React from 'react'
import {Nav, Container, Navbar} from 'react-bootstrap'
import Config from '../utils/Config'
import Menu from '../utils/Menu'

const Header = (props) => {
    let location = window.location.href.split(Config.frontendBaseUrl)[1]
    console.log(props.user)
    const navMenu = () => {
        
        if( hasNoMenu() ){
            return "";
        } else {
            if(location.length === 0){
                const listItems = Menu.guest.map((d) => <Nav.Link href={d.href} key={d.key}>{d.item}</Nav.Link>);
                return listItems
            } else {
                if(props.user !== undefined){
                    /**
                     * fetch user_group
                     */
                    
                }
            }
        }
    }
    const hasNoMenu = () => {
        return location.includes('login') || location.includes('signup');
    }
    return(
        <Navbar fixed="top" bg="white">
            <Container>
                <Navbar.Brand href={ hasNoMenu() ? '/' : "#" }>{props.title}</Navbar.Brand>
                <Nav className="mr-auto">
                    {navMenu()}
                </Nav>
                
                {props.user ? 
                    <Nav>
                        <Navbar.Collapse className="justify-content-end">
                            Signed in as: <a > {props.user.usersName}</a>
                        </Navbar.Collapse>
                    </Nav> : 
                    <Nav>
                            <Nav.Link href="/login">Log in</Nav.Link>
                            <Nav.Link href="/signup">Sign up</Nav.Link>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
}

export default Header;