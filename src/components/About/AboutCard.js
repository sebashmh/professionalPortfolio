import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        
          <p style={{ textAlign: "justify" }}>
            


               
            -  Atlanta based < span className = "purple" > Computer Scientist. 💻</span>
       
             
            <br/> 
            -☕ A coffee connoisseur.
             <br/> 
             
               
              -🚵🏻‍♂️ Used to compete as a Mountain Biker, but now it 's just a hobby.
              <br/> 
             
               
              -📱 Co-founded 2 Startups.
              <br/> 
             
               
              -📢 I can speak fluently English and Spanish.
              <br/> 
             
               
              -🇨🇴 I am originally from Colombia, not Columbia.
             
              <br/> 
               
              -🎸 I play electric bass guitar.
              <br/> 

               
              -Origami is one of my hobbies (I'm not that good tho).
 </p>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "If they say   you are crazy, you are on the right track. "{" "}
          </p>
          <blockquote className="blockquote mb-0">
          <footer className="blockquote-footer">Sebastian Madrigal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
