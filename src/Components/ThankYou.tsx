import { GiFloatingPlatforms } from "react-icons/gi";

type Selected = {
  select: number;
  total: number;
};

const ThankYou = ({ select, total }: Selected) => {
  return (
    <section>
      <GiFloatingPlatforms />
      <div>
        You selected {select} out of {total}
      </div>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </section>
  );
};

export default ThankYou;
