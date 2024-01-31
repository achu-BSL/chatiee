export const extractValuesFromFormData = (formData: FormData) => {
  return {
    username: formData.get("username") as string,
    password: formData.get("password") as string,
  };
};

export const loginRequest = async (body: {
  username: string;
  password: string;
}) => {
  return await fetch("https://chatiee.dev/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    credentials: "include",
  });
};
