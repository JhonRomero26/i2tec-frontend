import { useState } from "preact/hooks";
import { getTeacherAttributes } from "@/lib/getTeacherAttributes";
import TeacherDetailSection from "@/components/preact/TeacherDetailSection";
import CardTeacher from "@/components/preact/CardTeacher";
import type { Teacher } from "@/models";
import { BACKEND_URL } from "@/lib/constants";

export type TeachersDetailInteractivityProps = {
  teachers: Teacher[];
};

export default function TeachersDetailInteractivity({
  teachers,
}: TeachersDetailInteractivityProps) {
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | undefined>(
    teachers.length > 0 ? teachers[0] : undefined
  );

  const handleClick = (id: number) => {
    window.scroll({ top: 100 });
    if (selectedTeacher !== undefined && selectedTeacher.id === id) return;
    const teacher = teachers.find((teacher) => teacher.id === id);

    if (teacher !== undefined) {
      setSelectedTeacher(teacher);
    }
  };

  return (
    <>
      <section className="py-32 bg-primary text-white bg-svg-architect">
        <div className="container">
          {selectedTeacher ? (
            (() => {
              const { fullName, avatar, biography } =
                getTeacherAttributes(selectedTeacher);
              return (
                <TeacherDetailSection
                  name={fullName}
                  image={`${BACKEND_URL}${avatar?.data.attributes.formats.medium.url}`}
                  summary={biography}
                />
              );
            })()
          ) : (
            <div className="text-center text-2xl font-bold">
              No tenemos docentes por el momento
            </div>
          )}
        </div>
      </section>
      <section className="section pt-40">
        <div className="container">
          <h1 className="mb-32 text-center text-4xl font-bold">
            Nuestros docentes
          </h1>
        </div>
        <div className="container">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
            {teachers.length > 0 &&
              teachers.map((teacher) => {
                const { fullName, avatar } = getTeacherAttributes(teacher);

                return (
                  <CardTeacher
                    className="cursor-pointer"
                    onClick={() => handleClick(teacher.id)}
                    image={
                      avatar
                        ? `${BACKEND_URL}${avatar.data.attributes.formats.small.url}`
                        : ""
                    }
                    name={fullName}
                  />
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}
