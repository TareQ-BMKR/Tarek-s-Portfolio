
import React, { useState } from 'react';
import Home from './Main';
import Navbar from './Components/NavBar';
import Loader from './Components/Loader';
import "./CssFiles/app.css";

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <div className="app-background">
      {loading && <Loader onComplete={handleLoadingComplete} />}
      {!loading && (
        <>
          <Navbar />
          <Home />
        </>
      )}
    </div>
  );
}

export default App;
