import React from 'react';
import {useDropzone} from 'react-dropzone';

import styles from './DropZone2.module.css';

function DropZone2() {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

  return (

    <div className={styles.container}>

      <div className={styles.dropzonecontainer}>
        <div {...getRootProps({className: styles.dropzone})}>
          <input {...getInputProps()} />
          { acceptedFiles.length === 0 ?
          <div className={styles.message}>Drag 'n' drop some files here, or click to select files</div>
          :
          <img className={styles.image} src={URL.createObjectURL(acceptedFiles[0])}></img>
          }
        </div>
      </div>

    </div>
  );
}

export default DropZone2;