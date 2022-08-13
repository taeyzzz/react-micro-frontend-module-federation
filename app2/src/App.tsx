import React from 'react';
import './App.scss';
import Footer from './Footer';
const RemoteHeader = React.lazy(() => import("hostapp/Header"));

const dataLink = [
  { text: "Google", link: "https://google.com" },
  { text: "Youtube", link: "https://youtube.com" }
]

function App() {
  return (
    <div className='app2-container'>
      <RemoteHeader text="Remote Header" onClick={() => alert('click')}/>
      hello world
      <Footer listLink={dataLink}/>
      <a href="http://localhost:3000">Link to Host App</a>
    </div>
  );
}

export default App;
