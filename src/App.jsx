import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <Header />
      <ItemListContainer myalert={[<strong>Hot Sale!!! </strong>," Up to ", <strong>50% off</strong>, " in selected items."]}/>
      <Footer />
    </div>
  );
}

export default App;
