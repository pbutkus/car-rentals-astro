import Flicking, { ViewportSlot } from "@egjs/preact-flicking";
import "@egjs/preact-flicking/dist/flicking.css";
import { Arrow, Fade } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/arrow.css";

export default function CarGalleryCarousel({ photos }) {
  const _plugins = [new Arrow()];

  return (
    <>
      <div className="flex justify-center items-center w-full">
        <div>
          <Flicking align="center" circular={true} plugins={_plugins}>
            {photos.map((photo) => (
              <div className={"w-full h-auto"}>
                <img
                  className="pointer-events-none object-cover aspect-video h-96 w-full"
                  src={photo}
                  alt="null"
                />
              </div>
            ))}
            <ViewportSlot>
              <span className="flicking-arrow-prev is-thin hover:bg-white/90 bg-white/70 rounded-full before:bg-black after:bg-black transition"></span>
              <span className="flicking-arrow-next is-thin hover:bg-white/90 bg-white/70 rounded-full before:bg-black after:bg-black transition"></span>
            </ViewportSlot>
          </Flicking>
        </div>
      </div>
    </>
  );
}
