import { useState, useEffect } from 'react';
// const WebView = require('react-electron-web-view');
import Tab from './Tab';

const Demo = () => {
  let cardss = ['jeden', 'dwa'];

  const [cards, setCards] = useState(cardss);

  useEffect(() => {
    setCards(cardss);
  }, []);

  const addCard = () => {
    setCards([...cards, 'xD']);
    cardss = cards;
  };

  // const deleteCard = (id) => {
  //   setCards(
  //     cards.filter((item, index) => index !== id || item == 'GlupiTypescriptxD')
  //   );
  //   console.log();
  // };

  return (
    <>
      <div className="tabs-container">
        <div className="tabs-container-wrapper">
          {cards.map((e, id) => (
            <div className="preTab">
              <Tab title={e} key={id} />
            </div>
          ))}
          <div onClick={addCard} className="add">
            <div className="add-wrapper">+</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Demo;
