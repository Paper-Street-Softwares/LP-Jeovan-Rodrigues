import React from "react";
import content from "../../content/content";
import HowItWorksCard from "../cards/HowItWorksCard";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

export default function Steps({ colorMode }) {
  // Classes de tema
  const bgClasses = {
    dark: "bg-bgFixedDark",
    light: "bg-bgFixedLight",
    default: "bg-bgSectionDark",
  };
  const textClasses = {
    dark: "text-white",
    light: "text-black",
    default: "text-white",
  };
  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const titleColor = textClasses[colorMode] || textClasses.default;
  return (
    <SectionArea className={`${bgClass}`} paddingtop={true}>
      <SectionWrapper className="flex flex-col desktop1:flex-row-reverse gap-[40px] desktop2:gap-0 desktop1:justify-between">
        <MotionDivDownToUp className="relative w-[90%] desktop1:w-[415px] desktop2:w-[450px] flex justify-center rounded-xl shadow-custom-opacity shadow-shadowSteps/30">
          <img
            src={content.texts.steps.img}
            alt={content.texts.steps.img}
            className="w-[100%] desktop1:w-[415px] desktop2:w-[485px] rounded-xl"
          />
        </MotionDivDownToUp>
        <div className="desktop1:w-[550px] desktop2:w-[570px]">
          <SectionHeader
            className="hidden text-center desktop1:flex"
            miniTitle={content.texts.steps.miniTag}
            sectionHeaderTitle={content.texts.steps.title}
            sectionHeaderSubtitle={content.texts.steps.subtitle}
            type="article"
            titleColorSet={titleColor}
          />
          <SectionHeader
            className="text-center desktop1:hidden"
            miniTitle={content.texts.steps.miniTag}
            sectionHeaderTitle={content.texts.steps.title}
            sectionHeaderSubtitle={content.texts.steps.subtitle}
            color={colorMode ? "light" : ""}
            type={colorMode ? "" : "article"}
            colorMode={colorMode}
          />

          <div className="flex flex-wrap w-full justify-between gap-[32px] mt-[28px] desktop1:mt-0">
            <HowItWorksCard
              number={content.texts.steps.cards.card1.stepNumber}
              title={content.texts.steps.cards.card1.cardTitle}
              description={content.texts.steps.cards.card1.cardDescription}
              animation
              colorMode={colorMode}
            />
            <HowItWorksCard
              number={content.texts.steps.cards.card2.stepNumber}
              title={content.texts.steps.cards.card2.cardTitle}
              description={content.texts.steps.cards.card2.cardDescription}
              animation
              colorMode={colorMode}
            />
            <HowItWorksCard
              number={content.texts.steps.cards.card3.stepNumber}
              title={content.texts.steps.cards.card3.cardTitle}
              description={content.texts.steps.cards.card3.cardDescription}
              animation
              colorMode={colorMode}
            />
            <HowItWorksCard
              number={content.texts.steps.cards.card4.stepNumber}
              title={content.texts.steps.cards.card4.cardTitle}
              description={content.texts.steps.cards.card4.cardDescription}
              animation
              colorMode={colorMode}
            />
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
