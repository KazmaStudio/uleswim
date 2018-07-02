import { render } from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Grid from 'pages/Grid';
import 'index.less';

render((
  <BrowserRouter basename="/">
    <Grid />
  </BrowserRouter>
), document.getElementById('root'))
