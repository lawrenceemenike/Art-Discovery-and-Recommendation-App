import React from 'react';
import Header from './components/Header';
import ArtworkGrid from './components/ArtworkGrid';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import ArtworkModal from './components/ArtworkModal';
import Favorites from './components/Favorites';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Sidebar />
        <ArtworkGrid />
      </main>
      <Footer />
      <ArtworkModal />
      <Favorites />
    </div>
  );
}

export default App;