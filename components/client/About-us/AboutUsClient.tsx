"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import "./about-us.css";

const introduction = [
  "भक्ति योग फाउण्डेशन नेपाल सनातन वैदिक ज्ञान",
  "आध्यात्मिक साधना, योग, ध्यान, संस्कार, शिक्षा, स्वास्थ्य, गौसेवा,",
  "गुरुकुल, मानव सेवा, धर्म जागरण, संस्कृति संरक्षण तथा",
  " वातावरण संरक्षणलाई एकीकृत गर्दै सम्पूर्ण मानव जातिको",
  "कल्याणका लागि समर्पित आध्यात्मिक एवं सामाजिक संस्था हो।",
  "वि.सं. २०७३ साल श्रीकृष्ण जन्माष्टमीको पावन अवसरमा",
  "स्थापित यस फाउण्डेशनले आध्यात्मिक जागृतिद्वारा मानव आत्माको कल्याण,",
  "वैदिक संस्कारद्वारा चरित्र निर्माण, शिक्षाद्वारा ज्ञानको विस्तार, सेवाद्वारा मानव",
  "उत्थान तथा प्रकृति र गौसंरक्षणद्वारा सनातन जीवनदर्शनको संरक्षण गर्ने दीर्घकालीन संकल्प लिएको छ।",
  "फाउण्डेशनको मूल भावना हो—",
  "<<आत्माको जागरणदेखि समाजको उत्थानसम्म, संस्कारदेखि संस्कृतिको संरक्षणसम्म र",
  "मानव सेवादेखि समस्त जीवप्रतिको करुणासम्म—समग्र कल्याणको अभियान।>>",
];

const INITIAL_PARAGRAPHS = 2;
const MAX_VISIBLE_LINES = 9;

export default function AboutUsClient() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [measurements, setMeasurements] = useState({
    initialHeight: 0,
    fullHeight: 0,
    windowHeight: 0,
    lineHeight: 0,
    gap: 0,
  });

  const [travelled, setTravelled] = useState(0);

  const { initialHeight, fullHeight, windowHeight, lineHeight, gap } =
    measurements;

  const scrollDistance = Math.max(0, fullHeight - initialHeight);

  const measureStory = useCallback(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!section || !viewport || !track) return;

    const paragraphs = Array.from(track.children) as HTMLElement[];

    if (!paragraphs.length) return;

    const trackStyle = getComputedStyle(track);
    const currentGap = parseFloat(trackStyle.rowGap) || 0;
    const currentLineHeight =
      parseFloat(getComputedStyle(paragraphs[0]).lineHeight) || 30;

    // Initial view displays the first two paragraphs.
    const initial =
      paragraphs
        .slice(0, INITIAL_PARAGRAPHS)
        .reduce((total, paragraph) => total + paragraph.offsetHeight, 0) +
      currentGap * Math.max(0, INITIAL_PARAGRAPHS - 1);

    // Keep approximately nine text lines in the moving window.
    const maxWindow =
      currentLineHeight * MAX_VISIBLE_LINES +
      currentGap * (MAX_VISIBLE_LINES - 1);

    const full = track.scrollHeight;

    setMeasurements((old) => {
      const next = {
        initialHeight: initial,
        fullHeight: full,
        windowHeight: maxWindow,
        lineHeight: currentLineHeight,
        gap: currentGap,
      };

      if (
        Math.abs(old.initialHeight - next.initialHeight) < 1 &&
        Math.abs(old.fullHeight - next.fullHeight) < 1 &&
        Math.abs(old.windowHeight - next.windowHeight) < 1 &&
        Math.abs(old.lineHeight - next.lineHeight) < 1 &&
        Math.abs(old.gap - next.gap) < 1
      ) {
        return old;
      }

      return next;
    });

    // Keep the scene pinned until the last text reaches the viewport.
    section.style.height = `${
      window.innerHeight + Math.max(0, full - initial)
    }px`;
  }, []);

  useEffect(() => {
    let frame = 0;

    const updateScroll = () => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const section = sectionRef.current;
        if (!section) return;

        const sectionTop = section.getBoundingClientRect().top;
        const nextTravelled = Math.min(
          scrollDistance,
          Math.max(0, -sectionTop),
        );

        setTravelled((old) =>
          Math.abs(old - nextTravelled) > 0.5 ? nextTravelled : old,
        );
      });
    };

    const refresh = () => {
      measureStory();
      updateScroll();
    };

    refresh();

    window.addEventListener("scroll", updateScroll, {
      passive: true,
    });
    window.addEventListener("resize", refresh);

    const observer = new ResizeObserver(refresh);

    if (trackRef.current) observer.observe(trackRef.current);
    if (viewportRef.current) observer.observe(viewportRef.current);

    document.fonts?.ready.then(refresh);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", refresh);
      observer.disconnect();
    };
  }, [measureStory, scrollDistance]);

  // First, grow the visible area from two lines to nine.
  const visibleHeight = Math.min(windowHeight, initialHeight + travelled);

  // Once the window reaches nine lines, move the text upward.
  // This makes room for new lines while older lines disappear.
  const translateDistance = Math.max(
    0,
    travelled - Math.max(0, windowHeight - initialHeight),
  );

  const zoomProgress =
    scrollDistance > 0 ? Math.min(1, travelled / scrollDistance) : 0;

  const backgroundZoom = 1.04 + zoomProgress * 0.14;

  return (
    <main className="about-page">
      <section
        ref={sectionRef}
        className="spiritual-story"
        aria-label="About us"
      >
        <div className="spiritual-sticky">
          <div
            className="spiritual-background"
            style={{
              transform: `scale(${backgroundZoom})`,
            }}
          />

          <div className="spiritual-overlay" />

          <div className="spiritual-content">
            <header className="spiritual-title-area">
              <h1 className="spiritual-heading">हाम्रो परिचय</h1>
            </header>

            <div
              ref={viewportRef}
              className="spiritual-text-viewport"
              style={{
                height: `${Math.max(0, visibleHeight)}px`,
              }}
            >
              <div
                ref={trackRef}
                className="spiritual-copy"
                style={{
                  transform: `translate3d(0, -${translateDistance}px, 0)`,
                }}
              >
                {introduction.map((line, index) => (
                  <p className="spiritual-line" key={index}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-next-section">
        <p className="next-eyebrow">THE PATH CONTINUES</p>

        <h2>Discover the Journey Within</h2>

        <p>
          A journey towards awareness, compassion, wisdom, and a more peaceful
          way of living.
        </p>
      </section>
    </main>
  );
}
