import Image from "next/image";
import React from "react";

interface SkillItem {
    alt: string;
    img: string;
    width: number;
    height: number;
}

interface MyComponentProps {
    items: Array<SkillItem>;
}

const SkillsFooter: React.FC<MyComponentProps> = ({ items }) => {
    return (
        <>
            {items &&
                items.map((val, indx) => (
                    <div className="p-4" key={indx}>
                        <Image
                            src={val.img}
                            alt={val.alt}
                            width={val.width}
                            height={val.height}
                            className="rounded-full w-auto max-h-20"
                        />
                    </div>
                ))}
        </>
    );
};

export default SkillsFooter;
