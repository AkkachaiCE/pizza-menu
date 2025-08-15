import { useEffect, useState } from "react";
import { pizzaData } from "./data";

export default function App() {
  return (
    <div className="contaier">
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}


function Header() {
  return (
    <header className="header">
      <h1>Pizza Menu App</h1>
    </header>
);
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 && (
      <ul className="pizzas">
      {pizzaData.map((pizza) => (
        <Pizza pizzaObj={pizza} key={pizza.name}/>
        ))}
      </ul>
      )}
    </main>
  )
}

function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  // const [time, setTime] = useState(new Date().toLocaleTimeString());
  
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTime(new Date().toLocaleTimeString());
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);
  // return (
  //   <footer className="footer">
  //     {time} We are Close now!!! My friend
  //   </footer>
  // );
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen && (
        <div className="order"> 
            <p>
              We're open until {closeHour}:00. Come visit us or order online.
            </p>
            <button className="btn">Order</button>
        </div>
      )}
    </footer>
  )
} 