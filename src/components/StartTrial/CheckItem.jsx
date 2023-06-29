import { ReactComponent as CheckIcon } from "../../assets/images/icon-check.svg";

const CheckItem = ({ text }) => {
  return (
    <div className="flex gap-x-15 items-center text-12 tracking-2 text-grayish-blue">
      <CheckIcon />
      <p>{text}</p>
    </div>
  );
};

export default CheckItem;
