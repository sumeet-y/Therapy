import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="px-4 md:px-14 py-30 bg-[rgba(239,236,227)] ">
      <h2 className="text-4xl md:text-5xl font-extralight mb-8 text-center text-[rgba(50,50,48)]">
        Areas of Focus
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
        <ServiceCard
          ImageSrc="/meditate.jpg"
          title="Anxiety & Stress Management"
          description="Anxiety can create a relentless backdrop of worry, tension, and “what‑if” thinking that holds you back from living fully. In our work together, we’ll unpack the root triggers of your stress—whether they’re tied to work, relationships, or internal pressures—and develop practical tools to interrupt the worry cycle. You’ll learn evidence‑based cognitive‑behavioral strategies to reframe anxious thoughts, alongside mindfulness and breath‑work exercises that bring calm into your body. Over time, you’ll build resilience and confidence in facing life’s uncertainties, so that stress no longer dictates your day‑to‑day experience."
        />
        <ServiceCard
          ImageSrc="/couple.jpg"
          title="Relationship Counseling"
          description="Whether you’re newly partnered or have decades under your belt, relationship dynamics often shift and require fresh communication skills. I help couples and individuals identify unspoken patterns—like blame, avoidance, or unmet needs—and translate those insights into compassionate dialogue. Together, we’ll practice active listening, non‑violent communication, and empathy exercises that deepen connection and rebuild trust. You’ll gain clarity about your own attachment style and learn the tools to navigate conflict with curiosity rather than defensiveness. The goal is to foster greater understanding, intimacy, and long‑term relationship satisfaction."
        />
        <ServiceCard
          ImageSrc="/recovery.jpg"
          title="Trauma Recovery"
          description="Trauma can leave a lasting imprint on your emotional and physical well‑being, often surfacing as hypervigilance, dissociation, or mood swings. In a safe, trauma‑informed space, we’ll gently process difficult memories at your own pace—using talk therapy, somatic awareness, and other modalities like EMDR or inner‑child visualization as appropriate. We’ll honor your story, validate your feelings, and work to integrate fragmented experiences so that you can reclaim a sense of safety and agency. Throughout this journey, you’ll develop self‑compassion and coping skills to manage triggers, regulate emotions, and build a renewed sense of self."
        />
      </div>
    </div>
  );
};

export default Services;
