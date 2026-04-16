import React, { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, [dark]);

  return (
    <button
      className="theme-toggle"
      onClick={() => setDark(!dark)}
      aria-label="Toggle color mode"
      type="button"
    >
      {dark ? "Light" : "Dark"}
    </button>
  );
}
