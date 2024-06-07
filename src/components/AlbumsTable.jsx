// components/AlbumsTable.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";

const AlbumsTable = ({ searchTerm }) => {
  const [albums, setAlbums] = useState([]);
  const [filteredAlbums, setFilteredAlbums] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((response) => {
        setAlbums(response.data);
        setFilteredAlbums(response.data);
      })
      .catch((error) => {
        console.error("Error fetching albums: ", error);
      });
  }, []);

  useEffect(() => {
    setFilteredAlbums(
      albums.filter((album) =>
        album.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, albums]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredAlbums.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-6 mt-6">
      <h2 className="text-3xl font-bold mb-4">Albums</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentItems.map((album) => (
          <div key={album.id} className="bg-white rounded-lg shadow-lg">
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Album {album.id}</h3>
              <p className="text-gray-700">{album.title}</p>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={filteredAlbums.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default AlbumsTable;
