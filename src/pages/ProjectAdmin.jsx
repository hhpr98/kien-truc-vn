import { useState } from "react";

// Dummy data for demonstration
const initialProjects = [
  {
    projectId: "1",
    projectName: "Căn hộ",
    productDetail: "2 phòng ngủ, 80×80 m²",
    projectDescription:
      "Căn hộ 2 phòng ngủ, diện tích 80×80 m², được thiết kế tối ưu hóa không gian sống hiện đại và tiện nghi. Với tổng diện tích lên tới 160 m², căn hộ mang lại cảm giác rộng rãi, thoáng đãng, phù hợp cho gia đình trẻ hoặc các cặp đôi đang tìm kiếm không gian sinh hoạt đẳng cấp. Hai phòng ngủ được bố trí thông minh, đảm bảo sự riêng tư và thoải mái, cùng với khu vực phòng khách, bếp và ban công đón nắng tự nhiên. Căn hộ còn được trang bị đầy đủ nội thất hiện đại, giúp tiết kiệm thời gian và công sức cho việc trang trí. Với vị trí đắc địa, gần các tiện ích như siêu thị, trường học và bệnh viện, căn hộ này là lựa chọn lý tưởng cho những ai yêu thích cuộc sống năng động và tiện nghi.",
    projectMainURL: "/images/du-an/du-an-1/4069ed6493eb20b579fa10.jpg",
    projectImages: [],
  },
];

export default function ProjectAdmin() {
  const [projects, setProjects] = useState(initialProjects);
  const [form, setForm] = useState({
    projectId: "",
    projectName: "",
    productDetail: "",
    projectDescription: "",
    projectMainURL: "",
    projectImages: [],
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.projectName.trim()) return;

    if (isEditing) {
      setProjects((prev) =>
        prev.map((p) => (p.projectId === form.projectId ? { ...form } : p))
      );
    } else {
      setProjects((prev) => [
        ...prev,
        {
          ...form,
          projectId: Date.now().toString(),
          projectFolder: form.projectFolder || "",
          updatedAt: new Date().toISOString(),
        },
      ]);
    }
    setForm({
      projectId: "",
      projectName: "",
      productDetail: "",
      projectDescription: "",
      projectMainURL: "",
      projectImages: [],
    });
    setIsEditing(false);
  };

  const handleEdit = (project) => {
    setForm(project);
    setIsEditing(true);
  };

  return (
    <section className="product-detail section-padding">
      <div className="container">
        <div style={{ maxWidth: 800, margin: "0 auto", padding: 24 }}>
          <h2>Quản lí dự án</h2>
          <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
            <input
              name="projectName"
              placeholder="Tên dự án"
              value={form.projectName}
              onChange={handleChange}
              required
              style={{ marginRight: 8, width: 180 }}
            />
            <input
              name="productDetail"
              placeholder="Thông số"
              value={form.productDetail}
              onChange={handleChange}
              style={{ marginRight: 8, width: 180 }}
            />
            <input
              name="projectMainURL"
              placeholder="Hình ảnh"
              value={form.projectMainURL}
              onChange={handleChange}
              style={{ marginRight: 8, width: 180 }}
            />
            <br />
            <textarea
              name="projectDescription"
              placeholder="Mô tả chi tiết"
              value={form.projectDescription}
              onChange={handleChange}
              style={{ marginTop: 8, width: 560, height: 60 }}
            />
            <br />
            <button type="submit">{isEditing ? "Cập nhật" : "Thêm"}</button>
            {isEditing && (
              <button
                type="button"
                onClick={() => {
                  setForm({
                    projectId: "",
                    projectName: "",
                    productDetail: "",
                    projectDescription: "",
                    projectMainURL: "",
                    projectImages: [],
                  });
                  setIsEditing(false);
                }}
                style={{ marginLeft: 8 }}
              >
                Cancel
              </button>
            )}
          </form>
          <h3>Dự án hiện có</h3>
          <table border="1" cellPadding="8" style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>Tên dự án</th>
                <th>Thông số</th>
                <th>Mô tả chi tiết</th>
                <th>Hình ảnh</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.projectId}>
                  <td>{project.projectName}</td>
                  <td>{project.productDetail}</td>
                  <td
                    style={{
                      maxWidth: 250,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {project.projectDescription}
                  </td>
                  <td>
                    {project.projectMainURL && (
                      <img
                        src={project.projectMainURL}
                        alt={project.projectName}
                        style={{ width: 60, height: 40, objectFit: "cover" }}
                      />
                    )}
                  </td>
                  <td>
                    <button onClick={() => handleEdit(project)}>Sửa</button>
                  </td>
                </tr>
              ))}
              {projects.length === 0 && (
                <tr>
                  <td colSpan={5} style={{ textAlign: "center" }}>
                    No projects found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
