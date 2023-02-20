import "../NotFound/notFound.css";

export function NotFound() {
  return (
    <div className="bod">
      <title>404 Not Found</title>
      <div className="containerX">
        <h1>404</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <a href="/home">Go back to homepage.</a>
      </div>
    </div>
  );
}
