import { parseEntities } from 'parse-entities';
import { OpenTDBQuestions } from '../Types/types';

export const getContentAndCorrectAnswerIndex = (
  triviaRound: OpenTDBQuestions
) => {
  let answerIndex = 0;
  const answers: Array<string> = [];
  if (triviaRound.type === 'boolean') {
    answerIndex = triviaRound.correct_answer === 'True' ? 0 : 1;
  } else {
    answerIndex = Math.floor(Math.random() * 4);
    answers.push(...triviaRound.incorrect_answers);
    answers.splice(answerIndex, 0, triviaRound.correct_answer);
  }

  const displayAnswers = answers
    .map(
      (answer, index) =>
        `${String.fromCharCode(index + 65)}. ${parseEntities(answer)}`
    )
    .join('\n');

  const parsedQuestion = parseEntities(triviaRound.question);
  const questionContent = `${parsedQuestion}\n${displayAnswers}`;

  let displayAnswersWithCorrectAnswer = '';

  if (triviaRound.type === 'boolean') {
    displayAnswersWithCorrectAnswer = `**${triviaRound.correct_answer}**`;
  } else {
    displayAnswersWithCorrectAnswer = answers
      .map((answer, index) => {
        const letter = String.fromCharCode(index + 65);
        const parsedAnswer = parseEntities(answer);
        const answerText = `${letter}. ${parsedAnswer}`;
        if (answerIndex !== index) {
          return answerText;
        }
        return `**${answerText}**`;
      })
      .join('\n');
  }

  const generateUpdatedQuestionContent = (correctMessage: string) =>
    `${parsedQuestion}\n${displayAnswersWithCorrectAnswer}\n${correctMessage}`;

  return {
    questionContent,
    generateUpdatedQuestionContent,
    answerIndex: answerIndex.toString(),
  };
};
