import React from "react";

//Movie Page Components
import Navigation from "./elements/Navigation";
import MovieInfo from "./elements/MovieInfo";
import MovieInfoBar from "./elements/MovieInfoBar";
import Actor from "./elements/Actor";
import Grid from "./elements/Grid";
import Spinner from "./elements/Spinner";

import { useMovieFetch } from "./hooks/useMovieFetch";

const Movie = ({ movieId }) => {
  const [state, loading, error] = useMovieFetch(movieId);
  console.log(state);
  return (
    <React.Fragment>
      <Navigation />
      <MovieInfo />
      <MovieInfoBar />
      <Grid>
        <Actor />
      </Grid>
      <Spinner />
    </React.Fragment>
  );
};
export default Movie;
