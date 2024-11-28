import { Circle, Dna, Globe2, Languages } from "lucide-react";

const AboutFooter = () => {

    const items = [
        {name:"Languages", answer:"English, Hindi, Marathi", icon:<Languages className="h-11 w-11"/>},
        {name:"Location", answer:"Nagpur, Maharashtra, India", icon:<Globe2 className="h-11 w-11"/>},
        {name:"Age", answer:"22", icon:<Circle className="h-11 w-11"/>},
        {name:"Degree", answer:"B.Tech in Robotics and Automation", icon:<Dna className="h-11 w-11"/>},
    ]

    return (
        <>
        {
            items.map((val, indx) => {
                return(
                    <div className="p-1 w-fit relative" key={indx}>
                    <h1 className="gap-2 text-3xl font-poppins text-primary font-semibold relative flex icon_underline max-sm:text-2xl">{val.icon}{val.name}</h1>
                    <div className="flex gap-2 justify-center items-center flex-row text-xl text-primary pt-3 max-lg:justify-start">
                    <Circle className="h-3 w-3" /> {val.answer}
                    </div>
                </div>
                  )
                })
              }
             
            </>
        )
    }
    
    export default AboutFooter
