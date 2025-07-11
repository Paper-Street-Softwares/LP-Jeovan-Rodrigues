import React from "react";
import Button from "../../interactives/Button";
import content from "../../../content/content";

function FacebookAbout() {
  return (
    <Button
      label={content.texts.about.aboutSocial.labelFacebook}
      buttonLink={content.texts.links.facebook}
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-facebook"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      }
    />
  );
}

export default FacebookAbout;
