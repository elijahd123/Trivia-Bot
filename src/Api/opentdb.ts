import axios, { AxiosResponse } from 'axios';
import { OpenTDBQuestions, QuestionType } from '../Types/types';

const baseURL = 'https://opentdb.com/api.php';
const defaultParams = { amount: 10 };
const opentdbInstance = axios.create({ baseURL, params: defaultParams });

type OpenTDBResponse = { results: Array<OpenTDBQuestions> };

const getResultsFromResponse = (
  response: AxiosResponse<OpenTDBResponse, any>
) => response.data.results;

const getQuestionsFromAPI = async (questionType: QuestionType) => {
  const response = await opentdbInstance.get<OpenTDBResponse>('', {
    params: { type: questionType },
  });
  return getResultsFromResponse(response);
};

export const getMultipleChoice = () => getQuestionsFromAPI('multiple');

export const getTrueFalse = () => getQuestionsFromAPI('boolean');
