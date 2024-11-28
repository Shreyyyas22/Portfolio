import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";
import HeroImage from "@/components/HeroImage";
import GithubBtn from "@/components/animations/GithubBtn";
import DownLoadResumeBtn from "@/components/DownloadResumeBtn";
import FramerWrapper from "@/components/animations/FramerWrapper";



export const siteConfig = {
  name: "Shreyash Wagh",
  description: "I am a Passionate Full Stack Developer",
  url: "https://shreyashwagh.vercel.app",
}
export default function Home() {
  return (
   <>
      {/* LEFT SIDE  */}
      <FramerWrapper className=" h-full w-auto flex flex-col justify-start gap-4" y={0} x={-100}>
        <HeroTexts />
        <div className="h-fit w-full p-4 flex gap-3">
          <SocialLinks />
        </div>
       <DownLoadResumeBtn/>
      </FramerWrapper>
      {/* RIGHT SIDE image  */}
      <FramerWrapper className="h-full w-[47%] relative block   max-lg:hidden" y={0} x={100}>
       
      {/* IMAGE  */}
        <HeroImage />
      </FramerWrapper>
     
      {/* GITHUB BUTTON  */}
      <GithubBtn/>
      </>
  );
}