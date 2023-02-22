const getQuestions = async (type) => {
  const response = await axios(`https://opentdb.com/api.php?amount=10&type=${type}`)
  return response.data.results;
}

export const getMultipleChoice = async () => {
  return getQuestions("multiple")
}

export const getTrueFalse = async () => {
  return getQuestions("boolean")
}