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
                <img src={meImage} className="my-picture" />

            </div>
            <div className="info-text">
                <p>Lorem Ipsum when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </div>
        <div className="hidden-mobile tree-container">
            <div className="tree-box">
                <img src={treeImage} className="tree" />
                <img src={palmTreeImage} className="palm-tree"/>
            </div>
        </div>
        <div className="grass"></div>

        <div className="hidden-mobile waterfall-container"><Waterfall/></div>

    
    </div>
  );
}

export default Landing;