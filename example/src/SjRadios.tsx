import React, { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  RadioGroup,
} from "@material-ui/core";
import { SjRadio } from "sj-component-library";

export default function SjRadios() {
  const [direction, setDirection] = useState<string>("avresa");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDirection(event.target.value);
  };

  return (
    <FormControl style={{ margin: "20px 40px" }}>
      <RadioGroup
        row
        aria-label="Travel direction"
        name="direction"
        value={direction}
        onChange={handleChange}
      >
        <FormControlLabel
          value="avresa"
          label="Avresa (default)"
          control={<SjRadio color="default" />}
        />
        <FormControlLabel
          value="ankomst"
          label="Ankomst (secondary)"
          control={<SjRadio color="secondary" />}
        />
        <FormControlLabel
          value="returngrön"
          label="Grön (primary)"
          control={<SjRadio color="primary" />}
        />
        <FormControlLabel
          value="returntrip"
          label="Återresa (disabled)"
          control={<SjRadio />}
          disabled
        />
      </RadioGroup>
    </FormControl>
  );
}
