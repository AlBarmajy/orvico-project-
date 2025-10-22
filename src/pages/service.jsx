// src/pages/service.jsx
import React, { useState } from "react"; // 💡 تم إضافة React و useState
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import ServiceNav from "../components/serviceNav";

export default function ServicePage() {
  // 1. تعريف حالة النموذج الأولية
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    observations: "",
    address: "",
    preferredDate: "",
    budget: "",
    currency: "EGP",
    images: [],
  });

  // 2. دالة لمعالجة التغييرات (شاملة للملفات)
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    // معالجة حقل رفع الملفات
    if (name === "images" && files) {
      setFormData((prevData) => ({
        ...prevData,
        images: Array.from(files),
      }));
    } else {
      // معالجة الحقول النصية والتواريخ والأرقام
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // 3. دالة لمعالجة إرسال النموذج
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Request Submitted! Check the console.");
  };

  // 4. المكون الرئيسي يعيد الـ JSX
  return (
    <Container className="my-5">
      <div className="text-center mb-5">
        <h2 className="display-4 fw-bold text-dark">Post a Service Request</h2>
        <p className="lead text-muted">
          Let's find the right professional for your job.
        </p>
      </div>

      <ServiceNav />

      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          {/* ربط دالة handleSubmit بالنموذج */}
          <Form onSubmit={handleSubmit}>
            {/* 1. Title */}
            <Form.Group className="mb-4">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g., Custom Bookshelf Installation"
                size="lg"
                name="title" // 💡 إضافة اسم الحقل
                value={formData.title} // 💡 ربط قيمة الحقل
                onChange={handleChange} // 💡 ربط دالة التغيير
              />
            </Form.Group>

            {/* 2. Description */}
            <Form.Group className="mb-4">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Describe the service you need in detail..."
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </Form.Group>

            {/* 3. Observations */}
            <Form.Group className="mb-4">
              <Form.Label>Observations</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Are there any specific details, obstacles, or access instructions? e.g., 'Third floor apartment with no elevator.'"
                name="observations"
                value={formData.observations}
                onChange={handleChange}
              />
            </Form.Group>

            {/* 4. Address */}
            <Form.Group className="mb-4">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your full address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </Form.Group>

            <Row>
              {/* 5. Preferred Date */}
              <Form.Group as={Col} md={6} className="mb-4">
                <Form.Label>Preferred Date</Form.Label>
                <Form.Control
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                />
              </Form.Group>

              {/* 6. Budget (with Currency Select) */}
              <Form.Group as={Col} md={6} className="mb-4">
                <Form.Label>Budget</Form.Label>
                <InputGroup>
                  {/* ربط حقل العملة Select */}
                  <Form.Select
                    aria-label="Currency"
                    style={{ maxWidth: "100px" }}
                    name="currency"
                    value={formData.currency}
                    onChange={handleChange}
                  >
                    <option>EGP</option>
                    <option>USD</option>
                    <option>SAR</option>
                  </Form.Select>
                  {/* ربط حقل المبلغ */}
                  <Form.Control
                    type="number"
                    placeholder="0.00"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  />
                </InputGroup>
              </Form.Group>
            </Row>

            {/* 7. Image Upload - تم ربط معالجة الملفات */}
            <Form.Group className="mb-4">
              <Form.Label>Image Upload</Form.Label>
              <div className="border border-secondary border-2 border-dashed rounded-3 p-5 text-center">
                <i className="fas fa-image fa-3x text-muted mb-3"></i>

                {/* حقل إدخال الملفات المخفي */}
                <input
                  className="d-none"
                  id="file-upload"
                  multiple
                  name="images"
                  type="file"
                  accept="image/png, image/jpeg, image/gif"
                  onChange={handleChange}
                />

                <label
                  htmlFor="file-upload"
                  style={{ cursor: "pointer" }}
                  className="d-block mb-1 text-primary fw-bold"
                >
                  رفع ملف
                </label>

                {/* عرض عدد الملفات المرفوعة */}
                {formData.images.length > 0 ? (
                  <small className="d-block text-success">
                    تم اختيار {formData.images.length} ملف.
                  </small>
                ) : (
                  <small className="d-block text-muted">
                    أو اسحب وأفلت (PNG, JPG, GIF بحد أقصى 10MB)
                  </small>
                )}
              </div>
            </Form.Group>

            {/* 8. Submit Button */}
            <Button
              variant="primary"
              type="submit"
              className="w-100 main-btn p-3 mt-4"
            >
              Post Request
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
