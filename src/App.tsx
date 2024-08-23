import React from 'react';
import { AuthConsumer } from './components/AuthConsumer';
import { PostsList } from './components/PostsList';

function App() {
  return (
    <div className="App">
      <AuthConsumer />
      <PostsList />
    </div>
  );
}

export default App;
