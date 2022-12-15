import firestore from "../firebase";
import { useFormInput } from "./hooks";

function CreatePost() {
    //an object title= {value, onchange()}
    const title = useFormInput('');
    const subtitle = useFormInput('');
    const content = useFormInput('');

    function handleSubmit (e) {
        e.preventDefault();

        console.log('title', title);
        console.log('subtitle', subtitle);
        console.log('content', content);

        // This will create a collection named 'posts' in firestore if not already present and add a post with the details provided.
        firestore.collection('posts').add({
            title: title.value,
            subtitle: subtitle.value,
            content: content.value,
            createdAt: new Date()
        });
    }
    return (
        <div className="create-post">
            <h1>Create Post</h1>

            <form onSubmit={handleSubmit}>

                <div className="form-field">
                    <label>Title</label>
                    <input {...title} />    
                </div>

                <div className="form-field">
                    <label>Subtitle</label>
                    <input {...subtitle} />
                </div>

                <div className="form-field">
                    <label>Content</label>
                    <textarea {...content}></textarea>
                </div>

                <button className="create-post-btn" type="submit">Create Post</button>
            </form>
        </div>
    )
}

export default CreatePost;
