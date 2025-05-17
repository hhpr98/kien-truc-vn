import { useState } from "react";

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

  return (
    <section className="product-detail section-padding">
      <div className="container">
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
          <h1 className="text-2xl font-bold mb-4">Upload an Image</h1>
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
          />
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
