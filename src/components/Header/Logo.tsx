export default function Logo({ color }: { color: string }) {
  return (
    <div
      className="flex-center cursor-pointer transition-all duration-300 ease-in hover:scale-125"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <svg
        width="55"
        height="55"
        viewBox="0 0 98 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 15 L40 15 C44 15 46 18 44 22 C43 24 41 25 39 25 L17 55 L40 55 C44 55 46 58 44 62 C43 65 40 67 37 67 L8 67 C4 67 2 63 4 59 C5 57 7 56 9 56 L32 26 L9 26 C6 26 4 23 6 19 C7 17 8 15 10 15 Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          d="M72 7 C85 7 95 18 95 34 C95 44 90 52 83 57 L89 65 C91 68 89 72 86 71 L78 62 C76 63 74 64 72 64 C59 64 49 53 49 34 C49 15 59 4 72 7 Z M72 17 C64 17 58 25 58 34 C58 43 64 52 72 52 C80 52 86 43 86 34 C86 25 80 17 72 17 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}