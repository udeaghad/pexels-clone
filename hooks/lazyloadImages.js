const useLazyLoadImages = () => {
  const lazyLoadImages = () => {
    let observer = new IntersectionObserver(
      (entries, self) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const images = entry.target;
            images.src = images.dataset.src;
            self.unobserve(images);
          }
        });
      },
      {
        rootMargin: "100px",
        threshold: 0,
        triggerOnce: true,
      }
    );

    const imgs = document.querySelectorAll("[data-src]");
    imgs.forEach((img) => {
      observer.observe(img);
    });

    return () => {
      imgs.forEach((img) => {
        observer.unobserve(img);
      });
    };
  };
  return lazyLoadImages;
};

export default useLazyLoadImages;
