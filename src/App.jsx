import { useEffect, useState } from "react";

export default function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="Pizza spinaci" />
      <h2>Pizza spinaci</h2>
      <p>Toomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  );
}

function Header() {
  return <h1>Pizza Menu Application</h1>;
}

function Menu() {
  return (
    <div>
      <h2>Our Menu</h2>
      <Pizza />
    </div>
  )
}

function Footer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return <footer>{time} We are Close now!!! My friend</footer>
}