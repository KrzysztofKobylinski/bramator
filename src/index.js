import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/Home';
import SimpleReactLightbox from 'simple-react-lightbox'

ReactDOM.render(
  <React.StrictMode>
    <SimpleReactLightbox>
      <Home />
    </SimpleReactLightbox>
  </React.StrictMode>,
  document.getElementById('root')
);
