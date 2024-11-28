import FramerWrapper from "@/components/animations/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const educationPage = () => {
    return (
      // ABOUT PAGE
      <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
        <Badge className=" gap-2">
          <Briefcase className="h-5 w-5" />
          Education
        </Badge>
        <div className="flex flex-col gap-3">
          <Heading>My Education</Heading>
        </div>
        <div className="w-full h-fit flex flex-col">
          <div className="w-full h-fit flex">
            <FramerWrapper y={0} x={-100} delay={0.35} className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base ">
              Sep 2020 - July 2024
            </FramerWrapper>
            <FramerWrapper y={0} x={100} delay={0.35} className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point ">
              <div className="text-2xl font-rubik max-sm:text-xl">
                Bachelor of Robotics and Automation, <br /> Bharati Vidyapeeth University
                Pune
              </div>
              <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs">
              I hold a Bachelor of Engineering (B.E.) in Robotics and Automation from Bharati Vidyapeeth College of Engineering, Pune, graduating with a CGPA of 8.8 in 2024. My education provided me with a strong foundation in robotics, automation technologies, and software development, enabling me to approach complex problems with innovative solutions.
              </p>
            </FramerWrapper>
          </div>
          <div className="w-full h-fit flex">
            <FramerWrapper y={0} x={-100} delay={0.5} className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base">
             Oct 2018 - May 2020
            </FramerWrapper>
            <FramerWrapper y={0} x={100} delay={0.5} className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point">
              <div className="text-2xl font-rubik max-sm:text-xl">
                Higher Secondary Education, Science Stream
              </div>
              <p className="font-poppins text-base w-full text-primary max-sm:text-xs">
                I completed my Higher Secondary Education (12th) in 2020, specializing in the Science stream, where I built a solid understanding of physics, mathematics, and computer science. This education sparked my curiosity for technology and problem-solving, laying the groundwork for my journey in the tech world.
              </p>
            </FramerWrapper>
          </div>
          <div className="w-full h-fit flex">
            <FramerWrapper y={0} x={-100} delay={0.65} className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base">
             Apr 2009 - May 2018
            </FramerWrapper>
            <FramerWrapper y={0} x={100} delay={0.65} className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point">
              <div className="text-2xl font-rubik max-sm:text-xl">
                Secondary Education, <br /> St. John's High School (CBSE)
              </div>
              <p className="font-poppins text-base w-full text-primary max-sm:text-xs">
                I completed my Secondary Education (10th) from St. John's High School (CBSE), where I developed a strong academic foundation and a passion for learning. My school years played a crucial role in shaping my curiosity and discipline, setting the stage for my future endeavors in science and technology.
              </p>
            </FramerWrapper>
          </div>
        </div>
      </div>
    );
  };
  
  export default educationPage;