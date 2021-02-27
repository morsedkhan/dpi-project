// import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import CarouselR from './components/home/carousel/CarouselR';
import Footer from './components/home/footer/Footer';
import Home from './components/home/Home';
import News from './components/home/news/News';
import Notice from './components/home/notice/Notice';
// import Notice from './components/home/notice/Notice';
// import Marquee from './components/home/marquee/Marquee';
function App() {
  return (
    <div className="App">
      <Home />
      {/* <Marquee /> */}
      <br/>
      <br/>
      <CarouselR />
      <Notice />
      <Footer />
    </div>
  );
}

export default App;
