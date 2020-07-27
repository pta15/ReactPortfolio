import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Dropdown, Container, Row, Col } from 'react-bootstrap';
import '../stylesheets/header.component.css';

export default class Header extends Component{
    render(){
        return(
        <div className="header sticky-top">
            <Link to="/" className="logo">Abdihafid Abdirahman</Link>
            <div class="header-right">
                <Link to="/">Home</Link>
                <Link to="/">Portfolio</Link>
                <Link to="/">CV</Link>
                <Link to="/">Contact</Link>
            </div>
        </div>
            )
    }
}