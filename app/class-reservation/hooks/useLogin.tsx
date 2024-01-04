import axios from "axios";
import { useQuery } from "react-query";

const useLogin = () => {
  return useQuery<any, any, any, any>({
    queryKey: ["login"],
    queryFn: axios
      .post(
        "https://dev.hamyarzaban.com/api/v1/general/Auth/SendOtp",
        {},
        {
          params: {
            phoneNumber: "09392673221",
          },
        }
      )
      .then((res) => res.data),
    retry: 1,
  });
};
export default useLogin;
