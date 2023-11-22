import { FC } from "react";
import { Button } from "./Button";
import { InputFile } from "./InputFile";
import { InputText } from "./InputText";
import { Selection } from "./Selection";
import { SwitchToggle } from "./SwitchToggle";
import { TextArea } from "./TextArea";

interface Props {
  onSubmit: () => void;
}

export const FormNewProduct: FC<Props> = ({ onSubmit }) => {
  return (
    <div className="flex self-stretch flex-col items-start gap-5">
      <div className="flex items-start gap-5 self-stretch">
        <div className="grid grid-cols-2 gap-5 w-full">
          <InputText label="Your product name" placeholder="Product name" />

          <InputText label="Menu code" placeholder="menu code" withGrayBorder />
        </div>
      </div>

      <Selection label="Category" />

      <TextArea
        label="Tell me more about your product"
        placeholder="Product description"
        isRequired
      />

      <div className="flex items-start gap-5 self-stretch">
        <div className="grid grid-cols-2 gap-4 w-full">
          <InputText
            type="number"
            label="Price"
            placeholder="Price"
            unit="NT$"
            isRequired
          />

          <InputText
            type="number"
            label="Discount price (optional)"
            placeholder="Discounted price"
            unit="NT$"
            withGrayBorder
          />
        </div>
      </div>

      <InputFile
        label="Image"
        placeholder="Select image"
        isRequired
        withGrayBorder
      />

      <SwitchToggle label="Enable Variant" />

      <Button onClick={onSubmit}>Add product</Button>
    </div>
  );
};
