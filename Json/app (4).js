// Taskiniz: Mehsur filmlerin movcud oldugu bir api url tapin. O apiden istifade ederek, filmin adlarini console-da gosterin



fetch(`https://api.themoviedb.org/3/movie/popular?api_key=a601cd5dcb60d698e00e2f7e210b0a22`
)
  .then((res) => res.json())
  .then((name) => {
    const movieName = name.results.map((data) => data.title);
    console.log(movieName);
  })
