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
        <div className="row justify-content-center align-items-center min-vh-100 bg-light">
          <div className="col-12 text-center">
            <h2 className="mt-5 mb-5">Upload ảnh dự án</h2>
          </div>
          <div className="col-lg-6 col-md-6 col-12 mb-4">
            <label className="mr-2 fw-semibold">Chọn dự án:</label>
            <button
              type="button"
              className="btn btn-outline-primary btn-sm ms-2 mb-2"
              onClick={() => (window.location.href = "/project-admin")}
              title="Quản lí dự án"
            >
              Quản lí dự án
            </button>
            <select
              value={selectedProject}
              onChange={handleProjectChange}
              className="form-select mb-3"
            >
              {projects.map((project) => (
                <option key={project.value} value={project.value}>
                  {project.label}
                </option>
              ))}
            </select>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="form-control mb-3"
            />
            <button
              onClick={handleUpload}
              disabled={!image}
              className="btn btn-primary w-100 mb-3"
            >
              Tải ảnh lên
            </button>
            {preview && (
              <div className="mb-3 text-center">
                <img
                  src={preview}
                  alt="Preview"
                  className="img-fluid rounded shadow"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "256px",
                    objectFit: "contain",
                  }}
                />
              </div>
            )}
            {image && (
              <div>
                <p className="text-success fw-semibold">
                  Đã chọn ảnh cho{" "}
                  {projects.find((p) => p.value === selectedProject).label}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageUpload;
