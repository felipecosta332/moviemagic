const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export const WatchedSummary = ({ watched }) => {
    const avgImdbRating = watched ? average(watched.map((movie) => movie.imdbRating)) : 0;
    const avgUserRating = watched ? average(watched.map((movie) => movie.userRating)) : 0;
    const avgRuntime = watched ? average(watched.map((movie) => movie.runtime)) : 0;
    return (
      <div className="summary">
        <h2>Movies you watched</h2>
        <div>
          <p>
            <span>#️⃣</span>
            <span>{watched.length} movies</span>
          </p>
          <p>
            <span>⭐️</span>
            <span>{avgImdbRating.toFixed(2)}</span>
          </p>
          <p>
            <span>🌟</span>
            <span>{avgUserRating.toFixed(2)}</span>
          </p>
          <p>
            <span>⏳</span>
            <span>{Math.round(avgRuntime)} min</span>
          </p>
        </div>
      </div>
    );
  }