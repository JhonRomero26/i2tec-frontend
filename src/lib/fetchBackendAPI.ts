import { BACKEND_URL } from "@/lib/constants";
import type { ResponseAPI } from "@/models";

export const fecthBackendAPI = <T>(
  url: string,
  params?: string[],
  options?: RequestInit
): Promise<ResponseAPI<T>> => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), 5000);
  const requestURL = BACKEND_URL.concat(
    "/api",
    url,
    params ? `?${params.join("&")}` : ""
  );
  return fetch(requestURL, { signal: controller.signal, ...options })
    .then((res) => {
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    })
    .catch((err) => {
      console.error("RequestError:", err);
    })
    .finally(() => clearTimeout(id));
};
