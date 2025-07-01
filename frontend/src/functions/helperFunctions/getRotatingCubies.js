const getRotatingCubies = (cubies, axis, layerValue) => {
  const axisIndex = { x: 0, y: 1, z: 2 }[axis];
  return cubies.filter((cubie) => cubie.position[axisIndex] === layerValue);
};

export default getRotatingCubies;
