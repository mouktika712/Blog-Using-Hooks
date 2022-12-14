// in react-router-dom version 6: "Switch" is replaced by "Routes"
import { Routes as Switch, Route } from 'react-router-dom';
import {NavBar, CreatePost, PostDetail, Home} from './index';


function App() {
  return (
    <div className="container">
      {/* NavBar is common to all the components so we are adding it above Switch and Routes */}
      <NavBar/>
      <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route exact path = "/post/:postId" component = {PostDetail}/>
        <Route exact path = "/create-post" component = {CreatePost}/>
      </Switch>
    </div>
  );
}

export default App;
