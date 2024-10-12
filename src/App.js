// import logo from './logo.svg';
import './App.css';
// import Button from './components/button/button'
// import HelloWorld from './components/hello-world/hello-world'
import Posts from './components/posts/posts'
import SideBar from './components/sideBar/sideBar';
import ButtonContext from './context/buttonContext';

function App() {
  return (
    <div className="flex px-5">

      <div className="w-1/4">
        <ButtonContext.Provider value="side button context" >
          <SideBar />
        </ButtonContext.Provider>
      </div>
      <div className="w-3/4">
        <Posts />
      </div>

      {/* <Button name="First Button"/>
      <Button name="Second Button"/>
      
      <HelloWorld text="Hello World" />
      <HelloWorld text="Good Morning" /> */}
    </div>
  );
}

export default App;
