import React, { useEffect, useState } from 'react';
import { Searchbar } from "./Searchbar/Searchbar";
import { fetchImages } from "./Api/fetchImages";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";
import { Modal } from "./Modal/Modal";


export const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentSearch, setCurrentSearch] = useState('');
  const [pageNr, setPageNr] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState('');
  const [modalAlt, setModalAlt] = useState('');

  useEffect(() => {
    if (!pageNr) {
      return
    }
    const getImages = async () => {
      try {
        setIsLoading(true);
        const response = await fetchImages(currentSearch, pageNr);
        setImages(prevArray => [...prevArray, ...response]);
      } catch (error) {
        alert(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getImages();
  }, [currentSearch, pageNr]);


  const handleSubmit = async e => {
    e.preventDefault();
    const inputForSearch = e.target.elements.inputForSearch.value;
    if (inputForSearch.trim() === '' || inputForSearch === currentSearch) {
      return;
    }
    setCurrentSearch(inputForSearch);
    setPageNr(1);
    setImages([]);
  };


  const handleClickMore = async () => {
    setPageNr(pageNr + 1);
  };


  const handleImageClick = e => {
    setModalOpen(true);
    setModalAlt(e.target.alt);
    setModalImg(e.target.name);
  };


  const handleModalClose = () => {
    setModalOpen(false);
    setModalImg('');
    setModalAlt('');
  };


  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        handleModalClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: '16px',
        paddingBottom: '24px',
      }}
    >
      {isLoading && (pageNr === 1)? (
        <Loader />
      ) : (
        <React.Fragment>
          <Searchbar onSubmit={handleSubmit} />
          <ImageGallery
            onImageClick={handleImageClick}
            images={images}
            />
          {isLoading && (pageNr >= 2) ? <Loader /> : null}
          {images.length > 0 ? (
            <Button onClick={handleClickMore} />
          ) : null}
        </React.Fragment>
      )}
      {modalOpen ? (
        <Modal
          src={modalImg}
          alt={modalAlt}
          handleClose={handleModalClose}
        />
      ) : null}
    </div>
  )
};
