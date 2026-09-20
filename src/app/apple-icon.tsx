import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0B0D10",
          borderRadius: "36px",
          border: "2px solid #1E232B",
        }}
      >
        <svg
          width="112"
          height="112"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            stroke="#F5F5F2"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M8.5 8V24" />
            <path d="M8.5 16H16.5" />
            <path d="M16.5 8V24" />
            <path d="M16.5 8H21C23.2 8 24.5 9.5 24.5 12C24.5 14.5 23.2 16 21 16H16.5" />
          </g>
          <circle cx="22.5" cy="21.5" r="1.6" fill="#00C2FF" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
