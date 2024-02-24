import React from 'react';
import Appbar from '@repo/ui/src/appbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { routes } from '@repo/ui/src/routes';
import { RecoilRoot } from "recoil";
 

function App() {
  
  return (  
    <div style={{
      backgroundColor: "white",
      margin: 0,
      padding: 0,
      height: "100vh",
      width: "100vw"
    }}>
      <RecoilRoot>
        <Router>
          <Appbar/>
            <Routes>
              {routes.map((route, index) => (
                <Route key={index} {...route} />
              ))}
            </Routes>
        </Router>
      </RecoilRoot>
    </div>
  )
}


export default App;           