import { Heading } from '@chakra-ui/react';
import './App.css';
import AllRouter from './Router/AllRouter';
import Footer from './components/Footer';

function App() {
  return (
    <div className='app'>
      <div className='heading'>
        <Heading size={"2xl"} textAlign={"center"} color={"red"}>@BuzzMovies</Heading>
      </div>
      <AllRouter />
      <Footer />
    </div>
  );
}

export default App;
