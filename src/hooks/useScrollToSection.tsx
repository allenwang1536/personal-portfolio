import { useCallback } from 'react';

const useScrollToSection = () => {

  const scrollToSection = useCallback((id: string) => {
    const header = document.querySelector('header');
    const element = document.getElementById(id);
    const offset = header ? header.clientHeight : 0; // Includes padding
    
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - (offset + 20);
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  return scrollToSection;
};

export default useScrollToSection;
