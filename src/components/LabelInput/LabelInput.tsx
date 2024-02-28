import React from "react";
import * as S from "./styleLabelInput";

interface LabelInputProps {
  name: string;
  type: string;
  ref?: React.MutableRefObject<null>;
  children: React.ReactNode;
  value?: any;
  onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function LabelInput({
  name,
  children,
  type,
  value,
  onchange,
}: LabelInputProps) {
  return (
    <S.ContentLabelInput>
      <label htmlFor={name}>{children}</label>
      <input
        type={type}
        name={name}
        required
        value={value}
        onChange={onchange}
      />
    </S.ContentLabelInput>
  );
}

export default LabelInput;
