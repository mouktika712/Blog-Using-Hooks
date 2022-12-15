import { useState } from "react";
import { firestore } from "../firebase";

function CreatePost() {
    const [title, setTitle] = useState();
    const [subtitle, setSubTitle] = useState();
    const [content, setContent] = useState();

    function handleSubmit (e) {
        e.preventDefault();

        console.log('title', title);
        console.log('subtitle', subtitle);
        console.log('content', content);

        // This will create a collection named 'posts' in firestore if not already present and add a post with the details provided.
        firestore.collection('posts').add({
            title,
            subtitle,
            content,
            createdAt: new Date()
        });
    }
    return (
        <div className="create-post">
            <h1>Create Post</h1>

            <form onSubmit={handleSubmit}>

                <div className="form-field">
                    <label>Title</label>
                    <input value={title} onChange = {(e) => setTitle(e.target.value)} />
                </div>

                <div className="form-field">
                    <label>Subtitle</label>
                    <input value={subtitle} onChange = {(e) => setSubTitle(e.target.value)} />
                </div>

                <div className="form-field">
                    <label>Content</label>
                    <textarea value={content} onChange = {(e) => setContent(e.target.value)}></textarea>
                </div>

                <button className="create-post-btn" type="submit">Create Post</button>
            </form>
        </div>
    )
}

export default CreatePost;
