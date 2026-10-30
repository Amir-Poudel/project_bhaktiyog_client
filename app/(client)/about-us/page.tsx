import type { Metadata } from "next";
import AboutUsClient from "@/components/client/About-us/AboutUsClient";

export const metadata: Metadata = {
  title: "हाम्रो परिचय | भक्तियोग फाउन्डेसन नेपाल",
  description:
    "ॐ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः सर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत्। ॐ शान्तिः शान्तिः शान्तिः।",
};

export default function AboutUsPage() {
  return <AboutUsClient />;
}