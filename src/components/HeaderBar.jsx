import React, { Component } from 'react';
import styled from 'styled-components';
import { Nav, Navbar, Button } from "react-bootstrap";
import IIASA_LOGO from '../assets/IIASA_LOGO.png';
import SDSN_LOGO from '../assets/SDSN_LOGO.png';
import FoodAndLand_LOGO from '../assets/FoodAndLand_LOGO.png';
import Bioversity_LOGO from '../assets/Bioversity_LOGO.png';

const Styles = styled.div`
    #IIASA_LOGO {
        width: 7%;
    }
    #SDSN_LOGO {
        width: 7%;
    }
    #FoodAndLand_LOGO {
        width: 7%;
    }
    #Bioversity_LOGO {
        width: 3%;
        margin-bottom: 0.5%;
        margin-left: 1%;
    }
    .navtitle{
        font-weight:lighter;
        font-size:250%;
        margin-bottom:100px;
        margin-left:20%;
    }
`;

class HeaderBar extends Component {
    render() {
        return (
            <Styles>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand>
                        <img className="d-inline-block align-top" id="IIASA_LOGO" src={IIASA_LOGO} />
                        <img className="d-inline-block align-top" id="SDSN_LOGO" src={SDSN_LOGO} />
                        <img className="d-inline-block align-top" id="FoodAndLand_LOGO" src={FoodAndLand_LOGO} />
                        <img className="d-inline-block align-top" id="Bioversity_LOGO" src={Bioversity_LOGO} />
                    </Navbar.Brand>
                    <span className="navbar-text navtitle">
                        Biodiversity Data Explorer
                    </span>
                    {/* <ul className="p-4 d-flex justify-content-end ">
                        <li className="m-3"><a className="text-white" href="#">Home</a></li>
                        <li className="m-3"><a className="text-white" href="#">Scenathons</a></li>
                        <li className="m-3"><a className="text-white" href="#">Contact</a></li>
                        <li className="pl-3 m-3 ml-5"><a className="text-white" href="#">Login</a></li>
                        <li className="m-3"><a className="text-white" href="#">Sign in</a></li>
                    </ul> */}
                </Navbar>
            </Styles>

        );
    }
}
{/* <div>
    <a className="nav-link" href="#">Home</a>
    <a className="nav-link" href="#">Fable</a>
    <a className="nav-link" href="#">Scenathon 2020</a>
    <a className="nav-link" href="#">Scenathon 2019</a>
    <a className="nav-link" href="#">Contact us</a>
    <a className="nav-link" href="#">Login</a>
</div> */}

export default HeaderBar;