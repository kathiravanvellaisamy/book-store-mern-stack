import Header from "./components/Header";
import CreateBook from "./pages/CreateBook";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowBook from "./pages/ShowBook";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="bg-cyan-400 min-h-screen">
        <div className="max-w-5xl mx-auto px-6 py-2">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/book/create" element={<CreateBook />} />
            <Route path="/book/:id" element={<ShowBook />} />
            <Route path="/book/update/:id" element={<EditBook />} />
            <Route path="/book/delete/:id" element={<DeleteBook />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
