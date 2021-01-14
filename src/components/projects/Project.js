import './Project.css'

function Project(props){

    
    const imageFilename = "mine.jpg";
    /*/////////////////////// DESKTOP ////////////////////////*/
    if(!props.isSmallScreen){
        return(
            <div className="project-container">
                <div className="image-container">
                    <img className="project-image" src={props.data.imageUrl}/>
                </div>
                <div className="info-container">
                    <div className="main-info-container">
                        <h1><u>{props.data.title}</u></h1>
                        <p className="description">{props.data.description}</p>
                        <div className="link-container">
                            <p>
                                <span><strong>Hosted At:&nbsp;&nbsp;</strong></span> 
                                <a href={props.data.siteUrl} style={{fontSize: '.9em'}} target="_blank">{props.data.siteUrl}</a>
                            </p>
                        </div>
                    </div>
                    <div className="tech-list">
                        Technologies Used:
                        <ul>
                            {props.data.technologies.map((value, index) => {
                                return <li>{value}</li>
                            })}
                        </ul>
                    </div>
                    <div className="button-container">
                        {props.data.siteUrl !== "" &&
                            <a href={props.data.siteUrl} target="_blank"><button className="site-button">View Site</button></a>
                        }
                        {props.data.codeUrl !== "" &&
                            <a href={props.data.codeUrl} target="_blank"><button className="github-button">View Code <br/> (GitHub) </button></a>
                        }
                    </div>
                </div>
            </div>
        )
    }
    else{
        return(
            <div class="project-container-mobile">
                <div class="main-container-mobile">
                    <div class="image-container-mobile" >
                        <img class="project-image-mobile" src={props.data.imageUrl}/>
                    </div>
                
                    <div class="info-container-mobile">
                        <h2><u>{props.data.title}</u></h2>
                        <p class="description">{props.data.description}</p>
                    </div>
                </div>
                <div class="site-button-container-mobile">
                    {props.data.siteUrl !== "" &&
                        <a href={props.data.siteUrl} target="_blank"><button class="site-button-mobile">View Site</button></a>
                    }
                </div>
            </div>
        )
    }
}

export default Project