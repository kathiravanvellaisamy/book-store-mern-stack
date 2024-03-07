import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import { useSnackbar } from "notistack";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://127.0.0.1:4004/api/books/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setAuthor(res.data.author);
        setPublishYear(res.data.publishYear);
        setIsLoading(false);
      })
      .catch((err) => {
        alert("Oops! Check console");
        console.log(err);
      });
  }, []);
  const handleEditBook = (e) => {
    e.preventDefault();
    const data = {
      title,
      author,
      publishYear,
    };
    setIsLoading(true);
    axios
      .put(`http://127.0.0.1:4004/api/books/${id}`, data)
      .then(() => {
        setIsLoading(false);
        enqueueSnackbar("Book Edited Successfully...");
        navigate("/");
      })
      .catch((err) => {
        setIsLoading(false);
        alert("error, Please check the console");
        console.log(err);
      });
  };

  return (
    <section className="max-w-3xl mx-auto my-6 bg-white rounded-md p-5">
      {isLoading ? <LoadingSpinner /> : ""}
      <form onSubmit={handleEditBook} className="w-full my-4">
        <div className="flex flex-col mb-3 px-3">
          <label htmlFor="" className="text-cyan-900 text-md font-medium mb-2">
            Book Title
          </label>
          <input
            type="text"
            name=""
            id=""
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-cyan-400 rounded-md py-2 px-2"
          />
        </div>
        <div className="flex flex-col mb-3 px-3">
          <label htmlFor="" className="text-cyan-900 text-md font-medium mb-2">
            Book Author
          </label>
          <input
            type="text"
            name=""
            id=""
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="bg-cyan-400 rounded-md py-2 px-2"
          />
        </div>
        <div className="flex flex-col mb-3 px-3">
          <label htmlFor="" className="text-cyan-900 text-md font-medium mb-2">
            Published On
          </label>
          <input
            type="number"
            name=""
            id=""
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="bg-cyan-400 rounded-md py-2 px-2"
          />
        </div>

        <div className="mb-3 px-3">
          <button className="bg-cyan-950 py-2 border-2 px-4 rounded-md text-white border-cyan-950 hover:bg-white hover:text-cyan-950 text-md font-semibold transition">
            Save Book
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditBook;
