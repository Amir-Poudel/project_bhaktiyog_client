import Image from "next/image";
import Link from "next/link";
import "./hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background image */}
      <Image
        src="/bhaktiyog_guru.jpg"
        alt="भक्तियोग फाउन्डेसन नेपालका संस्थापक"
        fill
        priority
        sizes="100vw"
        className="heroImage"
      />

      {/* Overlay for readable text */}
      <div className="heroOverlay" />

      {/* Hero content */}
      <div className="heroContainer">
        <div className="heroContent">
          <span className="heroBadge">ॐ सनातन धर्मको संरक्षण</span>

          <h1>भक्तियोग फाउन्डेसन नेपाल</h1>

          <h2>संस्थापक: सनत सञ्जेलजी महाराज</h2>

          <p>
            भक्ति, ज्ञान, साधना र सेवामार्फत आध्यात्मिक चेतना तथा सकारात्मक समाज
            निर्माण।
          </p>

          <div className="heroActions">
            <Link href="/about-us" className="heroButton primary">
              हाम्रो परिचय
            </Link>

            <Link href="#contact" className="heroButton secondary">
              हामीसँग जोडिनुहोस्
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
