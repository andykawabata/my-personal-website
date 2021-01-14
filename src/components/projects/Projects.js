import React, { useState } from 'react';
import divider from './fern.svg'
import './Projects.css'
import Project from './Project'
import { useEffect } from 'react';
import data from './data/Data.js'

function Projects(){
    
    const minWidth = 800;

    const [isSmallScreen, setIsSmallScreen] = useState(null);

    useEffect(() => {
        setIsSmallScreen(checkIfSmallScreen());
        window.addEventListener("resize", handleResize);
    },[])

    const handleResize = (e) => {
        setIsSmallScreen(checkIfSmallScreen());
    };

    function checkIfSmallScreen(){
        return window.innerWidth < minWidth ? true : false;

    }

    return (
        <div className="outer-projects-container">\


            {/*/////////  PERSONAL HEADER ///////////*/}
            <div className="projects-header personal">
                <div className="project-header-inner">
                    <h1>Personal Projects</h1>
                    <p>
                        Applications and tools I've built in my free time to solve problems and experiment with new technologies.
                    </p>
                    <img className="divider" src={divider} alt=""/>
                </div>
            </div>

            {/*/////////  PERSONAL LOOP ///////////*/}
            <div className="inner-projects-container">
                {data.map((value, index) => {
                    if(value.isPersonal){
                        return <Project isSmallScreen={isSmallScreen} data={value}/>
                    }
                    else
                        return <div></div>
                })}
            </div>

                

            {/*/////////  SCHOOL HEADER ///////////*/}
            <div className="projects-header school">
                <div className="project-header-inner">
                    <h1>School Projects</h1>
                    <p>
                        Programs I've written for my Computer Science courses at UNCG.
                    </p>
                    <img className="divider" src={divider} alt=""/>
                </div>
            </div>

            {/*/////////  SCHOOL LOOP ///////////*/}
            <div className="inner-projects-container">
                {data.map((value, index) => {
                    if(!value.isPersonal){
                        return <Project isSmallScreen={isSmallScreen} data={value}/>
                    }
                    else
                        return <div></div>
                })}
            </div>
        </div>

        


    )
}

export default Projects