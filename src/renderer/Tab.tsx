const WebView = require('react-electron-web-view');
import { useRef, useState } from 'react';
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
  var view = useRef(null);
  var omni = useRef(null);
  var urlTitle = useRef(null);

  function backView() {
    view.current.goBack();
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
      } else {
        view.current.loadURL('http://' + val);
      }
    }
  }
  // omni.current.value = view.current.src.value;
  let [favicon, setFavicon] = useState(
    'https://s2.googleusercontent.com/s2/favicons?domain_url=google.pl'
  );

  function updateNav() {
    omni.current.value = view.current.getURL();
    urlTitle.current.innerHTML = view.current.getTitle();
    setFavicon(
      'https://s2.googleusercontent.com/s2/favicons?domain_url=' +
        view.current.getURL()
    );

    console.log(favicon);
  }

  useEventListener('mousemove', updateNav);
  const [src, setSrc] = useState('https://www.google.com');

  console.log(setSrc);

  // useEffect(() => {
  //   // Zaktualizuj tytuł dokumentu korzystając z interfejsu API przeglądarki

  //   console.log('asdasd');
  // }, [view]);

  // favicon = function () {
  //   var favimage = document.createElement('img');
  //   favimage.src = this.icon;
  //   favimage.className = 'favicon';
  //   return favimage;
  // };

  return (
    <div>
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
              <button className="control1" onClick={backView} ref={back}>
                back
              </button>
              <WebView
                ref={view}
                className="browserWindow"
                preload="./__insert.js"
                src={src}
              />
            </div>
          </div>
        </div>
      </label>
    </div>
  );
};

export default Tab;
