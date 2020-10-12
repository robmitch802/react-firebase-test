import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './Navigation';

const App = () => (
    <Router>
        <Navigation />
    </Router>
);

export default App;