import FramerWrapper from "@/components/animations/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import ProjectCards from "@/components/ProjectCard";
import { Layers } from "lucide-react";

const projectsPage = () => {
    const Projects = [
        {
            title: "Let's Chat",
            description: "Let's Chat is a real-time chat application built using MERN Stack, and setup Socket.io for real-time communication.",
            tags: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io", "JWT", "DaisyUI", "TailwindCSS"],
            link: "https://lets-chat-wt6j.onrender.com/",
        },

        {
            title: "Business Proposal Generator",
            description: "A business proposal generator that uses AI to generate business proposals based on the user's input.",
            tags: ["Next.js", "TailwindCSS", "DaisyUI", "GeminiAPI", "React", "Firebase", "ContextAPI"],
            link: "https://business-proposal-generator.netlify.app/",
        },

        {
            title: "E-book Website",
            description: "An E-book Website built using React.js, with a focus on responsive design and user experience.",
            tags: ["React.js", "TailwindCSS", "React Router", "React Redux", "JavaScript"],
            link: "https://coder-ebooks.netlify.app/",
        },

        {
            title: "Spotify Clone",
            description: "A Spotify Clone built using Next.js and MERN Stack, with a real-time chat functionality.",
            tags: ["Next.js", "Express.js", "MongoDB", "React", "Node.js", "Socket.io", "JWT", "ShadcnUI", "TailwindCSS"],
            link: "https://github.com/Shreyyyas22/spotify-clone",
        },

        {
            title: "React Admin Dashboard",
            description: "A React Admin Dashboard built using React.js, with a focus on responsive design and user experience.",
            tags: ["React.js", "TailwindCSS", "React Router", "JavaScript"],
            link: "https://react-admin-dashboard-gold.vercel.app/",
        },

        {
            title: "MERN Stack Authentication",
            description: "A backend focused MERN Stack Authentication system with an email verification feature.",
            tags: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "TailwindCSS"],
            link: "https://github.com/Shreyyyas22/MERN-Auth",
        },

        {
            title: "Evently - Event Management Application",
            description: "An Event Management Application built using Next.js and MERN Stack, with a integartion of Stripe for payment.",
            tags: ["Next.js", "Express.js", "MongoDB", "React", "Node.js","TailwindCSS", "Stripe", "Clerk"],
            link: "https://github.com/Shreyyyas22/Evently",
        },
    ]

    const scrollableStyle = {
        overflowY: 'auto',
        scrollbarWidth: 'thin',
        scrollbarColor: '#6b7280 #e5e7eb', // Adjust the colors to match your design (thumb and track)
    };

    return (
        <div className="h-full w-full relative flex flex-col items-start gap-5" style={scrollableStyle}>
          <Badge className="flex gap-2">
            <Layers className="h-5 w-5" />
            Projects
          </Badge>
          <div className="flex flex-col gap-3">
            <Heading>My Projects</Heading>
            <FramerWrapper y={0} x={200}>
              <p className="font-poppins text-lg w-full text-primary max-sm:text-base">
                I love to Build Cool Projects. Here, you&#x27;ll find a curated
                collection of my creative endeavors and technical projects. Each
                piece represents a journey of innovation, problem-solving, and
                continuous learning. Feel free to explore this showcase of my
                passion and expertise in action.
              </p>
            </FramerWrapper>
          </div>
    
          <div className="w-full flex flex-row flex-wrap gap-3" style={scrollableStyle}>
            {Projects.map((val, indx) => {
              return <ProjectCards key={indx} value={val} num={indx} />;
            })}
          </div>
        </div>
      );
    };
    
    export default projectsPage;
