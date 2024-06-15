import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Josué Gallardo",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+569 9999 9999",
  },
  {
    icon: <MailIcon size={20} />,
    text: "josue@josuegallardo.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Nacido en 1991",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Desafio Latam",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Chile, Valparaíso",
  },
];

const qualificationsData = [
  {
    title: "education",
    data: [
      {
        university: "Universidad de Valparaíso",
        qualification: "Licenciatura en Informatica",
        years: "2010 - 2011",
      },
      {
        university: "Pontificia Universidad Católica de Valparaíso",
        qualification: "Licenciatura en Inglés",
        years: "2016 - 2018",
      },
      {
        university: "Talento Digital - Desafio Latam",
        qualification: "Desarrollador Full Stack Javascript",
        years: "2024",
      },
    ],
  },
];

const skillsData = [
  {
    title: "herramientas",
    data: [
      { imgPath: "/about/vscode.svg" },
      { imgPath: "/about/git.svg" },
      { imgPath: "/about/node.svg" },
      { imgPath: "/about/database.svg" },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto ">
          Sobre mí
        </h2>
        <div className="flex flex-col xl:flex-row ">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative ">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Info Personal
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications">
                  Calificaciones
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Habilidades
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="text-lg mt-12 xl:mt-8 ">
                {/* personal */}
                <TabsContent value="personal">
                  <div className=" text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Aprendiz apasionado, con ganas contribuir a un desarrollo
                      de alta calidad.
                    </h3>
                    <p className="subtitle max-w-xl mx-auto">
                      Me especializo en crear sitios web intuitivos, ofreciendo
                      experiencias de usuario dinámicas y atractivas.
                    </p>
                    {/* icons */}
                    <div>
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4"
                            key={index}>
                            <div className="text-primary ">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">calificaciones</TabsContent>
                <TabsContent value="skills">habilidades</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
