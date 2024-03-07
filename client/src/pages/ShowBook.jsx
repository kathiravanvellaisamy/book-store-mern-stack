import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
const ShowBook = () => {
  const [book, setBook] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    axios.get(`http://127.0.0.1:4004/api/books/${id}`).then((res) => {
      setBook(res.data);
      setIsLoading(false);
    });
  }, []);
  return (
    <section className="max-w-5xl mx-auto my-6 bg-white rounded-md p-5">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="max-w-2xl mx-auto my-12">
          <h1 className="text-center my-5 text-2xl text-cyan-800 font-semibold">
            {book._id}
          </h1>
          <div className="flex flex-col mb-6 px-3">
            <div className="bg-cyan-400 rounded-md py-2 px-2 text-xl">
              {book.title}
            </div>
          </div>
          <div className="flex flex-col mb-6 px-3">
            <div className="bg-cyan-400 rounded-md py-2 px-2 text-xl">
              {book.author}
            </div>
          </div>
          <div className="flex flex-col mb-6 px-3">
            <div className="bg-cyan-400 rounded-md py-2 px-2 text-xl">
              {book.publishYear}
            </div>
          </div>

          <div className="my-5 px-3">
            <Link
              to="/"
              className="bg-cyan-950 py-2 border-2 px-4 rounded-md text-white border-cyan-950 hover:bg-white hover:text-cyan-950 text-md font-semibold transition"
            >
              Go Back
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default ShowBook;
