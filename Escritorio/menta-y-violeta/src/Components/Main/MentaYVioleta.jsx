import './MentaYVioleta.css'
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Categories from '../Categories/Categories';
import Navbar from '../Navbar/Navbar';
import Product from '../Product/Product';
import Search from '../Search/Search';


const MentaYVioleta = () => {
    return (
        <div className="App-Container">
          <Search/>
          <Header/>
          <Hero/> 
          <Categories/>
          <Product/>
          <Navbar/>
        </div>
      );
}

export default MentaYVioleta