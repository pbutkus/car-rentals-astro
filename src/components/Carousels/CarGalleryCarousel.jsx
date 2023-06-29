import { Component, createRef } from "preact";

export default class CarGalleryCarousel extends Component {
  constructor(props) {
    super(props);
    this.photos = this.props.photos;
    this.state = {
      animationRunning: false,
      currentIndex: 0,
      prevIndex: this.props.photos.length - 1,
      nextIndex: 1,
      currentClass: "",
      prevClass: "opacity-0",
      nextClass: "opacity-0",
      imgWidth: 600,
    };
    this.carouselContainerRef = createRef();
  }

  componentDidMount() {
    this.setState({
      imgWidth: this.carouselContainerRef.current.clientWidth + 10,
    });
  }

  handlePrev = () => {
    if (!this.state.animationRunning) {
      this.setState({
        animationRunning: true,
        currentClass: "translate-x-full transition-all duration-500 opacity-0",
        prevClass: "translate-x-full transition-all duration-500 opacity-1",
        nextClass: "translate-x-full transition-all duration-500",
      });
      setTimeout(() => {
        if (this.state.prevIndex == 0) {
          this.setState({
            prevIndex: this.photos.length - 1,
            currentIndex: 0,
            nextIndex: 1,
          });
        } else {
          this.setState({
            nextIndex: this.state.currentIndex,
            currentIndex: this.state.prevIndex,
            prevIndex: this.state.prevIndex - 1,
          });
        }
        this.setState({
          animationRunning: false,
          currentClass: "",
          prevClass: "opacity-0",
          nextClass: "opacity-0",
        });
      }, 500);
    }
  };

  handleNext = () => {
    if (!this.state.animationRunning) {
      this.setState({
        animationRunning: true,
        currentClass: "-translate-x-full transition-all duration-500 opacity-0",
        prevClass: "-translate-x-full transition-all duration-500 opacity-1",
        nextClass: "-translate-x-full transition-all duration-500",
      });
      setTimeout(() => {
        if (this.state.nextIndex == this.photos.length - 1) {
          this.setState({
            currentIndex: this.photos.length - 1,
            prevIndex: this.photos.length - 2,
            nextIndex: 0,
          });
        } else {
          this.setState({
            prevIndex: this.state.currentIndex,
            currentIndex: this.state.nextIndex,
            nextIndex: this.state.nextIndex + 1,
          });
        }
        this.setState({
          animationRunning: false,
          currentClass: "",
          prevClass: "opacity-0",
          nextClass: "opacity-0",
        });
      }, 500);
    }
  };

  render() {
    return (
      <>
        <div
          id={"carousel-container"}
          ref={this.carouselContainerRef}
          className="flex justify-center items-center w-full"
        >
          <div className={"flex flex-row overflow-hidden w-full"}>
            <div className={"flex flex-row h-auto relative justify-center"}>
              <img
                className={
                  "pointer-events-none object-cover aspect-video h-96 " +
                  this.state.prevClass
                }
                src={this.props.photos[this.state.prevIndex]}
                width="1500px"
              />
              <img
                className={
                  "pointer-events-none object-cover aspect-video h-96 " +
                  this.state.currentClass
                }
                src={this.props.photos[this.state.currentIndex]}
                width="1500px"
              />
              <img
                className={
                  "pointer-events-none object-cover aspect-video h-96 " +
                  this.state.nextClass
                }
                src={this.props.photos[this.state.nextIndex]}
                width="1500px"
              />
              <button
                onClick={this.handlePrev}
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
              <button
                onClick={this.handleNext}
                className={"absolute z-50 top-0 bottom-0 my-auto mx-0 right-0"}
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
      </>
    );
  }
}
