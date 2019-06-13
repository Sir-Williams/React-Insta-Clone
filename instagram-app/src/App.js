import React from 'react';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import CommentSection from './components/CommentSection/CommentSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <PostContainer />
      <CommentSection />
    </div>
  );
}

export default App;
