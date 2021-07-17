import logo from './logo.svg';
import './App.css';
import Button from "./Button"
import { useState } from 'react';

function App() {
  const [color, setColor] = useState("#ff0000");

  const handleButton1Click = () => {
    console.log("点击事件1");
    setColor("#00ff00");
  }
  const handleButton2Click = () => {
    console.log("点击事件2");
  }
  return (
    <div>
      <Button onClick={handleButton1Click} label="按钮">
        <span>
          &gt;
        </span>
      </Button>
      <p style={{color: color}}>这是一段文字</p>
      <Button onClick={handleButton2Click} label="点我" />
    </div>
  );
}

export default App;
