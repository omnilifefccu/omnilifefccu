import './App.css';
import Navbar from './Components/Navbar';
import Home from './Routes/Home';
import Projects from './Routes/Projects';
import Datacamp from './Routes/Datacamp'
import Team from './Routes/Team';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <Navbar />
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        {/*<Route path={prepath +  '/team'} element={<Team />} />
        <Route path={prepath + '/projects'} element={<Projects />} /> */}
        <Route path='/datacamp' element={<Datacamp />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
