import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import ContentLoader from 'react-content-loader';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import image01 from '../assets/image01.jpg';
import image02 from '../assets/image02.jpg';
import image03 from '../assets/image03.jpg';
import image04 from '../assets/image04.jpg';
import image05 from '../assets/image05.jpg';
import image06 from '../assets/image06.jpg';
import image07 from '../assets/image07.jpg';
import image08 from '../assets/image08.jpg';
import image09 from '../assets/image09.jpg';
import image10 from '../assets/image10.jpg';
import image11 from '../assets/image11.jpg';
import image12 from '../assets/image12.jpg';
import image13 from '../assets/image13.jpg';
import image14 from '../assets/image14.jpg';
import image15 from '../assets/image15.jpg';
import image16 from '../assets/image16.jpg';

const images = [
  { id: 1, imageSrc: image01 },
  { id: 2, imageSrc: image02 },
  { id: 3, imageSrc: image03 },
  { id: 4, imageSrc: image04 },
  { id: 5, imageSrc: image05 },
  { id: 6, imageSrc: image06 },
  { id: 7, imageSrc: image07 },
  { id: 8, imageSrc: image08 },
  { id: 9, imageSrc: image09 },
  { id: 10, imageSrc: image10 },
  { id: 11, imageSrc: image11 },
  { id: 12, imageSrc: image12 },  
  { id: 13, imageSrc: image13 },
  { id: 14, imageSrc: image14 },
  { id: 15, imageSrc: image15 },
  { id: 16, imageSrc: image16 },
];

function useMediaQuery(query) {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleChange = () => setMatches(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [query]);

  return matches;
}

const ImageLoader = () => (
  <ContentLoader 
    speed={2}
    width={300}
    height={300}
    viewBox="0 0 300 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" width="300" height="300" />
  </ContentLoader>
);

// eslint-disable-next-line react/prop-types
export default function Gallery({ autoplayDelay = 5000 }) {
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const imageLoadPromises = images.map(({ imageSrc }) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = imageSrc;
        img.onload = () => resolve();
      });
    });

    Promise.all(imageLoadPromises).then(() => setLoading(false));
  }, []);

  const imagesPerPage = 8;
  const totalPages = Math.ceil(images.length / imagesPerPage);
  const paginatedImages = images.slice(currentPage * imagesPerPage, (currentPage + 1) * imagesPerPage);

  const nextPage = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:my-0 sm:py-8 lg:max-w-7xl lg:px-8">
        <h2 className="text-base font-semibold text-orange-600">Our Gallery</h2>
        <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-600 sm:text-5xl">
          Trailblazers in Pictures
        </p>
        <p className="m-6 text-lg text-gray-600">
          A collection of images from our various events and activities.
        </p>

        {isMobile ? (
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: autoplayDelay }}
            speed={800}
          >
            {images.map((gallery) => (
              <SwiperSlide key={gallery.id}>
                <div className="group relative">
                  {loading ? <ImageLoader /> : (
                    <motion.img
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}                      
                      src={gallery.imageSrc}
                      loading="lazy"
                      className="aspect-square w-full rounded-md bg-gray-200 object-cover"
                    />
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {paginatedImages.map((gallery) => (
                <div key={gallery.id} className="group relative">
                  {loading ? <ImageLoader /> : (
                    <motion.img
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      
                      src={gallery.imageSrc}
                      loading="lazy"
                      className="aspect-square w-full rounded-md bg-gray-200 object-cover lg:aspect-auto lg:h-80"
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center mt-6 space-x-4">
              <button onClick={prevPage} disabled={currentPage === 0} className="text-gray-600 hover:text-orange-600">
                <FaArrowLeft size={24} />
              </button>
              <span className="text-lg font-semibold">{currentPage + 1} / {totalPages}</span>
              <button onClick={nextPage} disabled={currentPage === totalPages - 1} className="text-gray-600 hover:text-orange-600">
                <FaArrowRight size={24} />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
