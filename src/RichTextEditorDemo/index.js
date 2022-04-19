import { useState } from 'react';
import { RichTextEditor } from '@mantine/rte';

import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html'; 

import styles from './RichTextEditorDemo.module.css';

const initialValue =
  '<p>Your initial <b>html value</b> or an empty string to init editor without value</p>';

function RichTextEditorDemo() {

  const [value, onChange] = useState(initialValue);
  const [convertedHTML, setConversion] = useState('');
  const [jsontohtml, setJSONHTML] = useState('');

  // onChange expects a function with these 4 arguments
  function handleChange(content, delta, source, editor) {
      console.log('CONTENT',content)
      console.log('DELTA', delta)
      console.log('SOURCE', source)
      console.log('EDITOR', editor)
      console.log('GETCONTENTS',editor.getContents())
      console.log('OPS',editor.getContents().ops)
      console.log('GETHTML',editor.getHTML())
      onChange(content)

      var converter = new QuillDeltaToHtmlConverter(editor.getContents().ops, {});
      var html = converter.convert();
      console.log('HTML', html)
      setConversion(html)

      var database = JSON.stringify(editor.getContents().ops)
      console.log('DATA', database) 
      
      var converter2 = new QuillDeltaToHtmlConverter(JSON.parse(database), {});
      var html2 = converter2.convert();
      console.log('HTML2', html2)
      setJSONHTML(html2)
  }

  if (value) console.log('VALUE', value)

  //if (value) console.log("VALUE", value)
  
  return (

    <div className={styles.container}>

      <RichTextEditor value={value} onChange={handleChange} />
      <div dangerouslySetInnerHTML={{__html: value}}></div>
      <div dangerouslySetInnerHTML={{__html: convertedHTML}}></div>
      <div dangerouslySetInnerHTML={{__html: jsontohtml}}></div>
    </div>

  );
}

export default RichTextEditorDemo;