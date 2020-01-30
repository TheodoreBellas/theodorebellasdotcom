import React from "react";
import { HeadlineBox } from "./headline-container.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HeadlineContainer = ({ headline }) => {
  if (!headline) {
    return null;
  }
  return (
    <HeadlineBox>
      <h2>
        <FontAwesomeIcon className="icon" icon={headline.icon} />
        <span dangerouslySetInnerHTML={{ __html: headline.header }}></span>
      </h2>
      <p>{headline.description}</p>
    </HeadlineBox>
  );
};
