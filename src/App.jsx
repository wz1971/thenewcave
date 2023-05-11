import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <Header />
      <ItemListContainer myalert={"Hot Sale! Up to 50% off in selected items!"}/>
      <Footer />
    </div>
  );
}

export default App;
