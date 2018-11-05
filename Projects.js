import React from 'react';
import html from '../svg/html.svg';
import css from '../svg/css.svg';
import JS from '../svg/JS.svg';
import react from '../svg/react.svg';
import nodejs from '../svg/nodejs.svg';
import mongodb from '../svg/mongodb.svg';
import webpack from '../svg/webpack.svg';
import heroku from '../svg/heroku.svg';
import JQuery from '../svg/JQuery.svg';
import sass from '../svg/sass-1.svg';
import nodesass from '../svg/node-sass.svg';
import bootstrap from '../svg/bootstrap.svg';


const Projects = () => {
    return(
        <div className="project-container">
            <section className="project-section1">
                <div className="icons">
                    <img src={html} alt="html"/>
                    <img src={css} alt="css"/>
                    <img src={JS} alt="JS"/>
                    <img src={react} alt="react"/>
                    <img src={nodejs} alt="nodejs"/>
                    <img src={mongodb} alt="mongodb"/>
                    <img src={webpack} alt="webpack"/>
                    <img src={heroku} alt="heroku"/>
                    <img src={JQuery} alt="JQuery"/>
                    <img src={sass} alt="sass"/>
                    <img src={nodesass} alt="nodesass"/>
                    <img src={bootstrap} alt="bootstrap"/>
                </div>
            </section>
            <section className="project-section2">
                <div className="projects">
                    <a href="">Smartbrain</a>
                    <a href="">Colotheme</a>
                    <a href="">Robofreinds</a>
                    <a href="">Indecision</a>
                    <a href="">Thecolorgame</a>
                    <a href="">Todolist</a>
                    <a href="">Designonda</a>
                    <a href="">Kettle</a>
                    <a href="">Momentfactory</a>
                    <a href="">Cheonancity</a>
                </div>
            </section>
        </div>
    )
}

export default Projects;