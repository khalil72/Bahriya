import MuiAlert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import MuiSnackbar from "@mui/material/Snackbar";
import React from "react";

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

const Alert = React.forwardRef<HTMLDivElement>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const Snackbar = ({
  open,
  handleClose,
  message,
  severity,
}) => {
  const closeSnackbar = (
    event,
    reason
  ) => {
    if (reason === "clickaway") {
      return;
    }
    handleClose();
  };

  return (
    <MuiSnackbar
      open={open}
      autoHideDuration={4500}
      onClose={closeSnackbar}
      TransitionComponent={TransitionLeft}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      key={"from-left-snackbar"}
    >
      <Alert
        onClose={closeSnackbar}
        severity={severity === "error" ? "error" : "success"}
      >
        {message}
      </Alert>
    </MuiSnackbar>
  );
};

export default Snackbar;
