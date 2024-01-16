import { memo } from "react";
import Button from "@mui/material/Button";

const ButtonComponent = ({ color, children, onClick }) => {
  return (
    <Button
      type="submit"
      variant="outlined"
      color={color}
      onClick={onClick}
      sx={{
        marginTop: "10px",
        width: "100%",
        color: "black",
        backgroundColor: '#a251a8',
        ':hover': {
          backgroundColor: 'main',
        }
      }}>
      {children}
    </Button>
  );
};

export default memo(ButtonComponent);
