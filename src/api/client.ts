import { createClient, type ErrorResponse, type Photos } from "pexels";

const apiKey = import.meta.env.API_KEY;

const client = createClient(apiKey);

export const fetchImages = async () =>
  client.photos.curated({ per_page: 10, page: 1 });

export const isErrorResponse = (
  res: Photos | ErrorResponse
): res is ErrorResponse => {
  return (res as ErrorResponse).error !== undefined;
};
