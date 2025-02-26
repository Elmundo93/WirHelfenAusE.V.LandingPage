
export function handleScroll(targetId: string, offset: number = 0) {
    const target = document.querySelector(targetId);
    if (target) {
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  }