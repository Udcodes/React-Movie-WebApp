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

  if (error) return <div>Something went wrong...</div>;
  if (loading) return <Spinner />;
  if (!loading) return " ";

  return (
    <>
      <Navigation movie={state.original_title} />
      <MovieInfo movie={state} />
      <MovieInfoBar time={state.runtime} budget={state.budget} revenue={state.revenue} />
      <Grid header="Actors">
        {state.actors.map(actor => (
          <Actor key={actor.credit_id} actor={actor} />
        ))}
      </Grid>
    </>
  );
};
export default Movie;
