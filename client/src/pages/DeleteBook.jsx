import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner";
import { useSnackbar } from "notistack";

const DeleteBook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const { id } = useParams();

  const handleDelete = () => {
    setIsLoading(true);
    axios
      .delete(`http://127.0.0.1:4004/api/books/${id}`)
      .then(() => {
        setIsLoading(false);
        enqueueSnackbar("Book Deleted Successfully...");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section className="max-w-3xl mx-auto my-6 bg-white rounded-md p-5">
      * {isLoading ? <LoadingSpinner /> : ""}
      <div className="flex flex-col justify-center items-center gap-2 my-12">
        <h2 className="py-2 text-xl text-cyan-950 font-semibold">
          Are you sure you want to delete ?
        </h2>
        <div className="flex gap-5 items-center">
          <button
            onClick={handleDelete}
            className="bg-cyan-900 text-white py-2 px-4 rounded-md border-2 border-cyan-900"
          >
            Delete
          </button>
          <Link
            to="/"
            className="bg-white text-cyan-900 py-2 px-4 rounded-md border-2 border-cyan-900"
          >
            Cancel
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DeleteBook;
