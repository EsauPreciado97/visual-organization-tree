import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import "./modals.css";
import user from '../../assets/user 3.png'


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    height: 500,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Modal5() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
        <div className={"modal-alignment"}>
            <img className={"modal-img"} src={user} alt={"user profile"} />
            <p className={"name"}>Zachariah Brooke</p>
            <p className={"position"}>Software Developer</p>
            <p className={"id"}>JD-123456</p>
            <p className={"mail"}>zachariah.brooke@beliveo.com</p>
            <p className={"tel"}>+52 444 444 4444</p>
        </div>
    </div>
  );

  return (
    <div>
      <Button variant="contained" color="primary" size="small" onClick={handleOpen}>
        Contact Information
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}