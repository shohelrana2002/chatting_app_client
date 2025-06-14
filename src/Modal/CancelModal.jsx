import Modal from "react-modal";
import { X } from "lucide-react";

Modal.setAppElement("#root");

const CancelModal = ({ isOpen, onRequestClose, onConfirm }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Cancel Modal"
      className="bg-amber-300 p-6 max-w-sm mx-auto mt-40 rounded-xl shadow-lg relative outline-none"
    >
      <button
        onClick={onRequestClose}
        className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
      >
        <X size={20} />
      </button>

      <h2 className="text-xl font-semibold mb-4">Are you sure?</h2>
      <p className="mb-6 text-gray-600">
        Do you really want to cancel this request? This action cannot be undone.
      </p>

      <div className="flex justify-end gap-3">
        <button
          onClick={onRequestClose}
          className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
        >
          No
        </button>
        <button
          onClick={onConfirm}
          className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600"
        >
          Yes, Cancel
        </button>
      </div>
    </Modal>
  );
};

export default CancelModal;
