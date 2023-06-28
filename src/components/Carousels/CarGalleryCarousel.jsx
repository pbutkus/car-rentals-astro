import Flicking, { ViewportSlot } from "@egjs/preact-flicking";
import "@egjs/preact-flicking/dist/flicking.css";
import { Arrow, Fade } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/arrow.css";

export default function CarGalleryCarousel({ photos }) {
  const _plugins = [new Arrow()];

  return (
    <>
      <div className="flex flex-row justify-center items-center w-full">
        <div className={"w-5/6"}>
          <Flicking align="center" circular={true} plugins={_plugins}>
            {photos.map((photo) => (
              <div className={"card-panel w-10/12 h-96"}>
                <img
                  className="pointer-events-none object-cover aspect-video"
                  src={photo}
                  alt="null"
                />
              </div>
            ))}
            <ViewportSlot>
              <span className="flicking-arrow-prev before:bg-white after:bg-white"></span>
              <span className="flicking-arrow-next before:bg-white after:bg-white"></span>
            </ViewportSlot>
          </Flicking>
        </div>
      </div>
    </>
  );
}
