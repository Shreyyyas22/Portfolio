import TextRotator from "@/components/TextRotater";

 
const HeroTexts = () => {
 
  
  return (
    <>
      <h3 className="font-poppins text-2xl max-sm:text-xl" >My Name is</h3>
      <h1 className="font-rubik text-8xl name_underline text-primary max-sm:text-6xl " >
        Shreyash <br /> Wagh .
      </h1>
        <TextRotator/>
     
    </>
  );
};
export default HeroTexts