import { useState, useEffect } from 'react';
// const WebView = require('react-electron-web-view');
import Tab from './Tab';

const Demo = () => {
  const cardss = ['jeden', 'dwa'];

  const [cards, setCards] = useState(cardss);

  useEffect(() => {
    setCards(cardss);
  }, []);

  const addCard = () => {
    setCards([...cards, 'xD']);
  };

  return (
    <>
      <div className="tabs-container">
        <div className="tabs-container-wrapper">
          {cards.map((e) => (
            <Tab title={e} />
          ))}
          <div onClick={addCard} className="add">
            +
          </div>
        </div>
      </div>
    </>
  );
};

export default Demo;
