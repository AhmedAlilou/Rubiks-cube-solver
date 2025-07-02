function getInitialCubies() {
  const cubies = [];
  let counter = 0;
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        // Skip the core (0,0,0)
        if (x === 0 && y === 0 && z === 0) continue;

        // Determine face colors for this cubie
        let colours = {
          right: null,
          left: null,
          top: null,
          down: null,
          front: null,
          back: null
        };

        if (x === 1) colours.right = "red";
        if (x === -1) colours.left = "#FF4D00"; // orange
        if (y === 1) colours.top = "white";
        if (y === -1) colours.down = "#FFD000";
        if (z === 1) colours.front = "#008000"; // green
        if (z === -1) colours.back = "blue";

        cubies.push({
          position: [x, y, z],
          colours,
          id: counter
        });
        counter++;
      }
    }
  }
  console.log("Cubies store initialized with", cubies);
  return cubies;
}

export default getInitialCubies;
