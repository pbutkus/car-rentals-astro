import { h } from "preact";
import { useState } from "preact/hooks";
import Flicking from "@egjs/preact-flicking";
import "@egjs/preact-flicking/dist/flicking.css";

export default function ReviewCarousel({ reviews }) {
  const [review, setReview] = useState(reviews[0]);

  const prevReview = () => {
    if (reviews.indexOf(review) > 0) {
      return reviews[reviews.indexOf(review) - 1];
    } else {
      return reviews[reviews.length - 1];
    }
  };

  const nextReview = () => {
    if (reviews.indexOf(review) < reviews.length - 1) {
      return reviews[reviews.indexOf(review) + 1];
    } else {
      return reviews[0];
    }
  };

  return (
    <>
      <div className="flex flex-row justify-center items-center w-full">
        {/* <button onClick={() => setReview(prevReview())}>PREV</button> */}
        <div className={" w-5/6"}>
          <Flicking
            align="prev"
            circularFallback={"bound"}
            circular={true}
            hideBeforeInit={true}
            firstPanelSize="200px"
          >
            {reviews.map((rev) => (
              <div className="flex flex-col p-6 md:w-96 w-80 shadow-md border rounded-sm m-2">
                <h3 className="font-semibold">{rev.customerName}</h3>
                <p className={"font-light text-gray-700"}>{rev.reviewText}</p>
              </div>
            ))}
          </Flicking>
        </div>
        {/* <button onClick={() => setReview(nextReview())}>NEXT</button> */}
      </div>
    </>
  );
}

// export default function ReviewCarousel({ reviews }) {
//   const [panels, setPanels] = useState([0, 1, 2, 3, 4]);

//   return (
//     <>
//       <Flicking renderOnlyVisible={true}>
//         {panels.map((index) => (
//           <div className="p-10" key={index}>
//             {index + 1}
//           </div>
//         ))}
//       </Flicking>
//       <div className="flex justify-center">
//         <span
//           className="button mr-2 is-info is-outlined"
//           onClick={() => setPanels([panels[0] - 1, ...panels])}
//         >
//           Prepend
//         </span>
//         <span
//           className="button mr-2 is-info is-outlined"
//           onClick={() => setPanels([...panels, panels[panels.length - 1] + 1])}
//         >
//           Append
//         </span>
//       </div>
//     </>
//   );
// }
