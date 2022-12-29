import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

/**This component displays caption which could come in various sizes, color, Html tags
 * @param object props
 * @return HT
 */

export default function Caption(props) {
  const { text, color, size, variant } = props;
  console.log(variant);

  const RenderCaption = (variant, text) => {
    if (variant == "h1") {
      return <h1>{text}</h1>;
    } else if (variant == "h2") {
      return <h2>{text}</h2>;
    } else if (variant == "h3") {
      return <h3>{text}</h3>;
    } else if (variant == "h4") {
      return <h4>{text}</h4>;
    } else if (variant == "em") {
      return <em>{text}</em>;
    }
    return <span>{text}</span>;
    //Span is the default tag
  };

  return (
    <div>
      {variant ? (
        <div
          className={`${color ? color : "text-inherit"} ${
            size ? size : "text-lg"
          }`}
        >
          {RenderCaption(variant, text, color, size)}
        </div>
      ) : (
        <div>
          <div
            className={`${color ? color : "text-inherit"} ${
              size ? size : "text-lg"
            } `}
            data-testid="stockPhotos"
            //stockPhotos is for test purpose
          >
            {text}
          </div>
        </div>
      )}
    </div>
  );
}
