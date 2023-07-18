import { Route, Routes } from "react-router-dom";
import "./App.css";
import PostReview from "./components/PostReview";
import ReviewsHub from "./components/ReviewsHub";
import NavigationBar from "./components/NavigationBar";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <NavigationBar />
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
