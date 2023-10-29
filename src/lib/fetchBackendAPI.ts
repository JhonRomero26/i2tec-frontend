import { BACKEND_URL } from "@/lib/constants";
import type { ResponseAPI } from "@/models";

export const fecthBackendAPI = <T>(
  url: string,
  params?: string[],
  options?: RequestInit
): Promise<ResponseAPI<T>> => {
  const requestURL = BACKEND_URL.concat(
    "/api",
    url,
    params ? `?${params.join("&")}` : ""
  );

  console.log({ requestURL });

  return fetch(requestURL, options)
    .then((res) => {
      if (!res.ok) throw new Error(res.statusText);
      console.log("Request:", requestURL);
      return res.json();
    })
    .catch((err) => {
      console.error(err);
    });
};
