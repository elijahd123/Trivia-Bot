import {
  ActionRowBuilder,
  ButtonStyle,
  ButtonBuilder,
  ComponentType,
} from 'discord.js';

const createAnswerButtons = (answers: Array<string>): ActionRowBuilder<any> => {
  const answerButtons = answers.map((answer, index) =>
    new ButtonBuilder()
      .setCustomId(index.toString())
      .setLabel(answer)
      .setStyle(ButtonStyle.Primary)
  );
  return new ActionRowBuilder({
    components: [...answerButtons],
    type: ComponentType.Button,
  });
};

export const createTrueFalseAnswerButtons = () => {
  const trueFalseAnswers = ['True', 'False'];
  return createAnswerButtons(trueFalseAnswers);
};

export const createMulitpleChoiceAnswerButtons = () => {
  const mulitpleChoiceAnswers = ['A', 'B', 'C', 'D'];
  return createAnswerButtons(mulitpleChoiceAnswers);
};
