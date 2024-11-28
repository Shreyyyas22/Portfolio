import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FramerWrapper from "./animations/FramerWrapper";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  value: any;
  num: number;
}

const ProjectCards: React.FC<ProjectCardProps> = ({ value, num }) => {
  return (
    <FramerWrapper className="max-w-[32%] min-h-[345px] max-lg:max-w-full" y={0} scale={0.8} delay={num / 4} duration={0.15}>
      <Card className="w-full h-full overflow-hidden">
        <CardHeader>
          <CardTitle>{value.title}</CardTitle>
        </CardHeader>
        <CardContent className="overflow-y-auto" style={{ maxHeight: '300px' }}>
          <p className="text-base font-poppins">{value.description}</p>
          <div className="flex mt-2 justify-center flex-wrap gap-3">
            {value.tags.map((tag: string, index: number) => (
              <span key={index} className={`inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium ${tag === 'Nextjs' ? 'bg-teal-100 text-teal-800' : tag === 'Freelancing' ? 'bg-yellow-100 text-yellow-800' : tag === 'Shadcn Ui' ? 'bg-blue-100 text-blue-800' : tag === 'Typescript' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'}`}>
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="items-center justify-center flex">
          <Link href={value.link} target="_blank" className={cn(buttonVariants({ variant: "default", size: "lg" }), "flex")}>
            Visit Project <ArrowUpRight className="h-5 w-5 ml-1" />
          </Link>
        </CardFooter>
      </Card>
    </FramerWrapper>
  );
};

export default ProjectCards; 