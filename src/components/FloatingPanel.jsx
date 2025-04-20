import { Fragment, useState } from 'react';

import './FloatingPanel.css';

function FloatingPanel() {
  const [visible, setVisible] = useState(true);

  return (
    <Fragment>
      <div className={`floating-panel ${visible ? '' : 'hidden'}`}>
        <a href="/lien-he" className="panel-item">
          <img src="/icons/bao-gia.jpg" alt="Báo giá" />
          <span>Báo giá</span>
        </a>
        <a href="https://zalo.me/0968960057" target="_blank" rel="noopener noreferrer" className="panel-item">
          <img src="/icons/zalo.png" alt="Zalo" />
          <span>Chat Zalo</span>
        </a>
        <a href="tel:0968960057" className="panel-item">
          <img src="/icons/phone.png" alt="Gọi điện" />
          <span>Gọi điện</span>
        </a>
        <a href="https://m.me/6643041375818745" target="_blank" rel="noopener noreferrer" className="panel-item">
          <img src="/icons/messenger.jpg" alt="Messenger" />
          <span>Messenger</span>
        </a>
      </div>

      <button className="floating-toggle" onClick={() => setVisible(!visible)}>
        {visible ? '✕' : '💬'}
      </button>
    </Fragment>
  );
}

export default FloatingPanel;
