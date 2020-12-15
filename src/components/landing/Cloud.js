import './Cloud.css'

function Cloud() {
  return (
    <div className="grid-container">
        <div className="cloud one">
            <div style={{
                height: '8px',
                background: 'skyblue'
            }}></div>
        </div>
        <div className="cloud two"></div>
        <div className="cloud three">
            <div style={{
                height: '8px',
                background: 'skyblue'
            }}></div>
        </div>
        <div className="cloud four"></div>
        <div className="cloud five"></div>
        <div className="cloud six"></div>
        <div className="cloud seven"></div>
        <div className="cloud eight" ></div>
        <div className="cloud nine" style={{height: '22px'}}></div>
        <div className="cloud ten"></div>
        <div className="cloud eleven" style={{height: '22px'}}></div>
    </div>
  
  );
}

export default Cloud;
