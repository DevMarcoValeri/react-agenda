import React from 'react';

// Import draft-js
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class NoteEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty()
        };
    }

    onEditorStateChange = editorState => {
        this.setState({ editorState });
    };

    render() {

        const { editorState } = this.state;

        return (
            <section className="editor">
                <Editor
                    editorState={editorState}
                    wrapperClassName="rich-editor demo-wrapper"
                    editorClassName="demo-editor"
                    onEditorStateChange={this.onEditorStateChange}
                    placeholder="The message goes here..." />
            </section>
        );
    }
}

export default NoteEditor;