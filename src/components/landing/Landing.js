import './Landing.css'
import Cloud from './Cloud'
import treeImage from './tree.png'
import palmTreeImage from './palm-tree.png'
import meImage from './me.jpg'
import Waterfall from './Waterfall'


function Landing() {
  return (
    <div id="landing">
        
        
        <div className="top-row">
            <div className="hidden-mobile"><Cloud/></div>
            <div className="site-title">
                <h2 className="name">Andy Kawabata</h2>
                <div className="underline"></div>
                <h5>Coding Portfolio</h5>
            </div>
            <div className="hidden-mobile cloud-container"><Cloud/></div>
        </div>

        <div className="info-row">
            <div className="img-box">
                <img src={meImage} alt="" className="my-picture" />

            </div>
            <div className="info-text">
                <p><strong>Greetings!</strong> My name is Andy. I am Computer Science student at The University of North Carolina, Greensboro. I love solving problems and bringing ideas to life through code. I made this website to showcase some of my coding projects. I will eventually add more to this bio, but for now this is all I have written. Thanks for visiting!
                </p>
            </div>
        </div>
        <div className="hidden-mobile tree-container">
            <div className="tree-box">
                <img src={treeImage} alt="" className="tree" />
                <img src={palmTreeImage}  alt=""className="palm-tree"/>
            </div>
        </div>
        <div className="grass"></div>

        <div className="hidden-mobile waterfall-container"><Waterfall/></div>

    
    </div>
  );
}

export default Landing;