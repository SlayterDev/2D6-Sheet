import React from "react";
import { Grid, Paper, Stack, Table, TableBody, TableCell, 
    TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import CastButton from "./Buttons/CastButton";

export default function ScrollsPanel({ character }) {

    return (
        <Paper style={{marginBottom: 35}}>
            <Grid container spacing={2} padding={2}>
                <Grid item xs={12}>
                    <Typography textAlign="left" variant="h5">Scrolls</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Scroll</TableCell>
                                    <TableCell>Orbit</TableCell>
                                    <TableCell>Dispel Doubles</TableCell>
                                    <TableCell>Effect Modifier</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {character.scrolls.map((scroll) => (
                                    <TableRow key={scroll.name}>
                                        <TableCell>
                                            <Stack direction="row" spacing={2} alignItems="center">
                                                <Typography textAlign="left" width="100%">
                                                    {scroll.name}
                                                </Typography>
                                                <CastButton dispelDoubles={scroll.dispelDoubles} />
                                            </Stack>
                                        </TableCell>
                                        <TableCell>
                                            <Typography>
                                                {scroll.orbit}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography>
                                                {scroll.dispelDoubles || ''}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography>
                                                {scroll.effect}
                                            </Typography>
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
