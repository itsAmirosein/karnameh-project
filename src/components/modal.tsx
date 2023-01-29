import { ModalProps } from "./types";
import { FaTimes } from "react-icons/fa";
import Button from "./button";
import { persianTranslate } from "dictionary/persianTranslate";

function Modal({ content, onCancel, onClose, onConfirm, title }: ModalProps) {
  return (
    <div className="w-full border h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
      <div className="w-[700px] h-[440px] bg-white rounded-lg">
        <div className="border-b flex justify-between items-center p-4">
          <div className="flex items-center">
            <FaTimes onClick={onClose} className='cursor-pointer' />
          </div>
          <div className="flex items-center">{title}</div>
        </div>
        <div className="p-4 bg-smook-2">{content}</div>
        <div className="flex items-center justify-start p-4 bg-smook-2 rounded-lg">
          <div className="pr-2">
            <Button
              title={persianTranslate.home.createQuestion}
              variant="fill"
              onClick={onConfirm}
            />
          </div>
          <div className="pl-2">
            <Button
              title={persianTranslate.home.cancel}
              variant="plain"
              onClick={onCancel}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
