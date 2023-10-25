import { BACKEND_URL } from "@/lib/constants";
import type { ResponseAPI } from "@/models";

export const fecthBackendAPI = <T>(
  endpoint: string,
  params?: string[],
  options?: RequestInit
): Promise<ResponseAPI<T>> => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), 5000);
  const url = new URL(`${BACKEND_URL}/api${endpoint}`);
  if (params) {
    Object.entries(params).map(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }
  const requestURL = url.toString();

  return fetch(requestURL, { signal: controller.signal, ...options })
    .then((res) => {
      if (!res.ok) throw new Error(res.statusText);
      console.log("Request:", requestURL);
      return res.json();
    })
    .catch((err) => {
      console.error("RequestError:", err);
      console.log();
    })
    .finally(() => clearTimeout(id));
};
