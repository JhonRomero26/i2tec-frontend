import type { ImageResponse } from "@/models"

type ImageFormatsKeys = keyof ImageResponse["formats"];

export const getImageFormats = (
  data?: ImageResponse,
  format: ImageFormatsKeys = "thumbnail"
) => {
  if (!data) return ""

  const { formats } = data
  const image = formats[format]
    ? formats[format].url
    : formats["large"]
      ? formats["large"].url
      : formats["medium"]
        ? formats["medium"].url
        : formats["small"]
          ? formats["small"].url
          : format != "thumbnail"
            ? data.url
            : formats["thumbnail"].url

  return image
}
