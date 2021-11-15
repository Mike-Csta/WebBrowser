import { useState, useEffect, useRef } from 'react';
import Tab from './Tab/Tab';
import './Tabs.css';

const Demo = () => {
  let cardss = ['jeden'];

  const [cards, setCards] = useState(cardss);

  useEffect(() => {
    setCards(cardss);
  }, []);

  const addCard = () => {
    setCards([...cards, 'xD']);
    cardss = cards;
  };

  const slider = useRef(null);
  return (
    <>
      <div className="tabs-container">
        {' '}
        <div className="logo1">SLIGHTY</div>
        <div className="logo">SLIGHTY</div>
        <div ref={slider} className="tabs-container-wrapper">
          {cards.map((e, id) => (
            <Tab title={e} key={id} />
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
