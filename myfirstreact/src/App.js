import logo from './logo.svg';
import './App.css';
// import Functioncm from './components/19-06-2024(functions)/Functioncm';
// import StateEvents from './components/19-06-2024(functions)/StatesEvents';
import Counter from './components/19-06-2024(functions)/Counter';
import ListItems from './components/20-06-2024/ListItems';
import InputHandler from './components/20-06-2024/InputHandler';
import AddToList from './components/20-06-2024/AddToList';
import Alertmssg from './components/20-06-2024/tasks/Alertmssg';
import Deleteopt from './components/20-06-2024/tasks/Deleteopt';
import AlbumId from './components/24-06-2024/task2/AlbumId';
// import ComponentA from './components/24-06-2024/ComponentA';
import Conditionempdata from './components/24-06-2024/task1/Conditionempdata';
import CondationAlRendering from './components/24-06-2024/CondationAlRendering';
import RectForgment from './components/26-06-2024/RectForgment';
import MyFormComponent from './components/tasks/MyFormComponent';
import UseEffectHook from './components/17-07-2024(use effects)/UseEffectHook';
import UseEffectApiCall from './components/17-07-2024(use effects)/UseEffectApiCall';
import ApiSearchData from './components/18-07-2024(api search data)/ApiSearchData';
import ComponentA from './components/19-07-2024(contax hook)/ComponentA';

import { ContextApp1,ContextApp2 } from './components/19-07-2024(contax hook)/ContextApp';
import MemoHooks from './components/22-07-2024(memohooks)/MemoHooks';
import About from './components/23-07-2024(router)/About';
import Countact from './components/23-07-2024(router)/Contact';
import Home from './components/23-07-2024(router)/Home';
import Prodcts from './components/23-07-2024(router)/Products';
import CounterRedux from './components/Counter-24-07-2024/CounterRedux';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function App() {
  const empList = [{ name: 'Sam', age: 28, city: 'Hyderbad', id: 100 },
    { name: 'Ram', age: 24, city: 'Bangalore', id: 100 },
    { name: 'Siva', age: 25, city: 'Pune', id: 100 }]
  return(
    <div>
       {/* <ContextApp1.Provider value={empList}>
       <ContextApp2.Provider value={'Hello World'}> */}
       {/* <Functioncm/> */}
       {/* <StateEvents/> */}
       {/* <Counter/> */}
        {/* <ListItems/>  */}
       {/* <InputHandler/> */}
       {/* <AddToList/>  */}
       {/* <Alertmssg/> */} 
       {/* <Deleteopt/> */}

       {/* <ComponentA/>  */}
        {/* <AlbumId/> */}
        {/* <Conditionempdata/>  */}
       {/* <CondationAlRendering/> */}

       {/* <RectForgment>
        <div>
          <h1> hi hello my self manuteja thandra iam learning react js</h1>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
      </RectForgment> */}
      
       {/* <MyFormComponent/> */}
       {/* <UseEffectHook/> */}
       {/* <UseEffectApiCall/> */}
       {/* <ApiSearchData/> */}
       
       {/* <ComponentA/>
       </ContextApp2.Provider>
       </ContextApp1.Provider> */}

       {/* <MemoHooks/> */}

        {/* 23-07-2024 */}
      <BrowserRouter>
        <div>
          <ol>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/About'}>About us</Link></li>
          <li><Link to={'/Contact'}>Contact us</Link></li>
          <li><Link to={'/Prodcts'}>Prodcts List</Link></li>
          </ol>
          {/* <Outlet /> */}
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Countact />} />
          <Route path="/Prodcts" element={<Prodcts />} />
        </Routes>
      </BrowserRouter>

      <CounterRedux/>

       
    </div>
  )
}
  

export default App;
