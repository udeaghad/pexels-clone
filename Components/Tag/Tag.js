import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Tag(props) {
  const { image, text, link } = props;

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        width: "max-content",
        marginBottom: "15px",
        borderRadius: "10px",
      }}
    >
      <Link href={link}>
        <button
          className="flex"
          style={{ alignItems: "center", width: "100%" }}
        >
          <div>
            <Image
              style={{ borderRadius: "100px", marginRight: "10px" }}
              src={image}
              alt={image}
              width={40}
              height={35}
            />
          </div>
          <div>{text} </div>
        </button>
      </Link>
    </div>
  );
}
