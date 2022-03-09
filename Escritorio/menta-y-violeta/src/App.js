import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Categories from './Components/Categories/Categories';
import Navbar from './Components/Navbar/Navbar';



function App() {

    return (
      <div className="App-Container">
        <Header/>
        <Hero/> 
        <Categories/>
        <Navbar/>
      </div>
    );
}

export default App;
