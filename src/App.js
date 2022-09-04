import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderNav from './component/common/header'
import Home from './component/home'
import Add from './component/add'
import Edit from './component/edit'
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <>
    <Router>
      <HeaderNav />
      <Container className="pt-3">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </Container>
    </Router>
    </>
  );
}

export default App;
