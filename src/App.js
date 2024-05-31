import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import PropTypes from 'prop-types';

function App() {
  return (
    <>
      <Navbar title="Text Utilities" />
      <TextForm />
    </>
  );
}

Navbar.prototypes = {
  title: PropTypes.string.isRequired,
}

export default App;
