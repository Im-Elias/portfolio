"use client";
import Link from "next/link";
import { Button } from "./ui/button";

//import swiper
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import required modules
import { Pagination } from "swiper/modules";

// components
import ProjectCard from "./ProjectCard";

const projectsData = [
  /* {
    image: "/work/hippomarket.png",
    category: "fullstack",
    name: "Hippo Marketplace",
    description:
      "Marketplace de recursos digitales. Next.js, React, tRPC, Tailwind CSS, Shadcn UI.",
    link: "https://github.com/Im-Elias/HippoMarket",
    github: "https://github.com/Im-Elias/HippoMarket",
  }, */
  {
    image: "/work/bizi-izi.png",
    category: "next js / fullstack",
    name: "Bizi Izi",
    description:
      "Tienda de bicicletas, practica de  Next.js 14, React, Tailwind CSS, Sanity CMS, Stripe.",
    link: "https://bici-izi.vercel.app/",
    github: "https://github.com/Im-Elias/bici-izi",
  },
  {
    image: "/work/portfolio.png",
    category: "next js",
    name: "Mi Portafolio",
    description:
      "Portafolio creado con Next.js, React, Tailwind CSS y Shadcn UI.",
    link: "https://josue-gallardo-portfolio.vercel.app/",
    github: "https://github.com/Im-Elias/portfolio",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Últimos Proyectos</h2>
          <p className="subtitle mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <Link href="/projects">
            <Button>Ver Todos</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}>
            {/* mostrar solo los primero 4 proyectos en el slider */}
            {projectsData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
