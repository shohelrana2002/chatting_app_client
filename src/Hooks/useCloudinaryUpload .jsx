import { useCallback, useEffect, useState } from "react";

const useCloudinaryUpload = () => {
  const [widgetReady, setWidgetReady] = useState(false);

  // Load the Cloudinary script dynamically
  useEffect(() => {
    if (window.cloudinary) {
      setWidgetReady(true);
      return;
    }

    const script = document.createElement("script");
    script.src = `https://upload-widget.cloudinary.com/latest/global/all.js`;
    script.async = true;
    script.onload = () => {
      setWidgetReady(true);
    };
    script.onerror = () => {
      console.error("Failed to load Cloudinary widget.");
    };

    document.body.appendChild(script);
  }, []);

  const handleUpload = useCallback(
    (onSuccess) => {
      if (!widgetReady || !window.cloudinary) {
        console.error("Cloudinary widget not ready yet.");
        return;
      }
      //   gYAb_VW362_HzREi8WbmK1Eg8gI

      window.cloudinary.openUploadWidget(
        {
          cloudName: "dgidtip78",
          uploadPreset: "ChattingApplication",
          sources: [
            "local",
            "camera",
            "url",
            "unsplash",
            "google_drive",
            "image_search",
          ],
          googleApiKey: "AIzaSyCqHoWVVBXzSmi3GBhLVr9ofOS5ld23TQg",
          searchBySites: ["all", "cloudinary.com"],
          searchByRights: true,
        },
        (error, result) => {
          if (error) {
            console.error("Upload failed:", error);
            return;
          }

          if (result.event === "success") {
            const imageUrl = result.info.secure_url;
            console.log("Uploaded image URL:", imageUrl);
            if (onSuccess) {
              onSuccess(imageUrl); // Pass URL to callback
            }
          }
        }
      );
    },
    [widgetReady]
  );

  return { handleUpload, widgetReady };
};

export default useCloudinaryUpload;

// image upload
// const handleUpload = () => {
//   cloudinary.openUploadWidget(
//     {
//       cloudName: "MERN2403",
//       uploadPreset: "ChattingApplication",
//       sources: [
//         "local",
//         "camera",
//         "url",
//         "unsplash",
//         "google_drive",
//         "image_search",
//       ],
//       // googleApiKey: "AIrFcR8hKiRo",
//       googleApiKey: "AIzaSyCqHoWVVBXzSmi3GBhLVr9ofOS5ld23TQg",
//       searchBySites: ["all", "cloudinary.com"],
//       searchByRights: true,
//     },
//     (error, result) => {
//       if (error) {
//         throw new Error(error, "Failed to upload");
//       }
//       console.log(result.info.secure_url);
//     }
//   );
// };
// useEffect(() => {
//   const script = document.createElement("script");
//   script.src = `https://upload-widget.cloudinary.com/latest/global/all.js`;
//   script.async = true;
//   document.body.appendChild(script);
// }, []);
// convert to script file Cloudinary
