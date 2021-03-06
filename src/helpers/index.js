export const cleanData = (images) =>
  images.map((image) => ({
    id: image.id,
    largeImageURL: image.largeImageURL,
    likes: image.likes,
    views: image.views,
    downloads: image.downloads,
  }));
