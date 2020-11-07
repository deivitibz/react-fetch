import React, { useEffect, useState } from "react";
import './App.css';
import List from './component/List';
import withListLoading from './component/witListLoading';

function App() {

  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null
  })

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://jsonplaceholder.typicode.com/todos`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos });
      });
  }, [setAppState]);
  
  return (
    <div className='App'>
      <div className='container'>
        <h1>My Repositories</h1>
      </div>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
      <footer>
        <div className='footer'>
          Built{' '}
          <span role='img' aria-label='love'>
            💚
          </span>{' '}
          with by Shedrack Akintayo
        </div>
      </footer>
    </div>
  )
  
}

export default App;
