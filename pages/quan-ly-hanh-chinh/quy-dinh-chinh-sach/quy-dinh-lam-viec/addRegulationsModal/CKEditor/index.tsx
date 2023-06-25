import React, { useState } from 'react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(() =>
    import('@ckeditor/ckeditor5-react').then((module) => {
        return module.CKEditor;
    }),
    { ssr: false }
);

interface EditorProps {
    content: string;
    onChange: (value: string) => void;
}

const Editor = ({ content, onChange }: EditorProps) => {
    const [editorData, setEditorData] = useState(content);

    const handleEditorChange = (event: any, editor: any) => {
        const data = editor.getData();
        setEditorData(data);
        onChange(data);
    };

    return (
        <DynamicComponentWithNoSSR
            editor={ClassicEditor}
            data={editorData}
            onReady={(editor) => {
                console.log('Editor is ready to use!', editor);
            }}
            onChange={handleEditorChange}
            onBlur={(event, editor) => {
                console.log('Blur.', editor);
            }}
            onFocus={(event, editor) => {
                console.log('Focus.', editor);
            }}
        />
    );
};

export default Editor;