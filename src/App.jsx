import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Header from "./components/Header";
//import "./styles/omnifood_queries.css";
import "./styles/style.css";
//import "./styles/general.css";


function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
      <Header />
      </div>
    
  );
}

export default App
