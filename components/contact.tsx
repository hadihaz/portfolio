"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import queraLogo from "@/public/queralogo.png";
import Link from "next/link";
import { MdEmail } from "react-icons/md";

const schema = yup
  .object({
    name: yup.string().required("name is required"),
    email: yup
      .string()
      .email("email format is not valid")
      .required("email is required"),
    message: yup.string().required("message is required"),
  })
  .required();

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="w-full max-w-screen-2xl mx-auto p-4 md:px-28 bg-gradient-to-r from-green-400 to-green-700 border-green-400">
      <h1 className="font-bold text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-neutral-700 to-neutral-950 border-neutral-900 border-b-2 w-full p-2">{`<Contact />`}</h1>
      <div className="flex justify-evenly items-center flex-wrap">
        <div className="space-y-8 w-full max-w-[400px] mt-10 text-transparent bg-clip-text bg-gradient-to-r from-neutral-700 to-neutral-950 ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 text-neutral-900 "
          >
            <div className="space-y-2 ">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="name"
              >
                Name
              </label>
              <input
                {...register("name")}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="name"
                placeholder="Enter your name"
              />
              <p className="text-neutral-800">{errors.name?.message}</p>
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="email"
              >
                Email
              </label>
              <input
                {...register("email")}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="email"
                placeholder="Enter your email"
                type="email"
              />
              <p className="text-neutral-800">{errors.email?.message}</p>
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                {...register("message")}
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]"
                id="message"
                placeholder="Enter your message"
                defaultValue={""}
              />
              <p className="text-neutral-800">{errors.message?.message}</p>
            </div>
            <button className="bg-gradient-to-r from-neutral-800 to-neutral-800 text-white inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
              Send Message
            </button>
          </form>
        </div>
        <div className="space-y-4 max-w-[400px] mt-10 text-transparent text-white">
          <div className="bg-neutral-900 rounded-xl p-5 text-base flex justify-center items-center">
            <span className="flex gap-2 items-center cursor-pointer hover:text-neutral-100 hover:scale-105 duration-200 brightness-75 hover:brightness-100">
              <MdEmail size={30} />
              <p>hadihajiasgharzadeh@gmail.com</p>
            </span>
          </div>
          <div className="flex space-x-4 opacity-95">
            <div className="bg-neutral-900 rounded-xl p-5 w-28">
              <Link
                className="flex flex-col items-center cursor-pointer hover:text-neutral-100 hover:scale-105 duration-200 brightness-50 hover:brightness-100"
                href={"https://github.com/hadihaz"}
                target="_blank"
              >
                <FaGithub size={30} />
                <p>Github</p>
              </Link>
            </div>
            <div className="bg-neutral-900 rounded-xl p-5 w-28">
              <Link
                className="flex flex-col items-center cursor-pointer hover:text-neutral-100 hover:scale-105 duration-200 brightness-50 hover:brightness-100"
                href={"https://www.linkedin.com/in/hadi-hajiasgharzadeh"}
                target="_blank"
              >
                <FaLinkedin size={30} />
                <p>Linkedin</p>
              </Link>
            </div>
            <div className="bg-neutral-900 rounded-xl p-5 w-28">
              <Link
                className="flex flex-col items-center cursor-pointer hover:text-neutral-100 hover:scale-105 duration-200 brightness-50 hover:brightness-100"
                href={"https://quera.org/profile/hadihaz"}
                target="_blank"
              >
                <Image src={queraLogo} alt="" width={30} height={30} />
                <p>Quera</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
