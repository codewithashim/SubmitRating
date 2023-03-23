import React, { useState } from "react";
import Swal from "sweetalert2";

type Select = {
  total: number;
};

const RatingCard = ({ total }: Select) => {
  const listItem: Array<number> = [1, 2, 3, 4, 5];
  const [selectedValue, setSelectedValue] = useState<number>(0);

  const handleButtonClick = (value: number) => {
    setSelectedValue(value);
  };

  console.log(selectedValue , "clickd")

  const handelRatingSubmit = () => {
    if (selectedValue > 0) {
      console.log(selectedValue);

      Swal.fire({
        title: "Thank you for your ratings",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <section>
      <div className="CardBody">
        <div className="CardHead">
          <h2>How did we do?</h2>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>
        <div className="CardBody">
          <div>
            {listItem.map((item, index) => {
              return (
                <button
                  key={index}
                  className="inputRatigStyle"
                  onClick={() => handleButtonClick(index + 1)}
                >
                  {item}
                </button>
              );
            })}
          </div>
          <button className="submitBtn" onClick={() => handelRatingSubmit()}>
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default RatingCard;
