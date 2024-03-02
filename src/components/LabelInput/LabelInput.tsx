import React from "react";
import * as S from "./styleLabelInput";

interface LabelInputProps {
  name: string;
  type: string;
  children: React.ReactNode;
  value?: number | string;
  onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  focus?: React.RefObject<HTMLInputElement>;
}

function LabelInput({
  name,
  children,
  type,
  value,
  onchange,
  focus,
}: LabelInputProps) {
  return (
    <S.ContentLabelInput>
      <label htmlFor={name}>{children}</label>
      <input
        type={type}
        name={name}
        required
        ref={focus}
        value={value}
        onChange={onchange}
      />
    </S.ContentLabelInput>
  );
}

export default LabelInput;
