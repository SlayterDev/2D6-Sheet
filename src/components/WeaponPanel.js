import React from "react";
import { Grid, Paper, Stack, Table, TableBody, TableCell, 
    TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import DamageButton from "./DamageButton";
import HitButton from "./HitButton";

export default function StatsPanel({ character }) {

    return (
        <Paper style={{marginBottom: 35}}>
            <Grid container spacing={2} padding={2}>
                <Grid item xs={8}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Typography textAlign="left">
                            Weapon: {character.weapon.name}
                        </Typography>
                        <HitButton />
                    </Stack>
                </Grid>
                <Grid item xs={4}>
                    <Typography>
                        Runes: {character.weapon.runes.length}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Manouver</TableCell>
                                    <TableCell>Dice Set</TableCell>
                                    <TableCell>Modifier</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {character.weapon.manouvers.map((manouver) => (
                                    <TableRow key={manouver.name}>
                                        <TableCell>{manouver.name}</TableCell>
                                        <TableCell>{manouver.diceSet}</TableCell>
                                        <TableCell>
                                            <DamageButton
                                                manouverName={manouver.name}
                                                damage={manouver.damage}
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Paper>
    );
}
