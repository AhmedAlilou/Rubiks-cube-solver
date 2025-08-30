import generateScramble from "../../model/models/scramble/generateScramble";

const getScramble = (length) => {
  return generateScramble(length);
};

export default getScramble;
