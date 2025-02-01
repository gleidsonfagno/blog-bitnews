import CardeDestaque from "../components/CardeDestaque";
import { Navbar } from "../components/Navbar";

const DataApi = {
  posts: [
    {
      id: 1,
      title: "A floresta Amazônia precisa de socorro",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum veniam minus enim magnam, excepturi hic quis neque earum obcaecati, et repellendus incidunt ipsum cum error ex labore. Praesentium, quae eligendi.",
      bg_image: "./CardeDestaque.png",
      button: "Startup",
      date: "Aug 2, 2020",
    },
    // {
    //   id: 2,
    //   title: "Como começar a programar",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum veniam minus enim magnam, excepturi hic quis neque earum obcaecati, et repellendus incidunt ipsum cum error ex labore. Praesentium, quae eligendi.",
    //   bg_image: "./CardeDestaque.png",
    //   button: "Tecnologia",
    //   date: "2025-01-30",
    // },
  ]
};

export default function Home() {
  return (
    <div className="">
      <Navbar />

      <main className="px-4">
        
        <div className="py-[70px]">
        {DataApi.posts.map((post, index) => (
          <CardeDestaque
          key={index}
          title={post.title}
          description={post.description}
          bg_image={post.bg_image}
          button={post.button}
          date={post.date}
          />

        ))}
        </div>

        <h1 className="text-blue-50 font-bold text-4xl">Hello word</h1>
        <p className="text-base font-bold text-zinc-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum veniam
          minus enim magnam, excepturi hic quis neque earum obcaecati, et
          repellendus incidunt ipsum cum error ex labore. Praesentium, quae
          eligendi.
        </p>
      </main>
    </div>
  );
}
