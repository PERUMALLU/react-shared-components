import React from "react";

export interface Props {
  label: string;
}

const TopBanner = (props: Props) => {
  return <button>{props.label}</button>;
};

export default TopBanner;