import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import PostReview from "./components/PostReview";
import ReviewsHub from "./components/ReviewsHub";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<ReviewsHub />} />
        <Route path="/reviews/:category" element={<ReviewsHub />} />
        <Route path="/addReview/:review_id" element={<PostReview />} />
        <Route path="/*" element={<p className="error">404 not found</p>} />
      </Routes>
    </div>
  );
}

export default App;
