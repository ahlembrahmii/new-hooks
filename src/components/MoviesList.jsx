import MovieCard from "./MovieCard/MovieCard";


const MoviesList = (props) =>  {
    return(
        <div>
          {props.moviesList.map((data,i)=>(
              <MovieCard name = {data.name}
                       rating= {data.rating}
                        description = {data.description}
                        type= {data.type}
                        image={data.image}
                        date={data.date}
                        key={i}
                     
                />
          ))}
        </div>
    )
}

export default MoviesList;