import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { completeUpload, uploadFile } from "../services/uploadServices";
const MySwal = withReactContent(Swal);

const ImageUpload = () => {
  const [selectedProject, setSelectedProject] = useState("du-an-1");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const projects = [
    { value: "du-an-1", label: "Dự án 1" },
    { value: "du-an-2", label: "Dự án 2" },
    { value: "du-an-3", label: "Dự án 3" },
  ];

  const handleProjectChange = (e) => {
    setSelectedProject(e.target.value);
    setImage(null);
    setPreview(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handleUpload = async () => {
    if (!image) return;
    const formData = new FormData();
    formData.append("file", image);

    try {
      let response = await uploadFile(formData);
      // Get filename from response
      const { filename } = response;
      // Post to /api/upload/complete with filename and folder
      response = await completeUpload(filename, selectedProject);
      const { file } = response;
      console.log("File uploaded successfully:", file);
      MySwal.fire({
        icon: "success",
        title: "Upload thành công!",
        showConfirmButton: false,
        timer: 1500,
      });
      setPreview(null);
      setImage(null);
    } catch (err) {
      MySwal.fire({
        icon: "error",
        title: "Upload thất bại!",
        text: "Đã xảy ra lỗi khi upload ảnh.",
        showConfirmButton: true,
      });
      console.log(err);
    }
  };

  return (
    <section className="product-detail section-padding">
      <div className="container">
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
          <div className="col-12 text-center">
            <h2 className="mt-5 mb-5">Upload ảnh dự án</h2>
          </div>
          <div className="mb-4">
            <label className="mr-2 font-semibold">Chọn dự án:</label>
            <select
              value={selectedProject}
              onChange={handleProjectChange}
              className="border rounded px-2 py-1"
            >
              {projects.map((project) => (
                <option key={project.value} value={project.value}>
                  {project.label}
                </option>
              ))}
            </select>
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mb-4"
          />{" "}
          <button
            onClick={handleUpload}
            disabled={!image}
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Upload Image
          </button>
          {preview && (
            <div className="mb-4">
              <img
                src={preview}
                alt="Preview"
                className="max-w-xs max-h-64 rounded shadow"
              />
            </div>
          )}
          {image && (
            <div>
              <p className="text-green-600 font-semibold">
                Đã chọn ảnh cho{" "}
                {projects.find((p) => p.value === selectedProject).label}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ImageUpload;
