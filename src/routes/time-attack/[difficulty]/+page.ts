import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
 
export const load: PageLoad = ({ params }) => {
  if (params.difficulty === 'easy') {
    return {difficulty:"easy"};
  } else if (params.difficulty === 'medium') {
    return {difficulty:"medium"};
  } else if (params.difficulty === 'hard') {
    return {difficulty:"hard"};
  } 
 
  throw error(404, 'Not found');
};