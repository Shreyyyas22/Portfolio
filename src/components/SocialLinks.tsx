import { cn } from "@/lib/utils";
import { Linkedin, Github, Instagram } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import FramerWrapper from "./animations/FramerWrapper";


const SocialLinks = () => {
  const links = [
      { name: "Instagram", link: "https://www.instagram.com/_shreyyy_22/", icon: <Instagram size={24} /> }, // Increased size
      { name: "Linkedin", link: "https://www.linkedin.com/in/shreyash-wagh22/", icon: <Linkedin size={24} /> }, // Increased size
      { name: "Github", link: "https://github.com/Shreyyyas22/", icon: <Github size={24} /> }, // Increased size
  ]
    return (
        <>
          {links.map((itm, indx) => {
            const timing = 0.55 + indx * 0.125
            
            return (
              <FramerWrapper key={indx} delay={timing} y={50}>
    
              <Link  target="blank"
                href={itm.link}
                className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
                >{itm.icon}</Link>
                </FramerWrapper>
            );
          })}
        </>
      );
    };
    
    export default SocialLinks;