import { h } from "preact";
import { useState } from "preact/hooks";
import Flicking from "@egjs/preact-flicking";
import "@egjs/preact-flicking/dist/flicking.css";

export default function ReviewCarousel({ reviews }) {
  return (
    <>
      <div className="flex flex-row justify-center items-center w-full">
        <div className={"w-5/6"}>
          <Flicking
            align="prev"
            circularFallback={"bound"}
            circular={true}
            hideBeforeInit={true}
            firstPanelSize="200px"
          >
            {reviews.map((rev) => (
              <div className="flex flex-col p-6 md:w-96 w-80 shadow-md border rounded-sm m-2 bg-white">
                <h3 className="font-semibold">{rev.customerName}</h3>
                <p className={"font-light text-gray-700"}>{rev.reviewText}</p>
              </div>
            ))}
          </Flicking>
        </div>
      </div>
    </>
  );
}
