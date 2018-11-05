import React from 'react';
import Nav from './nav/Nav';
import UIProjects from './projects/UIProjects';
import DevProjects from './projects/DevProjects';
import Skills from './skills/Skills';
import Contact from './contact/Contact';
import Background from './background/Background';
import ArrowUp from './utils/ArrowUp';
import MobileNav from './mobilenav/MobileNav';


class PortfolioApp extends React.Component {
    render() {
        return (
            <div className="app-container">
                <MobileNav/>
                <Nav/>
                <Background/>
                <UIProjects/>
                <DevProjects/>
                <Skills/>
                <Contact/>
                <ArrowUp/> 
            </div>
        );
    }
}

export default PortfolioApp;