import React from "react";
import { FormControlLabel, FormGroup } from "@material-ui/core";
import { SjSwitch } from "sj-component-library";

export default function () {
  return (
    <FormGroup row style={{ margin: "20px 40px" }}>
      <FormControlLabel
        control={
          <SjSwitch
            color="default"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              console.log(e)
            }
          />
        }
        label="Default Color"
      />
      <FormControlLabel
        control={
          <SjSwitch
            color="primary"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              console.log(e)
            }
          />
        }
        label="Primary Color"
      />
      <FormControlLabel
        control={
          <SjSwitch
            color="secondary"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              console.log(e)
            }
          />
        }
        label="Secondary Color"
      />
      <FormControlLabel
        control={
          <SjSwitch
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              console.log(e)
            }
            disabled
          />
        }
        label="Disabled"
      />
    </FormGroup>
  );
}
