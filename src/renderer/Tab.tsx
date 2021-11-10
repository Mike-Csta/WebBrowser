import WebView from 'react-electron-web-view';

import { useRef, useState } from 'react';

import reload from './reload.png';
import { useEventListener } from 'usehooks-ts';

// var favicon = require('favicon-getter').default;
// var jsonfile = require('jsonfile');
// var favicon = require('favicon-getter').default;
// var path = require('path');
// var uuid = require('uuid');
// var bookmarks = path.join(__dirname, 'bookmarks.json');

type CardProps = {
  title: string;
};

const Tab = ({ title }: CardProps) => {
  console.log(title);

  var back = useRef(null);
  var tab = useRef(null);
  var view = useRef(null);
  var omni = useRef(null);
  var urlTitle = useRef(null);

  function reloadView() {
    view.current.reload();
  }

  function backView() {
    view.current.goBack();
  }

  function forwardView() {
    view.current.goForward();
  }

  function updateURL(event) {
    if (event.keyCode === 13) {
      omni.current.blur();
      let val = omni.current.value;
      let https = val.slice(0, 8).toLowerCase();
      let http = val.slice(0, 7).toLowerCase();
      if (https === 'https://') {
        view.current.loadURL(val);
      } else if (http === 'http://') {
        view.current.loadURL(val);
      } else if (
        val.includes(
          '.pl' ||
            '.com' ||
            '.eu' ||
            '.edu' ||
            '.gov' ||
            '.net' ||
            '.info' ||
            '.org'
        )
      ) {
        view.current.loadURL('http://' + val);
      } else {
        view.current.loadURL('https://www.google.com/search?q=' + val);
      }
    }
  }
  // omni.current.value = view.current.src.value;
  let [favicon, setFavicon] = useState(
    'https://s2.googleusercontent.com/s2/favicons?domain_url=google.pl'
  );

  function updateTitle() {
    if (tab.current.innerHTML !== '') {
      console.log('asdadsd');

      urlTitle.current.innerHTML = view.current.getTitle();
      setFavicon(
        'https://s2.googleusercontent.com/s2/favicons?domain_url=' +
          view.current.getURL()
      );

      // console.log(favicon);
    }
  }

  function updateUrl() {
    if (tab.current.innerHTML !== '') {
      omni.current.value = view.current.getURL();
    }
  }
  setInterval(updateTitle, 2000);
  useEventListener('mousemove', updateUrl);

  const [src, setSrc] = useState('https://www.google.com');

  console.log(setSrc);

  // favicon = function () {
  //   var favimage = document.createElement('img');
  //   favimage.src = this.icon;
  //   favimage.className = 'favicon';
  //   return favimage;
  // };
  const deleteContent = () => {
    tab.current.innerHTML = '';
  };
  return (
    <div ref={tab}>
      <label>
        <div className="tab">
          <div className="tab-wrapper">
            <input className="tabSel" type="radio" name="tab" id="tab" />
            <div className="title">
              <div className="urlIcon">
                <img src={favicon} alt="asda" className="favicon1" />
              </div>
              <div className="urlTitle" ref={urlTitle}>
                Google
              </div>
              <input
                type="text"
                ref={omni}
                id="url"
                className="url"
                onKeyDown={updateURL}
              />
            </div>
            <div className="content content1">
              <div className="control">
                <div className="b ct">
                  {' '}
                  <img
                    src="https://www.nicepng.com/png/full/266-2660273_expand-slideshow-white-back-icon-png.png"
                    className="control1 "
                    onClick={backView}
                    ref={back}
                  />
                </div>
                <div className="f ct">
                  {' '}
                  <img
                    src="https://www.nicepng.com/png/full/266-2660273_expand-slideshow-white-back-icon-png.png"
                    className="control1"
                    onClick={forwardView}
                    ref={back}
                  />
                </div>

                <div className="r ct">
                  {' '}
                  <img
                    src={reload}
                    className="control1 "
                    onClick={reloadView}
                    ref={back}
                  />
                </div>
              </div>

              <WebView
                ref={view}
                className="browserWindow"
                // preload="./__insert.js"
                src={src}
              />
            </div>
          </div>
        </div>
      </label>
      <div className="delTab" onClick={deleteContent}></div>
    </div>
  );
};

export default Tab;
