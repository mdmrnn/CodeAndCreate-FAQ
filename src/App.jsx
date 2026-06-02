import { useState, useEffect } from "react";
import FaqList from "./components/FaqList";
function App() {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  useEffect(() => {
    if (isDark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [isDark]);

  function handleTheme() {
    localStorage.setItem("darkMode", JSON.stringify(!isDark));
    setIsDark(!isDark);
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-300">
      <div className="container mx-auto py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 inline-block text-transparent bg-clip-text">
            FAQ Center
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto dark:text-gray-300 transition-colors duration-300">
            Find answer to the most common questions about tailwind CSS and Web
            Developement
          </p>
        </header>
      </div>
      <FaqList handleTheme={handleTheme} isDark={isDark} />
    </div>
  );
}

export default App;
