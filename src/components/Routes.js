/**
 * Copyright (c) Kangzeroo
 *
 * This template was created by Kangze Huang
 * adhering to best-practices for React 16+
 * please use with ESlint, Prettier and Flow
 */

import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import DemoPage from '../components/template/demo/DemoPage'

export default () => {
  return (
	 <Router>
       <Route path="/" exact component={DemoPage} />
    </Router>
  )
}
