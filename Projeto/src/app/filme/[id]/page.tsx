import { notFound } from 'next/navigation';

interface MovieDetails {
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  genres: { id: number; name: string }[];
}

interface VideoResult {
  results: { key: string; type: string; site: string }[];
}

async function getMovieDetails(id: string): Promise<MovieDetails | null> {
  const API_KEY = 'd29e79bb675e164fc1f28decd659e21c';
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR`);
  if (!res.ok) return null;
  return res.json();
}

async function getMovieVideo(id: string): Promise<string | null> {
  const API_KEY = 'd29e79bb675e164fc1f28decd659e21c';
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=pt-BR`);
  if (!res.ok) return null;
  const data: VideoResult = await res.json();
  const trailer = data.results.find(v => v.type === 'Trailer' && v.site === 'YouTube');
  return trailer ? trailer.key : null;
}

export default async function MoviePage({ params }: { params: { id: string } }) {
  const movie = await getMovieDetails(params.id);
  const trailerKey = await getMovieVideo(params.id);

  if (!movie) return notFound();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black p-8 flex flex-col items-center">
      <h1 className="text-5xl font-extrabold text-center text-slate-100 mb-10 drop-shadow-lg">
        {movie.title}
      </h1>

      <div className="flex flex-col md:flex-row bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden w-full max-w-6xl">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full md:w-1/3 object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
        />

        <div className="p-8 text-slate-100 space-y-4 flex-1">
          <div className="flex flex-wrap gap-4 text-sm text-slate-300">
            <span className="bg-slate-800 px-3 py-1 rounded-full">{movie.release_date}</span>
            <span className="bg-slate-800 px-3 py-1 rounded-full">Nota: {movie.vote_average}</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {movie.genres.map(g => (
              <span key={g.id} className="bg-slate-700 px-3 py-1 text-xs rounded-full">
                {g.name}
              </span>
            ))}
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Sinopse</h2>
            <p className="text-justify text-slate-300">{movie.overview}</p>
          </div>
        </div>
      </div>

      {trailerKey ? (
        <div className="w-full max-w-5xl mt-12 rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            width="100%"
            height="500"
            src={`https://www.youtube.com/embed/${trailerKey}`}
            title="YouTube trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-[400px] md:h-[500px]"
          ></iframe>
        </div>
      ) : (
        <p className="text-slate-400 text-center mt-10">Trailer não disponível.</p>
      )}
    </div>
  );
}
