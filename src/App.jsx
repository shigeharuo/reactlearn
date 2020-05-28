// App.jsx
import React from 'react';
import Booklist from './components/Booklist';
import { BrowserRouter, Route, Link } from 'react-router-dom';   // 動画４追加
import axios from 'axios';	 // 動画6追加

const App = () => {
  const getDataFromAPI = async keyword => {
    const requestUrl = 'https://www.googleapis.com/books/v1/volumes?q=intitle:'
    const result = await axios.get(`${requestUrl}${keyword}`);
    return result;
  }
  const languages = ['React', 'Vue', 'Angular', 'green'];	// 動画３追加
  return (
    <BrowserRouter>
      <div>
        <h1>react app</h1>
        <ul>
          <li><Link to='/'>React</Link></li>
          <li><Link to='/vue'>Vue</Link></li>
          <li><Link to='/angular'>Angular</Link></li>
          <li><Link to='/green'>Green</Link></li>
        </ul>
        <hr />
        <Route
          exact
          path='/'
          render={
            props =>
              <Booklist
                language={languages[0]}
                getData={keyword => getDataFromAPI(keyword)}  // getDataという名前で関数を渡す
              />}
        />
        <Route
          exact
          path='/vue'
          render={
            props =>
              <Booklist
                language={languages[1]}
                getData={keyword => getDataFromAPI(keyword)}  // getDataという名前で関数を渡す
              />}
        />
        <Route
          exact
          path='/angular'
          render={
            props =>
              <Booklist
                language={languages[2]}
                getData={keyword => getDataFromAPI(keyword)}  // getDataという名前で関数を渡す
              />}

        />
        <Route
          exact
          path='/green'
          render={
            props =>
              <Booklist
                language={languages[3]}
                getData={keyword => getDataFromAPI(keyword)}  // getDataという名前で関数を渡す
              />}

        />
      </div>
    </BrowserRouter>
  );
}
export default App;