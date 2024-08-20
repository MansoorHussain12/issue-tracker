// import { MoonIcon } from "@radix-ui/react-icons";
// import { useState, useEffect } from "react";

// export default function DarkModeToggle() {
//   const [theme, setTheme] = useState<string | null>(null);

//   useEffect(() => {
//     // Check the current theme on initial load
//     if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
//       setTheme("dark");
//     } else {
//       setTheme("light");
//     }
//   }, []);

//   useEffect(() => {
//     if (theme) {
//       document.documentElement.classList.remove("dark", "light");
//       document.documentElement.classList.add(theme);
//       localStorage.setItem("theme", theme);
//     }
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme(theme === "light" ? "dark" : "light");
//   };

//   return (
//     <button
//       onClick={toggleTheme}
//       className="text-sm text-left px-3 cursor-default hover:bg-purple-600"
//     >
//       {theme === "light" ? "Enable Dark Mode" : "Enable Light Mode"}
//     </button>
//   );
// }
