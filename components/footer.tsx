import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className=" flex justify-center items-center w-full max-w-screen-5xl mx-auto p-4 ">
      <p className="text-center text-sm text-green-500">&copy;2024 | <Link href={"https://github.com/hadihaz"} >Hadi Hajiasgharzadeh </Link> </p>
    </div>
  );
}
