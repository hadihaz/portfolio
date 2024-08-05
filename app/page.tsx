import Certificates from "@/components/certificates";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex max-w-screen-5xl mx-auto  flex-col  md:justify-between ">
      <div id="box">
        <Header />
        <Skills />
        <Certificates />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
