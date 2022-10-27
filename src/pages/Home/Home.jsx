import "./home.css";
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";

const dummyCoverImages = [
  "https://www.arthipo.com/image/cache/catalog/poster/movie/1-758/pfilm209-movie-film-poster-batman-begins_5b951e0b-1000x1000.jpg",
  "https://wallpaperaccess.com/full/1264756.jpg",
  "https://i.pinimg.com/originals/cd/78/0a/cd780a7de444b557dce522ce14eb3388.jpg",
];

function Home() {
  return (
    <>
      <Header />
      <Slider images={dummyCoverImages} />
    </>
  );
}

export default Home;
