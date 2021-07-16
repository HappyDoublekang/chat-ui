import logo from './logo.svg';
import './App.css';
import Button from "./Button"

function App() {
  const handleButton1Click = () => {
    console.log("点击事件1");
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
      <Button onClick={handleButton2Click} label="点我" />
    </div>
  );
}

export default App;
