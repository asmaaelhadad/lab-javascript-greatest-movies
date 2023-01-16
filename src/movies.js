// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
return moviesArray.map(movie => movie.director) ;

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
   const ssMovies =moviesArray.filter(function(movie){ 

       if (movie.director=== 'Steven Spielberg' && movie.genre.includes('Drama')) {

        return movie;
       }

     } )

//console.log('ssMovies', ssMovies) ;
return ssMovies.length ;

}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

if (moviesArray.length >0){
    let sum= 0;
for (let i =0 ; i< moviesArray.length ;i++ ){
if(moviesArray[i].score){
    sum += moviesArray[i].score ;
}}
let average = sum / moviesArray.length ;
//return average ;
console.log(average);
return +average.toFixed(2);
}
else {return 0;}


/*let sum2 = moviesArray.reduce ((acc , crr) =>{  

    if(crr.score){
      return  acc+ crr.score ;} 
       else {return acc;}
}, 0) }

let average = sum2 / moviesArray.length ;
return +average.toFixed(2);
else {return 0;}*/
}





// Iteration 4: Drama movies - Get the average of Drama Movies
/*function dramaMoviesScore(moviesArray) {
    if (moviesArray.length >0){
        let sum1= 0;
        if (moviesArray.genre){}
    for (let i =0 ; i< moviesArray.length ;i++ ){
    if(moviesArray[i].drama){
        sum1 += moviesArray[i].score ;

    }}}
    let average = sum1 / moviesArray.length ;
    //return average ;
   // console.log(average);
    return +average.toFixed(2);
    
}}
    
    else {return 0;}
}*/

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
