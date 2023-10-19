const useLazyLoadVideos = () => {
  const loadVideos = () => {
    let observer = new IntersectionObserver(
      (entries, self) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const videos = entry.target;
            videos.src = videos.dataset.src;
            self.unobserve(videos);
          }
        });
      },
      {
        rootMargin: "10px",
        threshold: 0,
        triggerOnce: true,
      }
    );

    const vids = document.querySelectorAll("[data-src]");

    vids.forEach((vid) => {
      observer.observe(vid);
    });

    return () => {
      vids.forEach((vid) => {
        observer.unobserve(vid);
      });
    };
  };

  return loadVideos;
};

export default useLazyLoadVideos;
