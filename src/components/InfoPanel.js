import React from "react";
import { Grid, LinearProgress, Paper, Typography } from "@mui/material";

export default function InfoPanel({ character }) {

    return (
        <Paper style={{marginBottom: 35}}>
            <Grid container spacing={2} padding={2}>
                <Grid item xs={8}>
                    <Typography align="left">
                        {character.name}
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography>Level: {character.level}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography align="left">
                        HP: {character.hitPoints.current} / {character.hitPoints.baseLine}
                    </Typography>
                    <LinearProgress 
                        variant="determinate" 
                        value={character.hitPoints.current / character.hitPoints.baseLine * 100} 
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography align="left">
                        XP: {character.experience.current} / {character.experience.nextLevel}
                    </Typography>
                    <LinearProgress 
                        variant="determinate" 
                        value={character.experience.current / character.experience.nextLevel * 100} 
                    />
                </Grid>
            </Grid>
        </Paper>
    );
}
