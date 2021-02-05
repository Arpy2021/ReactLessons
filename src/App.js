import './App.css';
import Card from "./card/Card"


function App() {
  const card1 = {
    imgUrl: 'https://images.unsplash.com/photo-1473366469422-faaf417abaa5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80',
    imgAlt: 'Beautiful flowers',
    title: 'Flowers World',
    text: 'Natural flowers',

  };
  const card2 = {
    imgUrl: 'https://images.unsplash.com/photo-1457089328109-e5d9bd499191?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=313&q=80',
    imgAlt: 'Beautiful flowers',
    title: 'Beautiful flowers',
    text: 'Bouquet of flowers',

  };
  const card3 = {
    imgUrl: 'https://downloadwap.com/thumbs2/wallpapers/p2/2019/nature/12/adbedf1e13018722.jpg',
    imgAlt: 'Beautiful flowers',
    title: 'Garden',
    text: 'Garden`s flower',

  };


  return (
    <div className="App">
      <div className="card_wrapper">

        <Card img={card1.imgUrl} imgAlt={card1.imgAlt} title={card1.title} text={card1.text} />
        <Card img={card2.imgUrl} imgAlt={card2.imgAlt} title={card2.title} text={card2.text} />
        <Card img={card3.imgUrl} imgAlt={card3.imgAlt} title={card3.title} text={card3.text} />
      </div>
    </div>
  );
}

export default App;
