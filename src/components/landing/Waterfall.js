import React, {useEffect, useRef} from 'react'
import p5 from 'p5';

function Waterfall() {

  const myRef = useRef(null);
  

  useEffect(()=>{
    let myP5 = new p5(Sketch, myRef.current);
  }, [])

  
  const Sketch = (p) => {
    p.canvasX = 200
    p.canvasY = 400
    p.startX = p.canvasX
    p.startMaxY = 70
    p.startMinY = 40
    p.radius = 5;
    p.lineLength = 50;
    p.lineY = 75
    p.lineX = p.canvasX - p.lineLength;
    p.circles = [];
    p.counter = 0;

    p.setup = () => {
      p.createCanvas(p.canvasX, p.canvasY);
      p.stroke(255);
    }

    p.draw = () => {
      if(p.counter === 0){
        let myCircle = new Circle(p.startX, p.random(p.startMinY, p.startMaxY), p.radius);
        p.circles.push(myCircle);
      }
      p.counter = p.increment(p.counter, 0);
      p.background(135, 206, 235);
      p.line(p.canvasX, p.lineY, p.lineX, p.lineY);
      p.fill(90, 77, 65)
      p.stroke(0);
      p.cliff();
      //image(img, 0, 350, 300, 50)
      for(let i=0; i<p.circles.length; i++){
        var gravity = p.createVector(0, 0.2);
        p.circles[i].applyForce(gravity);
        p.circles[i].checkEdges();
        p.circles[i].update();
        p.circles[i].show();
        if(p.circles[i].pos.y >= 350)
          p.circles.splice(i, 1);
      }
    }

    p.increment = function(counter, range) {
      if(counter > range)
        return 0;
      return counter + 1;
    }

    p.cliff = function(){
      let numRocks = 8;
      let shortenBy = 8
      let rockHeight = (p.canvasY-p.lineY)/numRocks;
      let recs = [];
      for(let i = 0; i < numRocks; i++){
        let x = p.canvasX - p.lineLength + (shortenBy*i);
        let y = p.lineY + (rockHeight * i);
        let w = p.lineLength - (shortenBy * i);
        let h = rockHeight;
        let rec = p.rect(x,y,w,h);
        recs.push(rec)
      }
      return recs;
    }

    class Circle{

      constructor(x, y, radius){
        this.pos = p.createVector(x, y);
        this.vel = p.createVector(-.5, 0);
        this.acc = p.createVector(0,0);
        this.r = radius;
      }
    
      applyForce(force){
        this.acc.add(force)
      }
    
      checkEdges(){
    
        //if on line
        if(this.pos.y >= p.lineY - this.r && this.pos.x >= p.lineX){
          
          this.vel.y *= -.95;
          this.acc.set(0,0);
        }
      }
    
      update(){
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.set(0,0);
      }
    
      show(){
        p.stroke(255);
        p.strokeWeight(0);
        p.fill(20,20, 100);
        p.ellipse(this.pos.x, this.pos.y, this.r*2)
      }
    
    
    }

  }

  

  return (
    <div className="waterfall" ref={myRef}>
      
    </div>
  );
}

export default Waterfall;
