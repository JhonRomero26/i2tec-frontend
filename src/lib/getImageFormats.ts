import { ImageResponse } from "@/models";

type ImageFormatsKeys = keyof ImageResponse["data"]["attributes"]["formats"];

export const getImageFormats = (
  data?: ImageResponse,
  format: ImageFormatsKeys = "thumbnail"
) => {
  if (!data) return "";

  const formats = data.data.attributes.formats;
  const image = formats[format]
    ? formats[format].url
    : formats["large"]
    ? formats["large"].url
    : formats["medium"]
    ? formats["medium"].url
    : formats["small"]
    ? formats["small"].url
    : formats["thumbnail"].url;

  return image;
};
