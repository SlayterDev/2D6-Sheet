export function damageRoll(damage) {
    const components = damage.toLowerCase().split("+");
    const modifier = parseInt(components[1]);
    const numDice = parseInt(components[0].split("d")[0]);

    let dmg = 0;
    for (let i = 0; i < numDice; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        dmg += roll;
    }

    return dmg + modifier;
}

export function hitRoll() {
    // Roll 2d6
    return [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1]
}
