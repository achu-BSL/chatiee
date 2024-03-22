export const extractBearerToken = (bearer: string) => {
  return bearer.split(" ")[1];
};
