import { fecthBackendAPI } from "@/lib/fetchBackendAPI"
import type { ContactPhone, ContactEmail } from "@/models"

export const getContactPhone = async (): Promise<ContactPhone> => {
  const { data } = await fecthBackendAPI<ContactPhone>("/contact-phone")
  return data!
}

export const getContactEmail = async (): Promise<ContactEmail> => {
  const { data } = await fecthBackendAPI<ContactEmail>("/contact-email")
  return data!
}
