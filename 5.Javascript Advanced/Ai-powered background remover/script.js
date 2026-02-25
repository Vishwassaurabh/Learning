document.addEventListener("DOMContentLoaded", () => {
  //select the elements
  const dropzone = document.getElementById("dropZone");
  const fileinput = document.getElementById("fileInput");
  const selectButton = document.getElementById("selectButton");
  const originalImage = document.getElementById("originalImage");
  const processedImage = document.getElementById("processedImage");
  const removeBackground = document.getElementById("removeBackground");
  const download = document.getElementById("download");
  const loading = document.querySelector(".loading");

  //hide the loading
  loading.style.display = "none";

  //Drag and drop feature
  //? 1.dragover
  dropzone.addEventListener("dragover", (e) => {
    //prevent image preview
    e.preventDefault();
    dropzone.classList.add("dragover");
  });

  //? 2.dragleave
  dropzone.addEventListener("dragleave", () => {
    dropzone.classList.remove("dragover");
  });

  //? 3.drop
  dropzone.addEventListener("drop", (e) => {
    //prevent image preview
    e.preventDefault();
    dropzone.classList.remove("dragover");
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      //handle uploade here
      handleimageupload(file);
    }
  });

  //click to upload
  selectButton.addEventListener("click", () => {
    fileinput.click();
  });

  fileinput.addEventListener("change", (e) => {
    const file = e.target.files[0]; // <-- FIXED
    if (file) {
      handleimageupload(file);
    }
  });

  //handle upload here
  function handleimageupload(file) {
    const reader = new FileReader();

    reader.onload = (e) => {
      console.log(e.target.result);
      originalImage.src = e.target.result;
      originalImage.hidden = false;
      processedImage.hidden = true;
      removeBackground.disabled = false;
      download.disabled = true;
    };
    reader.readAsDataURL(file);
  }

  //removeBackground
  removeBackground.addEventListener("click", async () => {

    //show loading
    loading.style.display = "flex";

    try {

      //formdata
      const formdata = new FormData();

      //blob
      const blob = await fetch(originalImage.src).then((r) => r.blob());

      formdata.append("source_image_file", blob);

      const response = await fetch(
        "https://api.slazzer.com/v2.0/remove_image_background",
        {
          method: "POST",
          headers: {
            "API-KEY": "2175f1900c794ac2a438e1bd49efc7eb",
          },
          body: formdata,
        },
      );

      const blob_response = await response.blob();
      const url = URL.createObjectURL(blob_response);

      processedImage.src = url;
      processedImage.hidden = false;
      download.disabled = false;
    } catch {
      console.error("Error:", error);
      alert("Background removal failed. Check console.");
    } finally {
      //hide the loading
      loading.style.display = "none";
    }
  });

  download.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = processedImage.src;
    link.download = "processed_image.png";
    link.click();
  });
});
