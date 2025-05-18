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
          <h2 className="mb-4">Quản lí dự án</h2>

          <form onSubmit={handleSubmit} className="mb-4">
            <div className="row g-2 mb-2">
              <div className="col-md-4">
                <input
                  type="text"
                  name="projectName"
                  className="form-control"
                  placeholder="Tên dự án"
                  value={form.projectName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  name="productDetail"
                  className="form-control"
                  placeholder="Thông số"
                  value={form.productDetail}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  name="projectMainURL"
                  className="form-control"
                  placeholder="Hình ảnh chính (URL)"
                  value={form.projectMainURL}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-3">
              <textarea
                name="projectDescription"
                className="form-control"
                placeholder="Mô tả chi tiết"
                rows={3}
                value={form.projectDescription}
                onChange={handleChange}
              />
            </div>

            <div className="d-flex">
              <button type="submit" className="btn btn-primary me-2">
                {isEditing ? "Cập nhật" : "Thêm"}
              </button>
              {isEditing && (
                <button
                  type="button"
                  className="btn btn-secondary"
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
                >
                  Hủy bỏ
                </button>
              )}
            </div>
          </form>

          <h3>Dự án hiện có</h3>
          <table
            className="table table-bordered table-hover align-middle"
            style={{ width: "100%" }}
          >
            <thead className="table-light">
              <tr>
                <th scope="col">Tên dự án</th>
                <th scope="col">Thông số</th>
                <th scope="col">Mô tả chi tiết</th>
                <th scope="col">Hình ảnh</th>
                <th scope="col">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {projects.length > 0 ? (
                projects.map((project) => (
                  <tr key={project.projectId}>
                    <td>{project.projectName}</td>
                    <td>{project.productDetail}</td>
                    <td style={{ maxWidth: 250 }}>
                      <div className="text-truncate">
                        {project.projectDescription}
                      </div>
                    </td>
                    <td>
                      {project.projectMainURL ? (
                        <img
                          src={project.projectMainURL}
                          alt={project.projectName}
                          style={{
                            width: 80,
                            height: 50,
                            objectFit: "cover",
                            borderRadius: 4,
                          }}
                        />
                      ) : (
                        <span className="text-muted">Không có ảnh</span>
                      )}
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-primary"
                        onClick={() => handleEdit(project)}
                      >
                        Sửa
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="text-center text-muted">
                    Không tìm thấy dự án nào.
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
