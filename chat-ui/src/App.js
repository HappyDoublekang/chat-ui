import logo from './logo.svg';
import './App.css';
import Button from "./Button"
import useColorSwitch from './useColorSwitch';

function App() {
  const [color, handleButtonClick] = useColorSwitch();

  const handleButton2Click = () => {
    console.log("点击事件2");
  }
  return (
    <div>
      <Button onClick={handleButtonClick} label="按钮">
        <span>
          &gt;
        </span>
      </Button>
      <p style={{color}}>这是一段文字</p>
      <Button onClick={handleButton2Click} label="点我" />
    </div>
  );
}

export default App;
