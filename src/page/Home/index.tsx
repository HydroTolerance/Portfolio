import { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import { lazy, Suspense } from "react";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Net from "../../assets/Net1.png";
import ScrollReveal from "scrollreveal";
import ModalProject from "../../components/Modal_Projects";

const ExperienceComponents = lazy(
  () => import("../../components/Page_Component/Experience_Components")
);
const ProjectComponents = lazy(
  () => import("../../components/Page_Component/Project_Components")
);
const SkillComponents = lazy(
  () => import("../../components/Page_Component/Skill_Components")
);
const CertificateComponents = lazy(
  () => import("../../components/Page_Component/Certificate_Components")
);
const GraphicsComponents = lazy(
  () => import("../../components/Page_Component/Graphics_Components")
);

export function Home() {
  const [modal, setModal] = useState(false);
  const [types, setTypes] = useState("Web");
  const [loading, setLoading] = useState(false);
  const [selecterproject, setSelectedProject] = useState([]);
  useEffect(() => {
    const reveals: string[] = [
      "#experience",
      "#project",
      "#skills",
      "#certifications",
    ];
    const config = [
      {
        duration: 1000,
        delay: 500,
        distance: "50px",
        origin: "bottom",
      },
      {
        delay: 500,
        duration: 1000,
        distance: "50px",
        origin: "left",
        interval: 600,
      },
      {
        delay: 1500,
        duration: 1500,
        origin: "center",
      },
      {
        delay: 300,
        duration: 700,
        distance: "50px",
        origin: "bottom",
        interval: 300,
      },
    ];
    reveals.map((reveal) => ScrollReveal().reveal(reveal, config[0]));
    ScrollReveal().reveal(".blueEffects", config[1]);
    ScrollReveal().reveal(".textReveal", config[3]);
    ScrollReveal().reveal(".blueCirleEffects", config[2]);
  }, []);
  const visibility = (project: any) => {
    setSelectedProject(project);
    setModal(true);
  };
  const handleLoading = (types: string) =>{
      setLoading(true);
      setTypes(types)
      setTimeout(() => {
        setLoading(false);
      },1000)
  }

  return (
    <>
      <Layout>
        <div className="lg:ml-72 relative">
          <div id="aboutMe"></div>
          <div className="relative w-full h-[50em] mb-14 overflow-hidden">
            <div className="absolute w-full h-full sideblurred z-10"></div>
            <div
              className={`w-full h-[50em] flex justify-center items-center bg-cover bg-center absolute z-0`}
              style={{ backgroundImage: `url(${Net})`, opacity: 0.5 }}
            ></div>
            <div className="blueEffects absolute bg-[radial-gradient(ellipse_at_center,_rgb(59,_130,_246,_0.4),_transparent_70%)] w-[40%] h-40 rounded-full rotate-45 top-10 -left-56"></div>
            <div className="blueEffects absolute bg-[radial-gradient(ellipse_at_center,_rgb(217,_70,_239,_0.4),_transparent_70%)] w-[40%] h-40 rounded-full rotate-45 -top-0 right-0 transform translate-x-[40%]"></div>
            <div className="text-center absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
              <div className="blueCirleEffects absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px]  md:h-[500px] md:w-[500px] lg:h-[650px] lg:w-[650px]  bg-[radial-gradient(ellipse_at_center,_rgb(59,_130,_246,_0.2),_transparent_70%)] rounded-full "></div>
              <h2 className="textReveal text-4xl font-bold  tracking-wider text-white/90 md:mb-14 max-md:mb-8 text-[3rem] md:text-[4rem] lg:text-[5rem]">
                PORTFOLIO
              </h2>
              <p className=" textReveal text-lg text-white/70 max-w-[700px] mx-auto mb-14 ">
                Take a look at my projects, the tech I use, and the experience
                I've gained along the way. It's all here to show how much I love
                what I do.
              </p>
              <div className="textReveal relative w-[180px] h-[45px] rounded-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden before:absolute before:top-[-150%] before:left-[-50%] before:right-[-50%] before:bottom-[-150%] before: before:bg-[conic-gradient(white,#3b82f6)] before:rounded-lg before:animate-spin-slow">
                <a
                  href="https://drive.google.com/file/d/1JazlhFCCYZKzFiUWasMS_zQEllPUgQxx/view?usp=drive_link"
                  className="bg-[#19171c] text-white/90 py-3 px-6 top-[1px] right-[1px] bottom-[1px] left-[1px] rounded-lg absolute flex justify-center items-center after:content-['_↗']"
                  target="_blank"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>

          <div className="mx-8  mb-20" id="experience">
            <h2 className="text-3xl  font-bold mb-4 text-center text-blue-400">
              EXPERIENCE
            </h2>
            <p className="text-white/70 mb-6 mx-auto text-center max-w-[600px]">
              Below are some of the work experiences and tasks I have completed.
            </p>
            <Suspense fallback={<>Loading</>}>
              <ExperienceComponents />
            </Suspense>
          </div>

          <div className="mx-8  mb-20" id="project">
            <h2 className="text-3xl  font-bold mb-4 text-center text-blue-400">
              PROJECTS
            </h2>
            <p className="text-white/70 mb-6 mx-auto text-center max-w-[600px]">
              Below are some of the projects I've worked on, showcasing my
              skills and experience in web development, design, and more.
            </p>
            <div className="flex justify-center items-center mb-6 text-white/90">
              <div className="flex-wrap flex justify-center items-center">
                <button
                  className={`border px-4 py-2 hover:bg-blue-500 ${
                    types === "Web" ? "bg-blue-500" : ""
                  }`}
                  onClick={() => {
                    handleLoading('Web');
                  }}
                >
                  System
                </button>
                <button
                  className={`border px-4 py-2 hover:bg-blue-500 ${
                    types === "Graphics" ? "bg-blue-500" : ""
                  }`}
                  onClick={() => {
                    handleLoading('Graphics');
                  }}
                >
                  Graphics
                </button>
                <button
                  className={`border px-4 py-2 hover:bg-blue-500 ${
                    types === "Illustration" ? "bg-blue-500" : ""
                  }`}
                  onClick={() => {
                    handleLoading('Illustration');
                  }}
                >
                  Illustration
                </button>
              </div>
            </div>
            <Suspense fallback={<>Loading</>}>
            {
              loading ? (
                <div className="flex justify-center items-center h-[20vh]">
                  <div className="rounded-full h-10 w-10 bg-blue-600 animate-ping"></div>
                  <div className="rounded-full h-10 w-10 bg-blue-600 animate-ping"></div>
                  <div className="rounded-full h-10 w-10 bg-blue-600 animate-ping"></div>
                </div>
              ): (
                types === "Web" ?  (
                  <ProjectComponents
                    visibility={(project: any) => visibility(project)}
                    types={types}
                  />
                ) : (
                  <GraphicsComponents
                    visibility={(project: any) => visibility(project)}
                    types={types}
                  />
                )
              )
            }
              
            </Suspense>
          </div>
          <div className="mx-8 mb-20" id="skills">
            <h2 className="text-3xl  font-bold mb-4 text-center text-blue-400">
              SKILLS
            </h2>
            <p className="text-white/70 mb-4 mx-auto text-center max-w-[600px]">
              Below are some of skills I learned in school, during intership and
              through self-study at home.
            </p>
            <Suspense fallback={<>Loading</>}>
              <SkillComponents />
            </Suspense>
          </div>
          <div className="m-8 mb-20" id="certifications">
            <h2 className="text-3xl  font-bold mb-4 text-center text-blue-400">
              CERTIFICATIONS
            </h2>
            <p className="text-white/70 mb-4 mx-auto text-center max-w-[600px]">
              Below is a list of my certifications that highlight my skills and
              qualifications.
            </p>
            <Suspense fallback={<>Loading</>}>
              <CertificateComponents />
            </Suspense>
          </div>
          <div id="contacts" className="w-full bg-black/40 text-white/90 p-5">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl mb-6 text-center">Contact Me</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center">
                  <h2 className="text-lg mb-2">Gmail: juls.arola@gmail.com</h2>
                  <h2 className="text-lg">Number: +63 968 219 0167</h2>
                </div>
                <div className="hidden md:flex justify-center items-center">
                  <div className="border-l-2 border-white/60 h-full"></div>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <a
                    href="https://github.com/your-username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-lg"
                  >
                    <FaGithub className="text-2xl" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-lg"
                  >
                    <FaLinkedin className="text-2xl" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://instagram.com/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-lg"
                  >
                    <FaInstagram className="text-2xl" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      {modal && (
        <ModalProject
          project={selecterproject}
          onClose={() => setModal(false)}
        />
      )}
    </>
  );
}

export default Home;
