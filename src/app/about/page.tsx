import FramerWrapper from "@/components/animations/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Circle, User2 } from "lucide-react";
import AboutFooter from "@/components/Aboutfooter";
import DownloadResumeBtn from "@/components/DownloadResumeBtn";

const page = () => {
  const items = [
    { hobby: "Coding" },
    { hobby: "Playing Cricket" },
    { hobby: "Gaming" },
    { hobby: "Travelling" },
  ];

  return (
    // ABOUT PAGE
    <div className="min-h-screen w-full relative flex flex-col items-start gap-5 overflow-auto pt-[700px] px-6">
      {/* Badge Section */}
      <Badge className="gap-2 bg-blue-500 text-white">
        <User2 className="h-5 w-5" />
        About Me
      </Badge>

      {/* Main Content */}
      <div className="flex flex-col gap-8 w-full">
        {/* Heading */}
        <div className="text-3xl font-bold text-primary md:text-4xl">
          <Heading>
            Full Stack Developer, Based in Nagpur, India
          </Heading>
        </div>

        {/* Introduction */}
        <FramerWrapper y={0} x={100}>
          <p className="font-poppins text-lg leading-relaxed text-gray-700">
            Hello! I’m Shreyash Wagh, a passionate and dedicated MERN stack
            developer with a flair for creating user-centric, high-performance
            applications. I recently graduated from Bharati Vidyapeeth College
            of Engineering, Pune, with a stellar CGPA of 8.8, and I’m excited to
            bring my technical expertise and creativity to impactful projects.
          </p>
        </FramerWrapper>

        {/* My Journey */}
        <FramerWrapper y={20} x={0}>
          <div className="text-2xl font-semibold text-primary">
            <Heading>
              My Journey
            </Heading>
          </div>
          <p className="font-poppins text-lg leading-relaxed text-gray-700">
            During my time at Bugfree Solutions Pvt. Ltd., I honed my skills as
            a React developer, enhancing user interfaces for seamless, visually
            appealing digital experiences. My interest in cutting-edge web
            technologies has driven me to explore frameworks like Next.js and
            build applications that are as robust as they are intuitive.
          </p>
        </FramerWrapper>

        {/* What I Do */}
        <FramerWrapper y={40} x={0}>
          <div className="text-2xl font-semibold text-primary">
            <Heading>
              What I Do
            </Heading>
          </div>
          <ul className="list-disc pl-5 space-y-3 text-lg text-gray-700">
            <li>
              <span className="font-bold text-primary">
                Full-Stack Development:
              </span>{" "}
              I craft scalable, dynamic applications using MongoDB, Express,
              React, and Node.js, ensuring efficient and secure back-end systems
              and engaging front-end designs.
            </li>
            <li>
              <span className="font-bold text-primary">Real-Time Applications:</span>{" "}
              From chat systems to proposal generators, I specialize in
              real-time, interactive features that keep users connected and
              informed.
            </li>
            <li>
              <span className="font-bold text-primary">Problem Solving:</span>{" "}
              I thrive on transforming ideas into solutions, be it automating
              workflows or creating tools that empower businesses.
            </li>
          </ul>
        </FramerWrapper>

        {/* Fun Facts */}
        <FramerWrapper y={60} x={0}>
          <div className="text-2xl font-semibold text-primary">
            <Heading>
              Fun Facts
            </Heading>
          </div>
          <p className="font-poppins text-lg leading-relaxed text-gray-700">
            When I’m not coding, you’ll find me on the cricket field. Having
            represented my school at the national level, I’ve been honored with
            the Best All-Rounder Award by VVS Laxman. Cricket has taught me
            teamwork, strategy, and perseverance—qualities I bring into every
            project I undertake.
          </p>
        </FramerWrapper>

        {/* Hobbies Section */}
        <FramerWrapper y={80} x={0}>
          <div className="text-2xl font-semibold text-primary">
            <Heading>
              Hobbies
            </Heading>
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-white shadow-md rounded-md text-gray-700 hover:bg-primary hover:text-white transition-all cursor-pointer"
              >
                <Circle className="h-4 w-4 text-blue-500" />
                <span className="text-lg">{item.hobby}</span>
              </div>
            ))}
          </div>
        </FramerWrapper>
      </div>

      {/* Footer */}
      <AboutFooter />
    </div>
  );
};

export default page;
