import { FormControlLabel, Grid } from "@material-ui/core";
import * as React from "react";
import { SjCheckbox } from "sj-component-library";

export default function SjCheckboxes() {
  const [check, setCheck] = React.useState<boolean>(false);
  const handleChange = (_: React.ChangeEvent<{}>, checked: boolean) => {
    setCheck(checked);
  };
  const [check1, setCheck1] = React.useState<boolean>(false);
  const handleChange1 = (_: React.ChangeEvent<{}>, checked: boolean) => {
    setCheck1(checked);
  };
  const [check2, setCheck2] = React.useState<boolean>(false);
  const handleChange2 = (_: React.ChangeEvent<{}>, checked: boolean) => {
    setCheck2(checked);
  };
  return (
    <>
      <FormControlLabel
        checked={check}
        control={<SjCheckbox />}
        label={`Custom SJ style`}
        name="checkbox1"
        onChange={handleChange}
      />
      <FormControlLabel
        checked={check1}
        control={<SjCheckbox color="primary" />}
        label={`Primary custom`}
        name="checkbox2"
        onChange={handleChange1}
      />
      <FormControlLabel
        checked={check2}
        control={<SjCheckbox color="secondary" />}
        label={`Secondary custom`}
        name="checkbox3"
        onChange={handleChange2}
      />
      <Grid container spacing={2}>
        <Grid item xs>check: {check.toString()};</Grid>
        <Grid item xs>check1: {check1.toString()};</Grid>
        <Grid item xs>check2: {check2.toString()};</Grid>
      </Grid>
    </>
  );
}
