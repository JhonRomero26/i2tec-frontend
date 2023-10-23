export type TeacherDetailProps = {
  name: string;
  image: string;
  summary: string;
};

export default function TeacherDetailSection({
  name,
  image,
  summary,
}: TeacherDetailProps) {
  return (
    <div className="isolate mx-auto grid w-full max-w-screen-xl gap-8 bg-white/25 p-12 shadow backdrop-blur lg:grid-cols-[0.5fr_1fr]">
      <div className="flex lg:flex-col lg:justify-normal justify-center">
        <picture className="h-96 relative block ml-12 mt-12 aspect-[3/4] lg:h-min before:absolute before:bottom-12 before:right-12 before:z-[-1] before:h-full before:w-full before:border-8 before:border-solid before:border-primary before:content-['']">
          <img
            loading="lazy"
            className="w-full h-full object-cover object-center"
            src={image}
            alt={name}
          />
        </picture>
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-3xl lg:text-4xl font-bold">{name}</div>
        <div className="leading-relaxed text-lg">{summary}</div>
      </div>
    </div>
  );
}
