type CardTeacherProps = {
  name: string;
  image: string;
  prefix?: string;
  className?: string;
  onClick?: () => void;
};

export default function CardTeacher({
  name,
  image,
  onClick,
  className,
}: CardTeacherProps) {
  return (
    <div
      className={`flex flex-col gap-2 ${className ? className : ""}`}
      onClick={onClick}
    >
      <picture className="relative aspect-[3/4] overflow-hidden w-full h-full">
        <img
          loading="lazy"
          className="w-full h-full object-cover object-center"
          alt={name}
          src={image}
        />
      </picture>
      <div className="text-center">{name}</div>
    </div>
  );
}
