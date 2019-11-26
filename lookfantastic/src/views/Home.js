import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Header from './Header';
import Container1 from "./Container1";
import Footer from './Footer';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Container1/>
                <Footer/>
            </div>
        )
    }
}
