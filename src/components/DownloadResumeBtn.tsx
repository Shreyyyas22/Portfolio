import Link from "next/link";
import React from "react";
import HackerBtn from "./animations/HackerBtn";

function DownLoadResumeBtn() {
  return (
    <div className="h-fit w-full mt-2 py-2 px-4">
      <Link href="/shreyash_wagh.pdf" target="_blank" rel="noopener noreferrer" download>
        <HackerBtn label="Download Resume" />
      </Link>
    </div>
  );
}

export default DownLoadResumeBtn;
