import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import PropTypes from 'prop-types';

function App() {
  const [mode, setMode] = useState('light');
  const [btnMode, setbtnMode] = useState('dark');
  const [switchBtn, setSwitch] = useState('moon');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setbtnMode('light');
      setSwitch('sun');
      document.body.style.background = "#292e33";
      document.body.style.color = "white";
    } else {
      setMode('light');
      setbtnMode('dark');
      setSwitch('moon');
      document.body.style.background = "white";
      document.body.style.color = "#292e33";
    }
  }

  return (
    <>
      <Navbar title="Text Utilities" mode={mode} btnMode={btnMode} switchBtn={switchBtn} toggleMode={toggleMode} />
      <TextForm mode={mode} btnMode={btnMode} switchBtn={switchBtn} toggleMode={toggleMode}/>
    </>
  );
}

Navbar.prototypes = {
  title: PropTypes.string.isRequired,
}

export default App;
