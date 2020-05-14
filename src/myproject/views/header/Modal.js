import React from 'react';
import Dialog from '@material-ui/core/Dialog';


export default function SimpleDialogDemo(props) {

  
    return (
      <div>
    <Dialog onClose={props.handleClose} aria-labelledby="simple-dialog-title" open={props.open}>
        {props.title}
    </Dialog>      
      </div>
    );
  }