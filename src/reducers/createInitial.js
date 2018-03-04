const createInitial = () => ({
    playerPosition: {
        r: 0,
        c: 0,
    },
    mapMatrix: [
        ["p", "f", "f"],
        ["f", "f", "f"],
        ["f", "f", "f"],
    ],
});

export default createInitial;