import './App.css';
import Header from './components/header/Header';
import TinderCards from './components/tindercards/TinderCards';
import SwipeButtons from './components/swipebuttons/SwipeButtons';

function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />
      {/* tidercards */}
      <TinderCards />
      {/* footer => swipe buttons */}
      <SwipeButtons />
    </div>
  );
}

export default App;
