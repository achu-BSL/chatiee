import {
  extractValuesFromFormData,
  registerRequest,
} from "@/helper/registerFromHelper";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export const useRegisterForm = () => {
  const router = useRouter();

  const formSumbmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const body = extractValuesFromFormData(formData);

    const res = await registerRequest(body);
    if (res.ok) {
      router.push("/login");
    } else {
      console.log("Error try again later.");
    }
  };

  return {
    formSumbmitHandler,
  };
};
