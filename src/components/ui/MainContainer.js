import React from "react";
//import { Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

/*const useStyles = makeStyles((theme) => ({
  containerStyle: {
    marginTop: "100px",
    marginBottom: "100px",
  },
}));*/

export default function MainContainer(props) {
  //const styles = useStyles();
  return (
    <React.Fragment>
      <CssBaseline>
        <Container
        //classes={{
        //  root: styles.containerStyle,
        // }}
        >
          {props.children}
        </Container>
      </CssBaseline>
    </React.Fragment>
  );
}
