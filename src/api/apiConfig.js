const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    // embedUrl: 'https://2embed.org/embed/movie?tmdb=',
    apiKey: '959b0178a1dc0820ba5d05ad237744a9',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
