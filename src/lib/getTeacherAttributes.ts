import type { Teacher, Title } from "@/models";

export const rawTitles = (titles: Title[] | undefined) =>
  titles && titles.length > 0
    ? titles.map(({ attributes }) => attributes.title).join(" ")
    : "";

export const getTeacherAttributes = (teacher: Teacher) => {
  const {
    person: {
      data: {
        attributes: {
          first_name,
          last_name,
          avatar,
          prefix_titles,
          suffix_titles,
        },
      },
    },
    biography,
  } = teacher.attributes;

  const prefixes = rawTitles(prefix_titles?.data);
  const suffixes = rawTitles(suffix_titles?.data);

  const fullName = `${
    prefixes ? `${prefixes} ` : ""
  }${first_name} ${last_name}${suffixes}${suffixes ? ` ${suffixes}` : ""}`;

  return { fullName, biography, avatar };
};
