import React from "react";

interface Props {
  datetimeString: string;
}

const DateTimeComponent: React.FC<Props> = ({ datetimeString }) => {
  const inputDate = new Date(datetimeString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  const formattedDate = inputDate.toLocaleDateString(undefined, options);

  return formattedDate;
};

export default DateTimeComponent;
