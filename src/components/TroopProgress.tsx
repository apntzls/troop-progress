import React from "react";
import { makeStyles, Typography, LinearProgress } from "@material-ui/core";
import { useControls } from "../state/useControls";

const useStyles = makeStyles({
  root: {
    marginTop: "8px",
    "& .bar": {
      height: "10px"
    },
    "& .remove-dashed-animation": {
      display: "none"
    },
    "& .rotate": {
      transform: "rotate(180deg)"
    }
  }
});

const normalise = (value: number, max: number) => (value * 100) / max;

const TroopProgress = (props: {
  label: string;
  range_offense: number;
  speed_offense: number;
  range_defense: number;
  speed_defense: number;
  maxRange: number;
}) => {
  const classes = useStyles();
  const {
    label,
    range_offense,
    speed_offense,
    range_defense,
    speed_defense,
    maxRange
  } = props;

  const { turn, goesFirst_defense, goesFirst_offense } = useControls();

  const getTurn = (goesFirst: boolean) => {
    if (turn === 0) return 0;
    if (goesFirst_offense === goesFirst_defense) return turn;
    return goesFirst ? Math.ceil(turn / 2) : turn - Math.ceil(turn / 2);
  };

  const turn_offense = getTurn(goesFirst_offense);
  const turn_defense = getTurn(goesFirst_defense);

  const offensiveAdvance = speed_offense * turn_offense;
  const defensiveAdvnance = speed_defense * turn_defense;

  const value_offense = normalise(
    offensiveAdvance < maxRange ? offensiveAdvance : maxRange,
    maxRange
  );
  const value_defense = normalise(
    defensiveAdvnance < maxRange ? defensiveAdvnance : maxRange,
    maxRange
  );

  const acc_offense = range_offense + turn_offense * speed_offense;
  const acc_defense = range_defense + turn_defense * speed_defense;

  const buffer_offense = normalise(
    acc_offense < maxRange ? acc_offense : maxRange,
    maxRange
  );
  const buffer_defense = normalise(
    acc_defense < maxRange ? acc_defense : maxRange,
    maxRange
  );

  const pos_offense =
    maxRange - turn_offense * speed_offense < 0
      ? 0
      : maxRange - turn_offense * speed_offense;
  const pos_defense =
    turn_defense * speed_defense > maxRange
      ? maxRange
      : turn_defense * speed_defense;

  const reach_coords_offense =
    pos_offense - range_offense < 0 ? 0 : pos_offense - range_offense;
  const reach_coords_defense =
    pos_defense + range_defense > maxRange
      ? maxRange
      : pos_defense + range_defense;

  return (
    <div className={classes.root}>
      <Typography
        style={{ fontSize: "12px" }}
      >{`${label}: (Att) [ Pos: ${pos_offense.toFixed(
        1
      )}, Range: ${range_offense.toFixed(
        1
      )}, Reach: ${reach_coords_offense.toFixed(
        1
      )} ] (Def) [ Pos: ${pos_defense.toFixed(
        1
      )}, Range: ${range_defense.toFixed(
        1
      )}, Reach: ${reach_coords_defense.toFixed(1)} ]`}</Typography>

      <LinearProgress
        color="secondary"
        classes={{ root: "bar", dashed: "remove-dashed-animation" }}
        variant="buffer"
        value={value_offense}
        valueBuffer={buffer_offense}
      />

      <LinearProgress
        className="rotate"
        classes={{ root: "bar", dashed: "remove-dashed-animation" }}
        variant="buffer"
        value={value_defense}
        valueBuffer={buffer_defense}
      />
    </div>
  );
};

export default TroopProgress;
