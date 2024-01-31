import {
  extractValuesFromFormData,
  loginRequest,
} from "@/helper/loginFormHelper";
import { useUser } from "@/store/useUser";
import { useRouter } from "next/router";
import { FormEvent } from "react";

export const useLoginForm = () => {
  const updateUser = useUser((state) => state.updateUser);
  const router = useRouter();

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const body = extractValuesFromFormData(formData);

    const response = await loginRequest(body);

    if (response.ok) {
      const data = (await response.json()) as {
        data: { username: string; token: string };
      };
      updateUser(data.data);
      router.push("/");
    } else {
      console.log("ERR");
      console.log(await response.json());
    }
  };

  return {
    submitHandler,
  };
};
