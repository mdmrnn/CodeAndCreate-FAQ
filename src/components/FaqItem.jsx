import { useEffect, useState, useRef } from "react";

function FaqItem({ item, isCollapsedAll }) {
  const [isCollapse, setIsCollapse] = useState(isCollapsedAll);

  const faqItem = useRef();
  const answerRef = useRef();

  useEffect(() => {
    setIsCollapse(isCollapsedAll);
  }, [isCollapsedAll]);

  useEffect(() => {
    if (faqItem.current)
      setTimeout(() => {
        faqItem.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
  }, [isCollapse]);

  function handleCollapse() {
    setIsCollapse(!isCollapse);
  }
  return (
    <div
      className="flex flex-col transition-colors duration-300 border-b border-gray-200 last:border-none  hover:bg-gradient-to-r hover:from-gray-50/50 hover:to-transparent dark:border-gray-700 dark:hover:from-gray-800/50 dark:hover:to-transparent"
      ref={faqItem}
    >
      <header
        className={`flex flex-row items-center  justify-between rounded-lg px-4 h-15 cursor-pointer focus:outline-hidden ${
          isCollapse
            ? "hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 dark:text-white dark:hover:from-indigo-400 dark:hover:to-purple-400"
            : "bg-gradient-to-r from-indigo-200 via-purple-200 to-indigo-200/90 text-purple-700 dark:from-indigo-900/80 dark:via-purple-900/80 dark:to-indigo-900/70 dark:text-white font-medium"
        }`}
        onClick={handleCollapse}
      >
        <p className="text-lg font-medium pr-6">{item.question}</p>
        <i
          className={`bx bx-${
            isCollapse ? "plus" : "minus"
          } p-3 rounded-full text-gray-900 dark:text-white ${
            isCollapse
              ? "bg-gray-200 dark:bg-gray-700"
              : "bg-gradient-to-r from-indigo-300  to-purple-300 shadow-none dark:from-indigo-600 dark:to-purple-600 font-medium"
          }`}
        ></i>
      </header>
      <div className="overflow-hidden transition-all duration-200 ease-out">
        <div
          className="px-7 transition-all duration-200 bg-clip-text text-gray-900 hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 dark:text-white dark:hover:from-indigo-300 dark:hover:to-purple-300 overflow-y-auto noscrollbar"
          ref={answerRef}
          style={{
            maxHeight: isCollapse ? 0 : answerRef.current?.scrollHeight,
            opacity: isCollapse ? 0 : 1,
          }}
        >
          {item.answer}
        </div>
      </div>
    </div>
  );
}

export default FaqItem;
