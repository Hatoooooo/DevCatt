import React from 'react';
import './styles/ButtonStyle.css';

function App() {
  
  function refreshPage() {
    window.location.reload();
  }
  
  return (
    <div className='bouton'>
      <button onClick={refreshPage}>NEW CAT</button>
    </div>
  );
}

export default App;