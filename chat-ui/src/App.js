import logo from './logo.svg';
import './App.css';
import Button from "./Button"

function App() {
  return (
    <div>
      <Button label="按钮">
        <span>
          &gt;
        </span>
      </Button>
      <Button label="点我" />
    </div>
  );
}

export default App;
