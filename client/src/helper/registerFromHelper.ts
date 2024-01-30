export const extractValuesFromFormData = (formData: FormData) => {
  return {
    username: formData.get("username") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };
};

export const loginRequest = async (body: {
  username: string;
  password: string;
  email: string;
}) => {
  return await fetch("https://chatiee.dev/api/auth/register", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(body),
  });
};
