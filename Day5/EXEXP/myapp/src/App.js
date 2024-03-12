import {Routes, Route,Link} from "react-router-dom"
import Home from './components/Home';
import Profile from './components/profile';
import Shop from './components/Shop';
import ErrorBoundry from "./components/ErrorBoundary"
import Postlist from "./components/PostList";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";



function App() {
  const fetchData=async()=>{
    try{
      const res=await fetch("https://webhook.site/5797e773-4997-4cf7-9275-8c8ce28a3d4d",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          key1: "myusername",
          email: "mymail@gmail.com",
          name: "Isaac",
          lastname: "Doe",
          age: 27,
      })
    }
      )
      console.log(res);
      const data=await res.data
      console.log(data);
  }catch(e){
    console.log(e);
  }
  return (
   <div>
    <header>
      <nav>
      <Link to='/'>Home</Link>
   <Link to='/profile'>profile</Link>
   <Link to='/shop'>shop</Link>
      </nav>
    </header>
    <Routes>
      <Route path='/' element={<ErrorBoundry><Home/></ErrorBoundry>}/>
      <Route path='/profile' element={<ErrorBoundry><Profile/></ErrorBoundry>}/>
      <Route path='/shoop' element={<ErrorBoundry><Shop/></ErrorBoundry>}/>
      <Route path='*' element={<h2>page are not Found</h2>}/>
    </Routes>

    <Postlist/>


    <Example1/>
    <Example2/>
    <Example3/>
    <button onClick={fetchData}> log res</button>
   </div>
  );
}
}

export default App;
