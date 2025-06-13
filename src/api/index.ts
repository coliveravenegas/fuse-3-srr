import { delayP } from "ramda-adjunct";
import axios from "axios";

const SAVE_DELAY = 2000;

// This function was missing "return" statement, so I added it
export const getPostById = (id: string) => async () => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
};

// This function was missing "return" statement, so I added it
export const getUserById = (id: number) => async () => {
  return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
};

// This function was missing "return" statement, so I added it
export const getCommentsByPostId = (id: number) => async () => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
};

export const updatePost = async (id: string, payload: any) => {
  await delayP(SAVE_DELAY);
  console.log("saved!", id, payload);
};

export const updateUser = async (id: string, payload: any) => {
  await delayP(SAVE_DELAY);
  console.log("saved!", id, payload);
};

export const updateComment = async (id: string, payload: any) => {
  await delayP(SAVE_DELAY);
  console.log("saved!", id, payload);
};
