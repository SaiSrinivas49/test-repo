import { createContext, useState } from 'react'
import './App.css'
import Home from './Home'
import List from './List'
import { Login, SignUp } from './Login';
import { Routes, Route } from 'react-router-dom';

export const loginContext = createContext();

function App() {
  
  const [isLogin, setIsLogin] = useState(false);

  return (
     <loginContext.Provider value={{isLogin, setIsLogin}}>
        <div className='List'>
        <Routes>
            { !isLogin? (
               <>
                  <Route path='/' element= {<Login/>}/>
                  <Route path='/SignUp' element= {<SignUp/>}/>
               </>):(
                  <>
                  <Route path='/Home' element= {<Home/>}/>
                  <Route path='/List' element= {<List/>}/>
                  </>
               )}
        </Routes>
        </div>
     </loginContext.Provider>
  );
}

export default App
