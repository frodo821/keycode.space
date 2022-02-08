import React, { useEffect } from 'react';
import './App.css';
import EventViewer from './components/EventViewer';

const App: React.FC = () => {
  const [event, setter] = React.useState<KeyboardEvent | null>(null);

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      setter(e);
      e.preventDefault();
    }
    window.addEventListener('keydown', listener);
  }, [null]);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <EventViewer event={event} />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
