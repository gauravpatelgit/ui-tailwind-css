import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px",backgroundColor:"blue" }}>
      <Link
        to={"/MainFile"}
        style={{
          backgroundColor: "#25db18fe",
          borderRadius: "10px",
          height: "40px",
          color: "white",
          fontSize: "20px",
          border: "none",
        }}
      >
        MainFile
      </Link>
      <Link
        to={"/DuplicateFile"}
        style={{
          backgroundColor: "#e11fb7fe",
          borderRadius: "10px",
          height: "40px",
          color: "white",
          fontSize: "20px",
          border: "none",
        }}
      >
        DuplicateFile
      </Link>
    </div>
  );
}
