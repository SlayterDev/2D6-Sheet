import React from "react";
import { Popover, Typography, Button } from "@mui/material";
import { hitRoll } from "../../utils/diceroll";

export default function HitButton() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [hitRollResult, setHitRoll] = React.useState(null);

    const handleClick = (event) => {
        rollHit();
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    
    function rollHit() {
        const hit = hitRoll();
        setHitRoll(`${hit[0]}, ${hit[1]}`);
    }

    const open = Boolean(anchorEl);
    const id = open ? 'hit-roll' : undefined;

    return (
        <div>
            <Button 
                variant="outlined" 
                onClick={handleClick}
                aria-describedby={id}
            >
                Roll Hit
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Typography sx={{ p: 2 }}>{hitRollResult}</Typography>
            </Popover>
        </div>
    )
}
