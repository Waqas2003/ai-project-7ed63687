import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Argentina Football Team</h1>
      </header>
      <main>
        <section className="team-info">
          <h2>Team Info</h2>
          <ul>
            <li>Coach: Lionel Scaloni</li>
            <li>Captain: Lionel Messi</li>
            <li>Stadium: Estadio Monumental Antonio Vespucio Liberti</li>
          </ul>
        </section>
        <section className="players">
          <h2>Players</h2>
          <ul>
            <li>Lionel Messi</li>
            <li>Sergio Agüero</li>
            <li>Paulo Dybala</li>
            <li>Angel Di Maria</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;