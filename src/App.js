
import './App.css';
import Head from './components/Nav'
import About from './components/About'
import Proj from './components/project'
import Cont from './components/contact'
import Foot from './components/footer '

function App() {
  return (
    <div className="App">
      <Head />
      <About />
      <Proj />
      <Cont />
      <Foot />
    </div>
  );
}

export default App;
