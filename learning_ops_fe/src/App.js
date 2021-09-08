import logo from './logo.svg';
import './App.css';
import { Heading } from './components/atoms/heading';
import { Title } from './components/atoms/title';
import { Paragraph } from './components/atoms/paragraph';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading text="Hi" color="red"/>
        <Title text="First meeting" color="white" />
        <Paragraph text="The first meeting will be about colonising Mars." />
      </header>
    </div>
  );
}

export default App;
