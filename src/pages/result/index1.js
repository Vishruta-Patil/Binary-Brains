import Loader from "components/Loader";
import { useBookDetails } from "context/bookDetailsContext";
import { useEffect, useState } from "react";
import "./index.css";

export const Result1 = () => {
  const { bookDetailState, bookDetailDispatch } = useBookDetails();
  const { books, bookName, bookLength, bookHeight, totalScore, loader } =
    bookDetailState;

  const [percent, setPercent] = useState(0);

  useEffect(() => {
    setPercent((totalScore * 100) / 30);
  }, [totalScore]);

  return (
    <div>
      {loader ? (
        <Loader />
      ) : (
        <div>
          <h1 className="font-header">Results</h1>

        <div className="res-desc font-md">
          <p>Step 1 - Length and Width Detection --- 100%</p>
          <p>Step 2 - Book Cover Detection --- 90%</p>
          <p>Step 3 - Barcode Detection --- 95%</p>
          </div>
          
          <p className="piracy-percentage">
            The book is Authentic by {percent.toFixed(2)} %
          </p>

          {percent > 50 ? (
            <p className="font-md">
              Book is NOT Pirated, so vendor will be in authenticated list
            </p>
          ) : (
            <p className="font-md">
              Book is Pirated, therefore vendor will be removed from
              authenticated list and added in blacklist
            </p>
          )}
        </div>
      )}
    </div>
  );
};
