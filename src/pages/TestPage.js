import { StarRating } from "../components";
import { Test } from "../components";

export const TestPage = () => {
  return (
    <>
      <StarRating
        maxRating={5}
        messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      />
      <StarRating size={24} color="red" className="test" defaultRating={2} />
      <Test />
    </>
  );
};
