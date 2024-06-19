"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectsData = [
  {
    image: "/work/hippomarket.png",
    category: "fullstack",
    name: "Hippo Marketplace",
    description:
      "Marketplace de recursos digitales. Next.js, React, tRPC, Tailwind CSS, Shadcn UI.",
    link: "https://github.com/Im-Elias/HippoMarket",
    github: "https://github.com/Im-Elias/HippoMarket",
  },
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

//remove category duplicates
const uniqueCategories = [
  "todos",
  ...new Set(projectsData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("todos");

  const filteredProjects = projectsData.filter((project) => {
    //si al categoria es todos, retornar todos los proyectos, si no, filtrar por categoria
    return category === "todos" ? project : project.category === category;
  });

  return (
    <section className=" min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          Mis Proyectos
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-32">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] md-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto">
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project}></ProjectCard>
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
