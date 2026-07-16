// pages/index.js
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import WhatIBuild from "@/components/WhatIBuild";
import CaseStudies from "@/components/CaseStudies";
import EngineeringPhilosophy from "@/components/EngineeringPhilosophy";
import Articles from "@/components/Articles";
import OpenSource from "@/components/OpenSource";
import BeyondCode from "@/components/BeyondCode";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Swarnnika Raj Singh — Platform Engineer & AI Infrastructure Engineer</title>
        <meta
          name="description"
          content="Swarnnika Raj Singh is a Platform Engineer and Distributed Systems Engineer building cloud platforms and AI infrastructure. Golang, Kubernetes, gRPC, Terraform, and control planes."
        />
        <meta
          name="keywords"
          content="Platform Engineer, Distributed Systems Engineer, AI Infrastructure Engineer, Golang Engineer, Kubernetes Expert, Cloud Platform, Terraform, Developer Platform, High Availability Systems, Infrastructure Engineering"
        />
      </Head>
      <div className="bg-background min-h-screen">
        <Navbar />
        <Hero />
        <TrustedBy />
        <WhatIBuild />
        <CaseStudies />
        <EngineeringPhilosophy />
        <Articles />
        <OpenSource />
        <BeyondCode />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

