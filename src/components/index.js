import NavBar from './NavBar';
import PostDetail from './PostDetail';
import CreatePost from './CreatePost';
import Home from './Home';


// if you inport and export App here you will also need to export it in  the App (import App in App): will not work

// Exporting all the components as a single object...to make it easier to import them
export {
    NavBar,
    Home,
    CreatePost,
    PostDetail
}