import React from "react";
import Image from "next/image";
import Link from "next/link";

const logo = () => {
  return (
    <Link href="/">
      <div className="max-h-14 max-w-14 overflow-clip rounded">
        <Image
          src={"/logo.png"}
          alt="logo"
          height={500}
          width={500}
          loading="eager"
          className="h-16 object-cover object-bottom zoom-120   w-20 rounded"
        />
      </div>
    </Link>
  );
};

export default logo;
