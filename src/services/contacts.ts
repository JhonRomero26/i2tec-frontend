import { fecthBackendAPI } from "@/lib/fetchBackendAPI";
import type { ContactPhone, ContactEmail } from "@/models";

export const getContactPhone = async () =>
  await fecthBackendAPI<ContactPhone>("/contact-phone");

export const getContactEmail = async () =>
  await fecthBackendAPI<ContactEmail>("/contact-email");
