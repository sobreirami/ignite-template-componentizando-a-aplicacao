import React from 'react';

import { MovieCard } from './MovieCard';

interface ContentProps {
  movie: MovieProps
}

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

const Content: React.FC<ContentProps> = ({ movie }) => {
  return (
    <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
  );
}

export default Content;