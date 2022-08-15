export class Movie {
  id: number;
  title: string;
  genre: string;
  year: number;

  constructor(id: number, title: string, genre: string, year: number){
    this.id = id;
    this.title = title;
    this.genre = genre;
    this.year = year;
  }

  showMovie(): string{
    return "(" + this.id + ") " + this.title + " - " + this.genre + " (" + this.year + ")";
  }
}
