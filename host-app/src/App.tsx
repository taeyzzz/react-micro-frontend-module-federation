import React from 'react';

import Header from './Header'
import ErrorBoundary from './ErrorBoundary'
import './App.scss';

const RemoteFooter = React.lazy(() => import("app2/Footer"));

const dataLink = [
  { text: "Googles", link: "https://google.com" },
  { text: "Youtube", link: "https://youtube.com" },
  { text: "Facebook", link: "https://facebook.com" },
]

function App() {
  return (
    <div className='app-container'>
      <Header text="This is HOST App"/>
      <div className="content-container">
        What is Lorem Ipsum?
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
      </div>
      <ErrorBoundary>
        <RemoteFooter listLink={dataLink}/>
      </ErrorBoundary>
      <div>
        <a href="http://localhost:3003">Link to App2</a>
      </div>
    </div>
  );
}

export default App;
