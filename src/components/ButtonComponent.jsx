// ButtonComponent.jsx
import { memo } from "react";
import Button from "@mui/material/Button";

const ButtonComponent = ({ color, children, onClick, disabled }) => {
  return (
    <Button
      type="submit"
      variant="outlined"
      color={color}
      onClick={onClick}
      disabled={disabled} 
      sx={{
        marginTop: "10px",
        width: "100%",
        color: "black",
        backgroundColor: '#5096be',
        ':hover': {
          backgroundColor: 'main',
        }
      }}>
      {children}
    </Button>
  );
};

export default memo(ButtonComponent);
