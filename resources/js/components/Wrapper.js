import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ListMovie from './movies/ListMovie';
import NewMovie from './movies/NewMovie';
import EditMovie from './movies/EditMovie';
function Wrapper() {
  return (
    <Router>
      <div className='wrapper'>
        <Header />
        <Routes>
          <Route path='/movies/' element={<Main />} >
            <Route path='/movies/list' element={<ListMovie />} />
            <Route path='/movies/new' element={<NewMovie />} />
            <Route path='/movies/:id' element={<EditMovie />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default Wrapper;
ReactDOM.render(<Wrapper />, document.getElementById('app-wrap'));