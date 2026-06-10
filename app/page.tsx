import Sidebar from "@/components/Sidebar";
import HeroCard from "@/components/HeroCard";
import CourseCard from "@/components/CourseCard";
import ActivityCard from "@/components/ActivityCard";

export default function Home() {
  const courses = [
    {
      id: 1,
      title: "Advanced React Patterns",
      progress: 75,
    },
    {
      id: 2,
      title: "Next.js Mastery",
      progress: 60,
    },
    {
      id: 3,
      title: "TypeScript Pro",
      progress: 90,
    },
    {
      id: 4,
      title: "Database Design",
      progress: 40,
    },
    {
      id: 5,
      title: "Node.js Backend",
      progress: 85,
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="grid lg:grid-cols-4 gap-6">
        <Sidebar />

        <section className="lg:col-span-3">
          <div className="grid md:grid-cols-2 gap-6">
            <HeroCard />

            {courses.map((course) => (
              <CourseCard
                key={course.id}
                title={course.title}
                progress={course.progress}
              />
            ))}

            <ActivityCard />
          </div>
        </section>
      </div>
    </main>
  );
}