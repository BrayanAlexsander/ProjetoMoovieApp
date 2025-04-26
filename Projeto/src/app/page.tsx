'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Movie {
  id: number;
  title: string;
  original_title: string;
  poster_path: string;
  vote_average: number;
}

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');
  const [yearFilter, setYearFilter] = useState('');
  const [popularityFilter, setPopularityFilter] = useState('');

  const API_KEY = 'd29e79bb675e164fc1f28decd659e21c';
  const BASE_URL = 'https://api.themoviedb.org/3';

  useEffect(() => {
    fetchMovies(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=pt-BR&page=1`);
  }, []);

  async function fetchMovies(url: string) {
    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.results);
  }

  function applyFilters() {
    let url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=pt-BR&sort_by=popularity.desc`;

    if (ratingFilter === 'high') url += '&vote_average.gte=7.5';
    if (ratingFilter === 'medium') url += '&vote_average.gte=5&vote_average.lte=7.4';
    if (ratingFilter === 'low') url += '&vote_average.lte=5';

    if (yearFilter) url += `&primary_release_year=${yearFilter}`;

    if (popularityFilter === 'high') url += '&sort_by=popularity.desc';
    if (popularityFilter === 'low') url += '&sort_by=popularity.asc';

    fetchMovies(url);
  }

  function handleSearchInput(e: React.ChangeEvent<HTMLInputElement>) {
    const query = e.target.value;
    setSearchQuery(query);

    fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=pt-BR`)
      .then(res => res.json())
      .then(data => setMovies(data.results));
  }

  return (
    <div className="min-h-screen flex bg-gradient-to-b from-slate-900 via-slate-950 to-black">
      
      {/* Sidebar de Filtros */}
      <aside className="w-full md:w-1/4 lg:w-1/5 p-6 bg-slate-800/70 backdrop-blur-md rounded-r-3xl shadow-2xl">
        <h2 className="text-2xl font-bold text-blue-200 mb-6 text-center">🎯 Filtros</h2>
        
        <div className="space-y-4">
          <input
            type="text"
            placeholder="🔍 Buscar filme..."
            value={searchQuery}
            onChange={handleSearchInput}
            className="w-full p-3 rounded-lg bg-slate-700 text-blue-100 placeholder-blue-300 focus:ring-2 focus:ring-blue-300 outline-none"
          />

          <select
            value={ratingFilter}
            onChange={(e) => { setRatingFilter(e.target.value); applyFilters(); }}
            className="w-full p-3 rounded-lg bg-slate-700 text-blue-100 focus:ring-2 focus:ring-blue-300 outline-none cursor-pointer"
          >
            <option value="">⭐ Avaliação</option>
            <option value="high">Altas</option>
            <option value="medium">Médias</option>
            <option value="low">Baixas</option>
          </select>

          <select
            value={yearFilter}
            onChange={(e) => { setYearFilter(e.target.value); applyFilters(); }}
            className="w-full p-3 rounded-lg bg-slate-700 text-blue-100 focus:ring-2 focus:ring-blue-300 outline-none cursor-pointer"
          >
            <option value="">📅 Ano</option>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>

          <select
            value={popularityFilter}
            onChange={(e) => { setPopularityFilter(e.target.value); applyFilters(); }}
            className="w-full p-3 rounded-lg bg-slate-700 text-blue-100 focus:ring-2 focus:ring-blue-300 outline-none cursor-pointer"
          >
            <option value="">🔥 Popularidade</option>
            <option value="high">Mais populares</option>
            <option value="low">Menos populares</option>
          </select>
        </div>
      </aside>

      {/* Conteúdo Principal */}
      <main className="flex-1 p-8">
        <header className="mb-8 text-center">
          <h1 className="text-5xl font-extrabold text-blue-200 drop-shadow-lg">🎬 Catálogo de Filmes</h1>
          <p className="text-blue-400 mt-2">Explore os filmes mais aclamados e populares!</p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {movies.map((movie) => (
            <Link
              href={`/filme/${movie.id}`}
              key={movie.id}
              className="bg-slate-800/50 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:scale-105 hover:bg-slate-800/70 transition-transform duration-300 ease-in-out group"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-80 object-cover group-hover:opacity-80 transition-opacity duration-300"
              />
              <div className="p-4 text-blue-100 space-y-2">
                <h3 className="text-lg font-bold">{movie.title}</h3>
                <p className="text-sm text-blue-400">⭐ Nota: {movie.vote_average}</p>
              </div>
            </Link>
          ))}
        </section>
      </main>

    </div>
  );
}
