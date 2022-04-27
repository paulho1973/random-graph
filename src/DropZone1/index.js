import React from 'react';
import {useDropzone} from 'react-dropzone';

import styles from './DropZone1.module.css';

function DropZone1() {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      <span>{file.path} - {file.size} bytes</span>
      <img
          src={URL.createObjectURL(file)}
          alt={file.path}
          className={styles.image}
      />
    </li>
  ));

  return (

    <div className={styles.container}>

      <div className={styles.dropzonecontainer}>
        <div {...getRootProps({className: styles.dropzone})}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
      </div>

      <div className={styles.infocontainer}>
        
          <h4>Files</h4>
          <ul>{files}</ul>
        
      </div>

    </div>
  );
}

export default DropZone1;