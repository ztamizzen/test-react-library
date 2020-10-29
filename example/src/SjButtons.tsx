import React from "react";
import {
  createStyles,
  FormGroup,
  Grid,
  makeStyles,
  Theme,
} from "@material-ui/core";
import { NavigateNext } from "@material-ui/icons";
import { SjButton } from "sj-component-library";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    group: {
      margin: theme.spacing(4),
    },
    paper: {
      textAlign: "center",
    },
  })
);

export default function () {
  const classes = useStyles();

  return (
    <FormGroup row className={classes.group}>
      <Grid container spacing={1}>
        <Grid item xs className={classes.paper}>
          <SjButton color="primary">Köp biljett</SjButton>
        </Grid>
        <Grid item xs className={classes.paper}>
          <SjButton>
            SJs räkmacka
            <NavigateNext />
          </SjButton>
        </Grid>
        <Grid item xs className={classes.paper}>
          <SjButton>Knapp 3</SjButton>
        </Grid>
      </Grid>
    </FormGroup>
  );
}
