import { useState, useEffect, useRef } from 'react';
// const WebView = require('react-electron-web-view');
// import { useEventListener } from 'usehooks-ts';
// import Draggable from 'react-draggable';
import Tab from './Tab';

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

  // const dragging = (e) => {
  //   console.log(e.pageX);
  // };

  // useEventListener('mousedown', dragging, slider.current);

  return (
    <>
      <div className="tabs-container">
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
