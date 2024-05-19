// import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Header from "./components/Header";
import Footer from './components/Footer';
import CGPAToPercent from './components/CgpaToPercent';
import About from './components/About';
import GradeToSgpa from './components/GradeToSgpa';
import SgpaToCgpa from './components/SgpaToCgpa';
import CGPACalculator from './components/CgpaCalculator';

function App() {
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
}

const router=createBrowserRouter([
  {
    path:'/',
    element:
    <>
    <Header/>
    <Home/>
    <Footer/>
    </>
  },
  {
    path:'/about',
    element:<>
      <Header/>
   <About/>
    <Footer/>
    </>
  },
  {
    path:'/cgpa-to-percent',
    element:<>
    <Header/>
      <CGPAToPercent/>
      <Footer/>
    </>
  },
  {
    path:'/grade-to-sgpa',
    element:<>
      <Header/>
   <GradeToSgpa/>
   <Footer/>
    </>
  },
 
  {
    path:'/cgpa-calculator',
    element:<>
      <Header/>
   <CGPACalculator/>
   <Footer/>
    </>
  }
])

export default App;
