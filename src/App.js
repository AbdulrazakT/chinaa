import './App.css';
import Navigation from './components/Navigation/Navigation'
import { Main } from './components/Main/Main'
import Footer from './components/Footer/Footer';


function App() {

  // let lastname = 'Swai'
  let person = {
    firstname: 'Mustardqqq',
    lastname: 'Twaha'
  }

  const { firstname, lastname } = person

  return (
    <div className="App">
      <Navigation />
      <Main someone={person} />
      <Footer />
    </div>
  );
}

export default App;
