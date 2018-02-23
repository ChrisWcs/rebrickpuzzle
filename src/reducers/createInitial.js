const createInitial = () => ({
    playerPosition: {
        x: 0,
        y: 0,
    },
    mapMatrix: [
        ["p", "f", "f"],
        ["f", "f", "f"],
        ["f", "f", "f"],
    ],
});

export default createInitial;