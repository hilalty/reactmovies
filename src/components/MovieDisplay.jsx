export function MovieDisplay({movie}) {
    const Loaded = () => {
        return (
            <div>
                <h4>{movie.Title}</h4>
                <h4>{movie.Genre}</h4>
                <img style={{width: "50w"}} src={movie.Poster} alt={movie.Title} />
                <p>{movie.Year}</p>
               
            </div>
        )
    };

    const Loading = () => {
        return <></>;
    };
    return movie ? <Loaded/> : <Loading/>;
}