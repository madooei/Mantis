import { Button } from "@mui/material";

function OtherLogin() {
  return (
    <Button
      variant="outlined"
      color="primary"
      fullWidth={true}
      onClick={() => console.log("JHU SSO")}
    >
      JHU SSO
    </Button>
  );
}

export default OtherLogin;
