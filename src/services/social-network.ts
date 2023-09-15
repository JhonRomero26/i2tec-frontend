import { fecthBackendAPI } from "@/lib/fetchBackendAPI"
import type { SocialNetwork } from "@/models"

export const getSocialNetworks = async () => await fecthBackendAPI<SocialNetwork[]>("/social-networks")