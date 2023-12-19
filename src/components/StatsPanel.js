import React from "react";
import { Grid, Paper, Typography } from "@mui/material";

export default function StatsPanel({ character }) {

    return (
        <Paper style={{marginBottom: 35}}>
            <Grid container spacing={2} padding={2}>
                <Grid item xs={4}>
                    <Typography>
                        Shift: +{character.stats.shift}
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography>
                        Discipline: +{character.stats.discipline}
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography>
                        Precision: +{character.stats.precision}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    );
}
