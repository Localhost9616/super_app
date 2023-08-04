import React from 'react'

const Card2 = () => {
    const genre = new Map();
    genre.set('Action', 28);
    genre.set('Drama', 18);
    genre.set('Romance', 10749);
    genre.set('Thriller', 53);
    genre.set('Western', 37);
    genre.set('Horror', 27);
    genre.set('Fantasy', 14);
    genre.set('Music', 10402);
    genre.set('Fiction', 878);

    let category1 = genre.get(`${JSON.parse(localStorage.getItem('selectedTags'))[0]}`);
    let category2 = genre.get(`${JSON.parse(localStorage.getItem('selectedTags'))[1]}`);
    let category3 = genre.get(`${JSON.parse(localStorage.getItem('selectedTags'))[2]}`);

    const fetchMovies = async(genre, category)=>{
        const url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=81a0d82a8342d4b4220068edd4c0641f&language=en-US&page=1'
        const url2 = `https://api.themoviedb.org/3/discover/movie?api_key=81a0d82a8342d4b4220068edd4c0641f&language=en-US&sort_by=popularity.desc&with_genres=${genre}`
        const movieList = await fetch((genre === 9616) ? url : url2)
        const data = await movieList.json();
        const list = document.querySelectorAll(`.${category} > .cardsdiv > .card-2`);
        const set = new Set();
        while(set.size < 6){
          set.add(Math.floor(Math.random()*20));
        }
        const array = Array.from(set);
        console.log(data)
        for(let i=0;i<list.length;i++){
          list[i].style.background = `url(https://image.tmdb.org/t/p/original${data.results[array[i]].poster_path}) no-repeat center center / cover`
        }
    } 
    fetchMovies(category1, 'category1');
    fetchMovies(category2, 'category2');
    fetchMovies(category3, 'category3');
    fetchMovies(9616, 'category4');

  return (
    <div className='card-2' id='card-2'></div>
  )
}

export default Card2