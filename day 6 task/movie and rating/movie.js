class all_movie {
    constructor(title, studio, rating) {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    getrating() {
      return "the rating is  " + this.rating;
    }
  }
  
  
 
   
  class movie {
      constructor(title, studio, rating){
          this.title = title;
          this.studio = studio;
          this.rating = "PG";
      }
  }
  
 
  let CasinoRoyale = new movie( "Casino Royal", "Eon Productions", "PG13");