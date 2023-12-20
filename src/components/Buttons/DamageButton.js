import React from "react";
import { Popover, Typography, Button } from "@mui/material";
import { damageRoll } from "../../utils/diceroll";

export default function DamageButton({ manouverName, damage }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [damageRollResult, setDamageRoll] = React.useState(null);

    const handleClick = (event) => {
        rollDamage(damage);
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    
    function rollDamage(diceSet) {
       setDamageRoll(damageRoll(diceSet));
    }

    const open = Boolean(anchorEl);
    const id = open ? manouverName + '-dmg' : undefined;

    return (
        <div>
            <Button 
                variant="outlined" 
                onClick={handleClick}
                aria-describedby={id}
            >
                {damage}
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
                <Typography sx={{ p: 2 }}>{damageRollResult} damage</Typography>
            </Popover>
        </div>
    )
}
