import React from 'react';
import ReactDOM from 'react-dom';
import logo from './car.jpg';
import car1 from './car1.jpg';
import car2 from './car2.jpg';
import car3 from './car3.jpg';
import car4 from './car4.jpg';
import insta from './insta.jpg';
import whatsapp from './wa.png';


import './App.css';



function App() {
  return (
    <div>
      <header className="App-header">
        
        <p className="title">
          <b><i>Car Renting Company</i>
          </b>
          
        </p>
        <p className="title2">
          Life is full of Adventures, Drive to chase it.....
        </p>
        
      </header>
     
      <body>
      
      <div className="h">
      <b>
      Check out details to rent a car</b>
      </div>
      <div className="divide">


      <div className="a">
      <from>
      <p>
      <label className="detail">
       <b>Name:  </b> 
       <input type="text" name="name" placeholder="enter your name"/>
      </label>
      </p>

      <p>
      <label className="detail">
       <b>Mail id:  </b> 
       <input type="text" name="name" placeholder="mail id"/>
      </label>
      </p>

      <p>
      <label className="detail">
       <b>Mobile number:  </b> 
       <input type="number"  placeholder="mobile number"/>
      </label>
      </p>

      <p>
      <label className="detail">
       <b>Gender:  </b> 
       <input type="radio" name="name" value="male"/> Male
       <input type="radio" name="name" value="female"/> Female
       <input type="radio" name="name" value="Others"/> Others
      </label>
      </p>

      <p>
      <label className="detail">
       <b>Start date:  </b> 
       <input type="date" name="name" placeholder=""/>
      </label>
      </p>

      <p>
      <label className="detail">
       <b>End date:  </b> 
       <input type="date" name="name" placeholder=""/>
      </label>
      </p>

      <p>
      <label className="detail">
       <b>Select car:  </b> <br /><br />
      
      <b>Suzuki Swift </b> <p className="available">Available !!</p>
      <ul>
      <li>Perday: 1000</li>
      <li>Capacity: 4</li>
      <li>Milage: 20kmpl</li>
      </ul> 

      <input type="radio" name="name" value=""/> <img src={car1} className="carimg" alt="car1" /><br />
       
       <b>Hyndai Creta</b> <p className="available">Available !!</p>
       <ul>
      <li>Perday: 1500</li>
      <li>Capacity: 5</li>
      <li>Milage: 18kmpl</li>
      </ul> 
       <input type="radio" name="name" value=""/> <img src={car2} className="carimg" alt="car2" /><br />
       
       <b>Toyota Innova</b> <p className="available">Available !!</p>
       <ul>
      <li>Perday: 2000</li>
      <li>Capacity: 7</li>
      <li>Milage: 11kmpl</li>
      </ul> 
       <input type="radio" name="name" value=""/> <img src={car3} className="carimg" alt="car3" /><br />
       
       <b>Volkswagen Polo(perday 1200)</b> <p className="notavailable">Not Available</p>
       <ul>
      <li>Perday: 1200</li>
      <li>Capacity: 4</li>
      <li>Milage: 18kmpl</li>
      </ul> 
       <input type="radio" name="name" value=""/> <img src={car4} className="carimg" alt="car4" /><br />
      </label>
      </p>

      <input type="submit" value="Book a car" />

      </from>
      </div>

      </div>


      </body>

      <footer className="foot">
      <p><i>
      Car Renting Company</i>
      </p>
      <p>
      Plot number:3&4,
      </p>
      <p>
      Main road, xyz hills,
      </p>
      <p>
      XYZ state, 123456.
      </p>
      <p>
      Number:124-1234567.
      </p>
      <img src={insta} className="carimg" alt="insta" className="footeralignment"/ >
      <img src={whatsapp} className="carimg" alt="wa" className="footeralignment"/ >
      </footer>
      </div>


    
  );
}

export default App;
