import { useState } from "react";
import FaqItem from "./FaqItem";
import faqData from "../data/faqData";

function FaqList({ handleTheme, isDark }) {
  const [isCollapsedAll, setIsCollapsedAll] = useState(
    JSON.parse(localStorage.getItem("collapseCond")) || false
  );

  function handleCollapseAll() {
    localStorage.setItem("collapseCond", JSON.stringify(!isCollapsedAll));
    setIsCollapsedAll(!isCollapsedAll);
  }
  //
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 py-12">
      <div className="mb-10 flex flex-col justify-center sm:flex-row sm:justify-evenly sm:items-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text text-center sm:text-left w-full sm:w-auto">
          Frequently Asked Questions
        </h2>
        <div className="flex items-centre justify-center space-x-4">
          <button
            onClick={handleCollapseAll}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white  bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 rounded-lg shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-all duration-300 cursor-pointer"
          >
            <i className="bx bx-expand-left text-lg"></i>
            <span>{isCollapsedAll ? "Expand All" : "Collapse All"}</span>
          </button>
          <button
            onClick={handleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 dark:from-gray-800 dark:to-gray-700 dark:text-gray-200 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-all duration-300 cursor-pointer"
          >
            <i className={`bx bx-${isDark ? "sun" : "moon"} text-lg`}></i>
          </button>
        </div>
      </div>
      <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg border border-indigo-100/50 dark:border-indigo-900/30 overflow-hidden transition-all duration-300">
        {faqData.map((item) => (
          <FaqItem key={item.id} item={item} isCollapsedAll={isCollapsedAll} />
        ))}
      </div>
    </div>
  );
}

export default FaqList;
