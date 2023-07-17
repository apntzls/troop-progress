import React from "react";
import {
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  makeStyles,
  TextField,
  Button,
  Typography
} from "@material-ui/core";
import GreenRadio from "./GreenRadio";
import GreenCheckbox from "./GreenCheckbox";
import { useControls } from "../state/useControls";

const useStyles = makeStyles({
  root: {
    "& .row": {
      display: "flex",
      justifyContent: "space-between"
    },
    "& .controls": {
      display: "flex",
      flexDirection: "column",
      marginBottom: "32px"
    },
    "& .counter": {
      display: "flex",
      justifyContent: "center"
    }
  }
});

const Controls = () => {
  const classes = useStyles();
  const {
    hasSiegeRangeSkillBook_offense,
    hasSiegeRangeSkillBook_defense,
    siegeRangeBonus_offense,
    siegeRangeBonus_defense,
    goesFirst_offense,
    goesFirst_defense,
    toggleSiegeRangeSkillBook_offense,
    toggleSiegeRangeSkillBook_defense,
    setSiegeRangeBonus_offense,
    setSiegeRangeBonus_defense,
    toggleGoesFirst_offense,
    toggleGoesFirst_defense,
    hasArcherRangeSkillBook_offense,
    hasArcherRangeSkillBook_defense,
    toggleArcherRangeSkillBook_offense,
    toggleArcherRangeSkillBook_defense,
    hasGroundSpeedSkillBook_offense,
    hasGroundSpeedSkillBook_defense,
    toggleGroundSpeedSkillBook_offense,
    toggleGroundSpeedSkillBook_defense,
    hasMountedSpeedSkillBook_offense,
    hasMountedSpeedSkillBook_defense,
    toggleMountedSpeedSkillBook_offense,
    toggleMountedSpeedSkillBook_defense,
    turn,
    setTurn,
    reset
  } = useControls();

  const handleSiegeRangeBonusChange_offense = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSiegeRangeBonus_offense(Number(event.target.value));
  };

  const handleSiegeRangeBonusChange_defense = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSiegeRangeBonus_defense(Number(event.target.value));
  };

  const handleGoesFirst_offense = () => {
    toggleGoesFirst_offense();
  };

  const handleGoesFirst_defense = () => {
    toggleGoesFirst_defense();
  };

  const handleTurnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const t = Number(event.target.value);
    if (t < 0) return;

    setTurn(t);
  };

  return (
    <div className={classes.root}>
      <div className="row">
        <div className="attack controls">
          <Typography color="secondary">Attacker</Typography>

          <FormControlLabel
            control={
              <GreenCheckbox
                checked={hasMountedSpeedSkillBook_offense}
                onChange={toggleMountedSpeedSkillBook_offense}
              />
            }
            label="Has mounted speed skill book?"
          />

          <FormControlLabel
            control={
              <GreenCheckbox
                checked={hasGroundSpeedSkillBook_offense}
                onChange={toggleGroundSpeedSkillBook_offense}
              />
            }
            label="Has ground speed skill book?"
          />

          <FormControlLabel
            control={
              <GreenCheckbox
                checked={hasArcherRangeSkillBook_offense}
                onChange={toggleArcherRangeSkillBook_offense}
              />
            }
            label="Has archer range skill book?"
          />

          <FormControlLabel
            control={
              <GreenCheckbox
                checked={hasSiegeRangeSkillBook_offense}
                onChange={toggleSiegeRangeSkillBook_offense}
              />
            }
            label="Has siege range skill book?"
          />

          <FormControl component="fieldset">
            <FormLabel component="legend">Siege Range Bonus</FormLabel>
            <RadioGroup
              value={String(siegeRangeBonus_offense)}
              onChange={handleSiegeRangeBonusChange_offense}
            >
              <FormControlLabel
                value="1"
                control={<GreenRadio />}
                label="None"
              />
              <FormControlLabel
                value="1.1"
                control={<GreenRadio />}
                label="10%"
              />
              <FormControlLabel
                value="1.15"
                control={<GreenRadio />}
                label="15%"
              />
            </RadioGroup>
          </FormControl>

          <FormControlLabel
            control={
              <GreenCheckbox
                checked={goesFirst_offense}
                onChange={handleGoesFirst_offense}
              />
            }
            label="Goes first?"
          />
        </div>

        <div className="defense controls">
          <Typography color="primary" style={{ textAlign: "end" }}>
            Defender
          </Typography>

          <FormControlLabel
            labelPlacement="start"
            control={
              <GreenCheckbox
                checked={hasMountedSpeedSkillBook_defense}
                onChange={toggleMountedSpeedSkillBook_defense}
              />
            }
            label="Has mounted speed skill book?"
          />

          <FormControlLabel
            labelPlacement="start"
            control={
              <GreenCheckbox
                checked={hasGroundSpeedSkillBook_defense}
                onChange={toggleGroundSpeedSkillBook_defense}
              />
            }
            label="Has ground speed skill book?"
          />

          <FormControlLabel
            labelPlacement="start"
            control={
              <GreenCheckbox
                checked={hasArcherRangeSkillBook_defense}
                onChange={toggleArcherRangeSkillBook_defense}
              />
            }
            label="Has archer range skill book?"
          />

          <FormControlLabel
            labelPlacement="start"
            control={
              <GreenCheckbox
                checked={hasSiegeRangeSkillBook_defense}
                onChange={toggleSiegeRangeSkillBook_defense}
              />
            }
            label="Has siege range skill book?"
          />

          <FormControl component="fieldset">
            <FormLabel
              style={{ textAlign: "end", width: "100%" }}
              component="legend"
            >
              Siege Range Bonus
            </FormLabel>
            <RadioGroup
              value={String(siegeRangeBonus_defense)}
              onChange={handleSiegeRangeBonusChange_defense}
            >
              <FormControlLabel
                labelPlacement="start"
                value="1"
                control={<GreenRadio />}
                label="None"
              />
              <FormControlLabel
                labelPlacement="start"
                value="1.1"
                control={<GreenRadio />}
                label="10%"
              />
              <FormControlLabel
                labelPlacement="start"
                value="1.15"
                control={<GreenRadio />}
                label="15%"
              />
            </RadioGroup>

            <FormControlLabel
              labelPlacement="start"
              control={
                <GreenCheckbox
                  checked={goesFirst_defense}
                  onChange={handleGoesFirst_defense}
                />
              }
              label="Goes first?"
            />
          </FormControl>
        </div>
      </div>

      <div className="counter">
        <TextField
          label="Turn"
          variant="outlined"
          type="number"
          size="small"
          style={{ width: "80px", marginRight: "16px" }}
          value={turn}
          onChange={handleTurnChange}
          InputLabelProps={{ shrink: true }}
        />

        <Button variant="outlined" color="secondary" onClick={reset}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Controls;
