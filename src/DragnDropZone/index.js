import React, { useState } from 'react';
import {useDropzone} from 'react-dropzone';

import styles from './DragnDropZone.module.css';

function DragnDropZone() {

  const initialDnDState = {
    draggedFrom: null,
    draggedTo: null,
    isDragging: false,
    originalOrder: [],
    updatedOrder: [] 
  };

  const [dragAndDrop, setDragAndDrop] = React.useState(initialDnDState);

  const [items, setItems] = useState([]);


  const replaceArray = (files, ind) => {

    if (dragAndDrop.draggedFrom) {
      Drop();
    } else {
      let newArray = [...items];
      newArray[ind] = files[0]
      setItems(newArray);
    }
  }

  const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
    onDrop: acceptedFiles => {
      replaceArray(acceptedFiles, 0);
    },
    onDragOver: e => {
      DragOver(e);
    },
    onDragLeave: e => {
      DragLeave(e);
    }
  });
  const {acceptedFiles:acceptedFiles1, getRootProps: getRootProps1, getInputProps:getInputProps1} = useDropzone({
    onDrop: acceptedFiles => {
      replaceArray(acceptedFiles, 1);
    },
    onDragOver: e => {
      DragOver(e);
    },
    onDragLeave: e => {
      DragLeave(e);
    }
  });
  const {acceptedFiles:acceptedFiles2, getRootProps: getRootProps2, getInputProps:getInputProps2} = useDropzone({
    onDrop: acceptedFiles => {
      replaceArray(acceptedFiles, 2);
    },
    onDragOver: e => {
      DragOver(e);
    },
    onDragLeave: e => {
      DragLeave(e);
    }
  });
  const {acceptedFiles:acceptedFiles3, getRootProps: getRootProps3, getInputProps:getInputProps3} = useDropzone({
    onDrop: acceptedFiles => {
      replaceArray(acceptedFiles, 3);
    },
    onDragOver: e => {
      DragOver(e);
    },
    onDragLeave: e => {
      DragLeave(e);
    }
  });

  const onDragStart = event => {
    const initialPosition = Number(event.currentTarget.dataset.position);

    //console.log("FROM TARGET", event.currentTarget)  
    //console.log("FROM EVENT", event.currentTarget.dataset)    
    console.log("FROM NUMBER", initialPosition)


    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: initialPosition,
      isDragging: true,
      originalOrder: items
    });

    // Note: this is only for Firefox.
    // Without it, the DnD won't work.
    // But we are not using it.
    event.dataTransfer.setData("text/html", '');
  };


    // onDragOver fires when an element being dragged
  // enters a droppable area.
  // In this case, any of the items on the list
  const DragOver = event => {

    // in order for the onDrop
    // event to fire, we have
    // to cancel out this one
    event.preventDefault();

    let newList = dragAndDrop.originalOrder;

    // index of the item being dragged
    const draggedFrom = dragAndDrop.draggedFrom;

    // index of the droppable area being hovered
    const draggedTo = Number(event.currentTarget.dataset.position);

    //console.log("TO TARGET", event.currentTarget)  
    //console.log("TO EVENT", event.currentTarget.dataset)    
    console.log("TO NUMBER", draggedTo)

    const itemDragged = newList[draggedFrom];
    const remainingItems = newList.filter((item, index) => index !== draggedFrom);


    if (typeof newList[draggedTo] !== 'undefined') {
      newList = [
      ...remainingItems.slice(0, draggedTo),
      itemDragged,
      ...remainingItems.slice(draggedTo)];
    }

    if (draggedTo !== dragAndDrop.draggedTo) {
      setDragAndDrop({
        ...dragAndDrop,
        updatedOrder: newList,
        draggedTo: draggedTo });

    }

  };

  const Drop = () => {

    console.log("ON DROP")

    setItems(dragAndDrop.updatedOrder);

    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: null,
      draggedTo: null,
      isDragging: false });


  };


  const DragLeave = () => {

    console.log("ON DROP LEAVE")

    setDragAndDrop({
      ...dragAndDrop,
      draggedTo: null });
    
  };


  if (items) console.log('FILES', items)

	var list = items.map((item, i) => 
						<li key={i}>
							{typeof item !== 'undefined' && item.path}
						</li>
					)

  return (
    <>
    <div className={styles.container}>

      <div className={styles.dropzonecontainer}>
        <div onDragStart={onDragStart} 
             data-position={0} {...getRootProps({className: styles.dropzone})}>
          <input {...getInputProps()} />
          { typeof items[0] === 'undefined' ?
          <div className={styles.message}>Drag 'n' drop some files here, or click to select files</div>
          :
          <img className={styles.image} src={items[0] && URL.createObjectURL(items[0])}></img>
          }
        </div>
      </div>

      <div className={styles.dropzonecontainer}>
        <div onDragStart={onDragStart} data-position={1} {...getRootProps1({className: styles.dropzone})}>
          <input {...getInputProps1()} />
          { typeof items[1] === 'undefined' ?
          <div className={styles.message}>Drag 'n' drop some files here, or click to select files</div>
          :
          <img className={styles.image} src={URL.createObjectURL(items[1])}></img>
          }
        </div>
      </div>

      <div className={styles.dropzonecontainer}>
        <div onDragStart={onDragStart} data-position={2} {...getRootProps2({className: styles.dropzone})}>
          <input {...getInputProps2()} />
          { typeof items[2] === 'undefined' ?
          <div className={styles.message}>Drag 'n' drop some files here, or click to select files</div>
          :
          <img className={styles.image} src={URL.createObjectURL(items[2])}></img>
          }
        </div>
      </div>

      <div className={styles.dropzonecontainer}>
        <div onDragStart={onDragStart} data-position={3} {...getRootProps3({className: styles.dropzone})}>
          <input {...getInputProps3()} />
          { typeof items[3] === 'undefined' ?
          <div className={styles.message}>Drag 'n' drop some files here, or click to select files</div>
          :
          <img className={styles.image} src={URL.createObjectURL(items[3])}></img>
          }
        </div>
      </div>

    </div>
    <div>
      <ul>
          {list}
      </ul>
    </div>
    </>
  );
}

export default DragnDropZone;