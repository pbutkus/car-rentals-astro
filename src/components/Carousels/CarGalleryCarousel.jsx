import { useState } from "preact/hooks";

export default function CarGalleryCarousel({ photos }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(photos.length - 1);
  const [nextIndex, setNextIndex] = useState(1);

  const handlePrev = () => {
    if (prevIndex == 0) {
      setPrevIndex(photos.length - 1);
      setCurrentIndex(0);
      setNextIndex(1);
    } else {
      setNextIndex(currentIndex);
      setCurrentIndex(prevIndex);
      setPrevIndex(prevIndex - 1);
    }

    console.log(prevIndex);
  };

  const handleNext = () => {
    if (nextIndex == photos.length - 1) {
      setCurrentIndex(photos.length - 1);
      setPrevIndex(photos.length - 2);
      setNextIndex(0);
    } else {
      setPrevIndex(currentIndex);
      setCurrentIndex(nextIndex);
      setNextIndex(nextIndex + 1);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center w-full">
        <div>
          <div className={"flex flex-row overflow-auto"}>
            <div className={"w-full h-auto relative"}>
              <button
                onClick={handlePrev}
                className={"absolute top-0 bottom-0 my-auto mx-0 left-0"}
              >
                <svg
                  class="h-10 w-10 bg-white/50 hover:bg-white/70 transition"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.41 18.16L8.75 12.5l5.66-5.66l.7.71l-4.95 4.95l4.95 4.95l-.7.71Z"></path>
                </svg>
              </button>
              <img
                className="pointer-events-none object-cover aspect-video h-96 w-full"
                src={photos[currentIndex]}
                alt="null"
              />
              <button
                onClick={handleNext}
                className={"absolute top-0 bottom-0 my-auto mx-0 right-0"}
              >
                <svg
                  class="w-10 h-10 bg-white/50 hover:bg-white/70 transition"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="m8.59 18.16l5.66-5.66l-5.66-5.66l-.7.71l4.95 4.95l-4.95 4.95l.7.71Z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
