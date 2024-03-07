import { LiaBookSolid } from "react-icons/lia";
import { FaUserEdit } from "react-icons/fa";
import { FaRegCalendarDays } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://127.0.0.1:4004/api/books")
      .then((res) => {
        setBooks(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-4">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        books.map((book) => (
          <div key={book._id} className="bg-white rounded-md p-3">
            <Link to={`/book/${book._id}`}>
              <h1 className="text-cyan-950 text-xl font-semibold mb-2  flex items-center gap-2">
                <LiaBookSolid size={20} />
                <span>{book.title}</span>
              </h1>
            </Link>
            <h2 className="text-cyan-800 text-lg font-semibold mb-2   flex items-center gap-2">
              <FaUserEdit size={20} />
              <span>{book.author}</span>
            </h2>
            <p className="flex items-center gap-2">
              <FaRegCalendarDays size={20} className="text-cyan-800" />
              <span>Published on : {book.publishYear}</span>
            </p>
            <div className="flex justify-end items-center gap-4 my-3">
              <Link
                to={`/book/update/${book._id}`}
                className="border-2 border-cyan-900 rounded-md py-2 px-4 text-cyan-900"
              >
                Edit
              </Link>
              <Link
                to={`/book/delete/${book._id}`}
                className="border-2 bg-cyan-900 border-cyan-900 rounded-md py-2 px-4 text-cyan-50"
              >
                Delete
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
