import { children, createContext, useState, useEffect } from "react"

export const WatchListContext = createContext();


export const WatchListProvider = ({children}) => {
    const [watchlist, setWatchlist] = useState([]);
    const [genreList, setGenrelist] = useState([]);

    useEffect(() => {
     
      let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=f1b75daf26860aa82cb5b2bc1b5027c3`;

        fetch(url)
    .then((response)=> response.json())
    .then((data)=> setGenrelist(data.genres||[]));
    }, []);

const toggleWatchlist= (movie) => {
    const index= watchlist.findIndex((m)=> m.id === movie.id);

if(index=== -1){
    setWatchlist([...watchlist, movie]);
} else{
    setWatchlist([...watchlist.slice(0, index), ...watchlist.slice(index + 1)]);
}
};
  console.log("watchlist, watchlist");

    return(
        <WatchListContext.Provider value={{watchlist, toggleWatchlist, genreList}}>{children}</WatchListContext.Provider>
    );
};

