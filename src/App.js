// import logo from './logo.svg';
import './App.css';
// import Button from './components/button/button'
// import HelloWorld from './components/hello-world/hello-world'
import Posts from './components/posts/posts'
import SideBar from './components/sideBar/sideBar';
import ButtonContext from './context/buttonContext';
import UserContext from './context/usercontext';

function App() {
  
  let userData = {
    name: 'John',
    greet: function(){
      return 'Hello ' + this.name
    }
  }

  return (
    <div className="flex px-5">

      <div className="w-1/4">
        <ButtonContext.Provider value="side button context" >
          <UserContext.Provider value={userData}>
            <SideBar />
          </UserContext.Provider>
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
