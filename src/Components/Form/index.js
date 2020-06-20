import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  console.log(props)
  return (
    <> {
      props.buttonProps != null &&
      <>
        <Button {...props.buttonProps} onClick={handleClickOpen}>
          {props.buttonProps != null ? props.buttonProps.text : ''}
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">
            {props.tier.formHeader}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              {props.tier.formDescription}
            </DialogContentText>
            <TextField
              autoFocus
              id="name"
              label="Zapytanie"
              type="description"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
            />
            <div className={props.classes.formUserContact}>
              <TextField
                margin="dense"
                id="email"
                label="Twój adres email"
                type="email"
                fullWidth
                variant="outlined"
              />
              <div className={props.classes.formUserSpacer}>

              lub / i

              </div>
              <TextField
                margin="dense"
                id="phone"
                label="Twój numer telefonu"
                type="tel"
                fullWidth
                variant="outlined"
              />


            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Anuluj
          </Button>
            <Button onClick={handleClose} color="primary">
              Wyślij
          </Button>
          </DialogActions>
        </Dialog>
      </>

    }
    </>
  );
}