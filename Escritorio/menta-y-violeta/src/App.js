import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Categories from './Components/Categories/Categories';
import Navbar from './Components/Navbar/Navbar';
import Cards from '../src/Components/Cards/Cards';


function App() {

    return (
      <div className="App-Container">
        <Header/>
        <Hero/> 
        <Categories/>
        <Cards/>
        <Navbar/>
      </div>
    );
}

export default App;
