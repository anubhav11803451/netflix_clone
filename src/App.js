import "./App.css";
import Row from "./components/Row";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Requests from "./requests";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={Requests.fetchNetflixOriginals}
        isLargeRow
      ></Row>
      <Row title="Trending Now " fetchUrl={Requests.fetchTrending}></Row>
      <Row title="Top Rated" fetchUrl={Requests.fetchTopRated}></Row>
      <Row title="Action Movies" fetchUrl={Requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies" fetchUrl={Requests.fetchComedyMovies}></Row>
      <Row title="Horror Movies" fetchUrl={Requests.fetchHorrorMovies}></Row>
      <Row title="Romance Movies" fetchUrl={Requests.fetchRomanticMovies}></Row>
      <Row title="Documentaries" fetchUrl={Requests.fetchDocumentries}></Row>
    </div>
  );
}

export default App;
