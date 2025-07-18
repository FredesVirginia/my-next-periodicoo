import { useMutation } from "@tanstack/react-query";
import { IReqLogin } from "./IReqLogin";
import { loginRequest } from "./request";



export const useLogin = () => {
  const mutationLogin = useMutation({
    mutationKey: ["login"],
    mutationFn: (data: IReqLogin) => loginRequest(data)
  });

  return {
    mutationLogin
  }
};
