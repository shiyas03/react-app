// import logo from './logo.svg';
import './App.css';
import Button from './components/button/button'
import HelloWorld from './components/hello-world/hello-world'

function App() {
  return (
    <div className="">
      <Button name="First Button"/>
      <Button name="Second Button"/>
      
      <HelloWorld text="Hello World" />
      <HelloWorld text="Good Morning" />
    </div>
  );
}

export default App;
