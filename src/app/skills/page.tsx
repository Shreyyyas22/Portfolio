import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFooter";
import { Badge } from "@/components/ui/badge";
import { Lightbulb } from "lucide-react";
import html from "../../../public/html.png";
import js from "../../../public/js.png";
import next from "../../../public/nextjs.jpeg";
import react from "../../../public/react.png";
import tailwind from "../../../public/tailwindcss.png";
import ts from "../../../public/ts.png";
import python from "../../../public/python.png";
import shadcn from "../../../public/shadcn.jpg";
import mongodb from "../../../public/mongodb.jpg";
import nodejs from "../../../public/nodejs.png";
import expressjs from "../../../public/expressjs.png";
import firebase from "../../../public/firebase.png";
import redux from "../../../public/redux.png";
import css from "../../../public/css.png";
import jenkins from "../../../public/jenkins.png";
import docker from "../../../public/dockers.jpg";
import github from "../../../public/github.png";
import FramerWrapper from "@/components/animations/FramerWrapper";

const skillPage = () => {
    const programmingLanguages = [
        { alt: "JavaScript", img: js },
        { alt: "TypeScript", img: ts },
        { alt: "Python", img: python },
    ];
    const frontendSkills = [
        { alt: "React", img: react },
        { alt: "Next.js", img: next },
        { alt: "Tailwind CSS", img: tailwind },
        { alt: "HTML", img: html },
        { alt: "CSS", img: css },
        { alt: "Redux", img: redux },
        { alt: "Shader", img: shadcn },
    ];
    const backendSkills = [
        { alt: "Node.js", img: nodejs },
        { alt: "Express.js", img: expressjs },
        { alt: "MongoDB", img: mongodb },
        { alt: "Firebase", img: firebase },
    ];
    const tools = [
        { alt: "Jenkins", img: jenkins },
        { alt: "Docker", img: docker },
        { alt: "GitHub", img: github },
    ];

    return (
        <div className="min-h-screen w-full relative flex flex-col items-start gap-5 overflow-y-auto p-4 pt-40">
            <Badge className="gap-2">
                <Lightbulb className="h-5 w-5" />
                My Skills
            </Badge>
            <div className="flex flex-col gap-3">
                <Heading>My Technical Experience/Skills</Heading>
                <FramerWrapper y={0} x={200}>
                    <p className="font-poppins text-xl w-full text-primary max-sm:text-lg">
                        I specialize in MERN stack development, crafting responsive front-end interfaces with React.js, Next.js, and Tailwind CSS, and building secure back-end systems using Node.js, Express.js, and MongoDB. I have expertise in real-time applications with Firebase, API integration, and version control with Git. My skills enable me to deliver robust and scalable web solutions.
                    </p>
                </FramerWrapper>
                <FramerWrapper y={100} delay={0.30} className="block">
                    <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
                        Programming Languages
                    </h1>
                    <div className="w-full h-fit flex-row flex justify-between items-center">
                        <SkillsFooter items={programmingLanguages} />
                    </div>
                </FramerWrapper>
                <FramerWrapper className="block" y={100} delay={0.32}>
                    <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
                        Frontend Technologies
                    </h1>
                    <div className="w-full h-fit flex-row flex justify-between items-center">
                        <SkillsFooter items={frontendSkills} />
                    </div>
                </FramerWrapper>
                <FramerWrapper className="block" y={100} delay={0.34}>
                    <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
                        Backend Technologies
                    </h1>
                    <div className="w-full h-fit flex-row flex justify-between items-center">
                        <SkillsFooter items={backendSkills} />
                    </div>
                </FramerWrapper>
                <FramerWrapper className="block" y={100} delay={0.36}>
                    <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
                        Tools and Other Technologies
                    </h1>
                    <div className="w-full h-fit flex-row flex justify-between items-center">
                        <SkillsFooter items={tools} />
                    </div>
                </FramerWrapper>
            </div>
        </div>
    );
};

export default skillPage;