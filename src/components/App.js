// in react-router-dom version 6: "Switch" is replaced by "Routes"
import { Routes, Route } from 'react-router-dom';
import {NavBar, CreatePost, PostDetail, Home} from './index.js';


function App() {
  return (
    <div className="container">
      {/* NavBar is common to all the components so we are adding it above Routes */}
      <NavBar/>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/post/:postId' element = {<PostDetail/>}/>
        <Route path = '/create-post' element = {<CreatePost/>}/>
      </Routes>
    </div>
  );
}

export default App;