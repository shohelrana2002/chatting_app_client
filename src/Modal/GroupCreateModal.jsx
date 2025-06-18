import Modal from "react-modal";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { imageUpload } from "../Api/utils";

Modal.setAppElement("#root");

const GroupCreateModal = ({ isOpen, onRequestClose, onConfirm }) => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Modal বন্ধ হলে ফর্ম রিসেট হবে aaa
  useEffect(() => {
    if (!isOpen) {
      reset();
      setLoading(false);
    }
  }, [isOpen, reset]);

  const onSubmit = async (data) => {
    if (!data.imageFile || data.imageFile.length === 0) {
      alert("Please select an image.");
      return;
    }

    setLoading(true);
    try {
      const groupData = {
        groupName: data.groupName,
        imageFile: data.imageFile[0],
      };

      // ছবি আপলোড ফাংশন (তোমার Api/utils এর imageUpload ফাংশন)
      const url = await imageUpload(groupData.imageFile);
      console.log("Uploaded image URL:", url);

      // parent component এ ডাটা পাঠাও
      onConfirm({ ...groupData, imageUrl: url });

      reset();
      onRequestClose();
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Something went wrong while uploading the image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => {
        if (!loading) onRequestClose();
      }}
      contentLabel="Create Group"
      className="bg-white w-full max-w-md mx-auto mt-40 rounded-2xl shadow-lg p-6 relative outline-none"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      {/* Close Icon */}
      <button
        onClick={() => {
          if (!loading) onRequestClose();
        }}
        className="absolute top-4 right-4 text-gray-400 hover:text-red-500"
        disabled={loading}
      >
        <X size={22} />
      </button>

      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Create New Group
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Group Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Group Name
          </label>
          <input
            {...register("groupName", { required: "Group name is required" })}
            type="text"
            placeholder="Enter group name"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            disabled={loading}
          />
          {errors.groupName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.groupName.message}
            </p>
          )}
        </div>

        {/* Group Image */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Group Image
          </label>
          <input
            type="file"
            accept="image/*"
            {...register("imageFile", { required: "Group image is required" })}
            className="w-full text-sm text-gray-600"
            disabled={loading}
          />
          {errors.imageFile && (
            <p className="text-red-500 text-sm mt-1">
              {errors.imageFile.message}
            </p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={() => {
              if (!loading) onRequestClose();
            }}
            className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
            disabled={loading}
          >
            Cancel
          </button>
          <button
            disabled={loading}
            type="submit"
            className={`px-4 py-2 rounded text-white ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Creating..." : "Create"}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default GroupCreateModal;
