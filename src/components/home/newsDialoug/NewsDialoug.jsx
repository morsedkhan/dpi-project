import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});




 function NewsDialoug(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div  onClick={handleClickOpen}>
        {props.children}
      </div>
      <Dialog label="Full width" onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        {props.children}
      </Dialog>
    </>
  );
}
export default NewsDialoug