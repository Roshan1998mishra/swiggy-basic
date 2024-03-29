import { Inter } from "next/font/google";
import Header from "./Header";
import About from "@/Components/About";
import Career from "@/Components/Career";
import ContactUsForm from "@/Components/Contact";
import Menu from "@/Components/Menu";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Header/>
    <About/>
    <Career/>
    <Menu/>
    <ContactUsForm/>
    </>
      );
}

