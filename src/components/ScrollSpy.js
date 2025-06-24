import { useEffect } from "react";

const ScrollSpy = ({ sectionIds = [] }) => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, 
    };
    console.log("ScrollSpy received:", sectionIds);


    const observer = new IntersectionObserver((entries) => {
      const visibleSection = entries.find(entry => entry.isIntersecting);
      if (visibleSection) {
        const newHash = `#${visibleSection.target.id}`;
        if (window.location.hash !== newHash) {
          window.history.replaceState(null, "", newHash); 
        }
      }
    }, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return null;
};

export default ScrollSpy;