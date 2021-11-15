import WebView from 'react-electron-web-view';
import { useRef, useState } from 'react';
import reload from './reload.png';
import { useEventListener } from 'usehooks-ts';
import './Tab.css';

type CardProps = {
  title: string;
};

const Tab = ({ title }: CardProps) => {
  console.log(title);
  var preTab = useRef(null);
  var tabb = useRef(null);
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

  let downloadFavicon = new Image();
  downloadFavicon.onload = function () {
    setFavicon(
      'https://s2.googleusercontent.com/s2/favicons?domain_url=' +
        view.current.getURL()
    );
  };

  function updateTitle() {
    if (tab.current.innerHTML !== '') {
      urlTitle.current.innerHTML = view.current.getTitle();
      downloadFavicon.src =
        'https://s2.googleusercontent.com/s2/favicons?domain_url=google.pl';
      // console.log(favicon);
      if (omni.current != document.activeElement) {
        preTab.current.style.maxWidth = '185px';
        omni.current.blur();
      }
    }
  }

  function updateUrl() {
    if (
      tab.current.innerHTML !== '' &&
      omni.current != document.activeElement
    ) {
      omni.current.value = view.current.getURL();
    }
  }
  setInterval(updateTitle, 500);
  useEventListener('mousemove', updateUrl);

  const [src] = useState('https://www.google.com');

  const deleteContent = () => {
    preTab.current.style.display = 'none';
    tab.current.innerHTML = '';
  };

  const sizeUp = () => {
    preTab.current.style.maxWidth = '585px';
  };

  useEventListener('click', sizeUp, omni);

  return (
    <div className="preTab" ref={preTab}>
      <div ref={tab}>
        <label>
          <div className="tab" ref={tabb}>
            <div className="tab-wrapper">
              <input
                className="tabSel"
                type="radio"
                name="tab"
                id="tab"
                defaultChecked
              />
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
                  <div className="backButton controlBar">
                    <img
                      src="https://www.nicepng.com/png/full/266-2660273_expand-slideshow-white-back-icon-png.png"
                      className="control1 "
                      onClick={backView}
                      ref={back}
                    />
                  </div>
                  <div className="forwardsButton controlBar">
                    <img
                      src="https://www.nicepng.com/png/full/266-2660273_expand-slideshow-white-back-icon-png.png"
                      className="control1"
                      onClick={forwardView}
                      ref={back}
                    />
                  </div>

                  <div className="returnButton controlBar">
                    <img
                      src={reload}
                      className="control1 "
                      onClick={reloadView}
                      ref={back}
                    />
                  </div>
                </div>
                <div className="browserRadius">
                  <WebView
                    ref={view}
                    className="browserWindow"
                    // preload="./__insert.js"
                    src={src}
                  />
                </div>
              </div>
            </div>
          </div>
        </label>
        <div className="delTab" onClick={deleteContent}></div>
      </div>
    </div>
  );
};

export default Tab;
