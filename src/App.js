import { useEffect, useRef } from "react";
import useInfiniteObserver from "./hooks/useInfiniteObserver";

function App() {
  const containerRef = useRef(null),
    create = useInfiniteObserver();

  useEffect(() => {
    // Create new mutation observer
    const mutation = create(containerRef.current, handleContainerChange);

    // Update div content after 2 seconds
    setTimeout(() => {
      const h1 = document.createElement("h1");
      h1.innerText = "Hello World";
      containerRef.current.appendChild(h1);
    }, 2000);

    // Disconnect mutation observer after 4 seconds
    setTimeout(() => {
      mutation.disconnect();
    }, 4000);
  }, []);

  // Mutation observer handler
  function handleContainerChange(mutationRecord) {
    console.log(mutationRecord);
  }

  return <div ref={containerRef}></div>;
}

export default App;
