import React, { useEffect, useState } from 'react';
import Search from './components/Search'
import List from './components/List'
import './App.css';

function App() {

  const [imgList, setImgList] = useState<ImgItem[]>([])




  return (
    <div className="App">
      <header className="App-header">
        <Search updateList={setImgList}></Search>
        <List sourceData={imgList} pageSize={4}></List>
      </header>
    </div>
  );
}

export default App;
