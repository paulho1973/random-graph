import React, { useRef, useState, useEffect } from 'react';

import styles from './DragDropDisplay.module.css';

const DragDropDisplay = () => {

    const [image, setImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const fileInputRef = useRef();


    useEffect(() => { 


		return () => { 
            if (previewUrl) {
                URL.revokeObjectURL(previewUrl)
            }
		} 

	}, [previewUrl])

    const preventDefault = (e) => {
        e.preventDefault();
        // e.stopPropagation();
    }

    const dragOver = (e) => {
        preventDefault(e);
    }

    const dragEnter = (e) => {
        preventDefault(e);
    }

    const dragLeave = (e) => {
        preventDefault(e);
    }

    const fileDrop = (e) => {
        preventDefault(e);
        const files = e.dataTransfer.files;
        if (files.length) {
            console.log(files[0]);
            var preview = URL.createObjectURL(files[0]);
            console.log(preview);
            setImage(files[0]);
            setPreviewUrl(preview);
            //handleFiles(files);
         //   URL.revokeObjectURL(previewUrl)
        }
    }

    const fileInputClicked = () => {
        fileInputRef.current.click();
    }


    const filesSelected = () => {
        if (fileInputRef.current.files.length) {
           // handleFiles(fileInputRef.current.files);
           var preview = URL.createObjectURL(fileInputRef.current.files[0]);
           console.log(preview);
           setImage(fileInputRef.current.files[0]);
           setPreviewUrl(preview);
        }
    }

	return (
		<div className={styles.container}>
                <div className={styles.dropcontainer}
                    onDragOver={dragOver}
                    onDragEnter={dragEnter}
                    onDragLeave={dragLeave}
                    onDrop={fileDrop}
                    onClick={fileInputClicked}
                >
                    <div className={styles.dropmessage}>
                        <div className={styles.uploadicon}></div>
                        Drag & Drop files here or click to select file(s)
                    </div>
                    <input
                        ref={fileInputRef}
                        className={styles.fileinput}
                        type="file"
                        multiple
                        onChange={filesSelected}
                    />
                </div>		
                { previewUrl && image &&
                    <div className={styles.image}>
                        <img src={previewUrl} height="200px" width="200px" alt='upload' /> 
                        <span> {image.name} </span>
                    </div> 
                }
		</div>
	);
}

export default DragDropDisplay;