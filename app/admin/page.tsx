import Hero from "@/components/client/Hero/hero";
import Navbar from "@/components/client/layout/navbar";
import Image from "next/image";
import Footer from "@/components/client/layout/footer";

// export default function Home() {
//   return (
//    <main>
//       <section className="min-h-[80vh]">
//         <Navbar />
//         <Hero />

//       </section>
//     </main>
//   );
// }

export default function HomePage() {
  return (
    <>
      {/* <Navbar /> */}

      <main>
        <Hero />

        <section id="about">{/* About section */}</section>

        <section id="mission">{/* Mission section */}</section>

        <section id="programs">{/* Programs section */}</section>

        <section id="gallery">{/* Gallery section */}</section>
      </main>

      {/* <Footer /> */}
    </>
  );
}
