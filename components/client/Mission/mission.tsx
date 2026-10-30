"use client";

import { useEffect, useRef } from "react";
import "./mission.css";

const objectives = [
  {
    title: "आध्यात्मिक जागृति",
    description:
      "भक्ति, योग, ध्यान, सत्सङ्ग, प्रवचन तथा वैदिक ज्ञानको माध्यमबाट मानवमा आध्यात्मिक चेतना र आत्मचिन्तनको भावना विकास गर्नु।",
  },
  {
    title: "वैदिक शिक्षा तथा संस्कार",
    description:
      "वैदिक गुरुकुलको स्थापना तथा विकास गरी बालबालिका र युवामा नैतिकता, अनुशासन, चरित्र निर्माण, संस्कृत शिक्षा र सनातन संस्कारको प्रवर्द्धन गर्नु।",
  },
  {
    title: "गौसेवा तथा गौसंरक्षण",
    description:
      "असहाय, वृद्ध तथा संरक्षण आवश्यक गाईहरूको सेवा र संरक्षण गर्दै गौशाला स्थापना, गौआधारित जैविक कृषि र जीवदयाको भावना विस्तार गर्नु।",
  },
  {
    title: "योग, ध्यान तथा साधना",
    description:
      "योग, प्राणायाम, ध्यान र आध्यात्मिक साधनाको माध्यमबाट स्वस्थ शरीर, शान्त मन र सकारात्मक जीवनशैलीको विकासमा सहयोग गर्नु।",
  },
  {
    title: "स्वास्थ्य तथा मानव सेवा",
    description:
      "आर्थिक रूपमा विपन्न र सेवाबाट वञ्चित व्यक्तिहरूका लागि निःशुल्क औषधालय, स्वास्थ्य शिविर तथा जनचेतनामूलक कार्यक्रम सञ्चालन गर्नु।",
  },
  {
    title: "बाल तथा ज्येष्ठ नागरिक कल्याण",
    description:
      "बालबालिकाको शिक्षा, सुरक्षा, स्वास्थ्य र संस्कार तथा ज्येष्ठ नागरिकको सम्मान, संरक्षण र सेवाका लागि आवश्यक केन्द्रहरूको विकास गर्नु।",
  },
  {
    title: "असहाय तथा विपन्न वर्गको संरक्षण",
    description:
      "परिवारविहीन, असहाय र विपन्न व्यक्तिहरूलाई भोजन, आवास, स्वास्थ्य सहयोग तथा मानवीय सहारा प्रदान गर्नु।",
  },
  {
    title: "सनातन संस्कृति संरक्षण",
    description:
      "वेद, उपनिषद्, पुराण, श्रीमद्भागवत, भगवद्गीता तथा सनातन दर्शनका जीवनोपयोगी शिक्षाको प्रचार–प्रसार र संरक्षण गर्नु।",
  },
  {
    title: "प्रकृति तथा वातावरण संरक्षण",
    description:
      "वृक्षरोपण, हरित अभियान, जलस्रोत संरक्षण र वातावरणीय जनचेतनामार्फत स्वच्छ तथा हरित वातावरण निर्माणमा योगदान गर्नु।",
  },
  {
    title: "समग्र मानव कल्याण",
    description:
      "जाति, वर्ग, क्षेत्र, भाषा वा समुदायको भेदभाव नगरी मानवता, करुणा, सेवा र सहअस्तित्वको भावनासहित सम्पूर्ण मानव जातिको उत्थान र कल्याणका लागि कार्य गर्नु।",
  },
];

export default function Mission() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    let frame = 0;
    const updateZoom = () => {
      frame = 0;
      const bounds = section.getBoundingClientRect();
      const progress = Math.min(
        1,
        Math.max(0, (window.innerHeight - bounds.top) / (window.innerHeight + bounds.height)),
      );
      section.style.setProperty("--mission-zoom", `${1 + progress * 0.005}`);
    };

    const handleScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateZoom);
    };

    updateZoom();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section className="mission" id="mission" ref={sectionRef}>
      <div className="missionBackdrop" aria-hidden="true" />

      <div className="missionInner">
        <div className="missionIntro">
          <p className="missionKicker">भक्ति • ज्ञान • सेवा • संस्कार</p>
          <h2>हाम्रो उद्देश्य</h2>
          <p className="missionLead">
            भक्ति योग फाउण्डेशन नेपालको मुख्य उद्देश्य आध्यात्मिक जागृति, वैदिक
            ज्ञान, संस्कार, शिक्षा, मानव सेवा तथा प्रकृति संरक्षणको माध्यमबाट
            सभ्य, संस्कारित, नैतिक र आध्यात्मिक समाजको निर्माण गर्नु हो।
          </p>
          <p className="missionLead">
            सनातन वैदिक परम्पराका मूल्य, भक्ति, योग, ध्यान र साधनालाई मानव
            जीवनसँग जोड्दै व्यक्तिको आत्मिक विकास, सामाजिक उत्थान र सम्पूर्ण मानव
            जातिको कल्याणका लागि कार्य गर्नु हाम्रो मूल संकल्प हो।
          </p>
        </div>

        <div className="missionObjectives">
          <div className="missionObjectivesHeading">
            <h3>हाम्रा प्रमुख उद्देश्यहरू</h3>
            <span aria-hidden="true">१०</span>
          </div>

          <ol className="objectiveList">
            {objectives.map((objective, index) => (
              <li className="objectiveItem" key={objective.title}>
                <span className="objectiveNumber">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4>{objective.title}</h4>
                  <p>{objective.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="missionResolution">
          <span className="resolutionMark" aria-hidden="true">
            ॐ
          </span>
          <div>
            <h3>हाम्रो संकल्प</h3>
            <p>
              आत्माको जागरण, संस्कारयुक्त पुस्ताको निर्माण, गौसेवा, प्रकृति
              संरक्षण र मानव सेवामार्फत शान्त, सभ्य, संस्कारित तथा समुन्नत
              समाजको निर्माण गर्नु।
            </p>
            <blockquote>
              “वसुधैव कुटुम्बकम् — सम्पूर्ण विश्व एउटै परिवार हो।”
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
