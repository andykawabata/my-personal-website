import './Project.css'

function Project(props){

    
    const imageFilename = "mine.jpg";
    /*/////////////////////// DESKTOP ////////////////////////*/
    if(!props.isSmallScreen){
        return(
            <div className="project-container">
                <div className="image-container">
                    <img className="project-image" src={require('./data/project-images/'+ imageFilename ).default}/>
                </div>
                <div className="info-container">
                    <div className="main-info-container">
                        <h1><u>{props.data.title}</u></h1>
                        <p className="description">{props.data.description}</p>
                        <div className="link-container">
                            <p>
                                <span><strong>Hosted At:&nbsp;&nbsp;</strong></span> 
                                <a href="#">{props.data.siteUrl}</a>
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
                        <a href={props.data.siteUrl}><button className="site-button">View Site</button></a>
                        <a href={props.data.codeUrl}><button className="github-button">View Code <br/> (GitHub) </button></a>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return(
            <div class="project-container-mobile">
                <div class="main-container-mobile">
                    <div class="image-container-mobile">
                        <img class="project-image-mobile" src="https://webprofessionals.org/wp-content/uploads/2018/12/Static-Website.jpg"/>
                    </div>
                
                    <div class="info-container-mobile">
                        <h2><u>Project Title</u></h2>
                        <p class="description">This is the description This is the description This is the description This is the description This is the description This is the description This is the description This is the description This is the description This is the description This is the description  This is the description This is the description This is the description This is the description This is the description This is the description This is the description </p>
                    </div>
                </div>
                <div class="site-button-container-mobile">
                    <a href="#"><button class="site-button-mobile">View Site</button></a>
                </div>
            </div>
        )
    }
}

export default Project