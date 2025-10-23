import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  FloatingLabel,
} from "react-bootstrap";
import ServiceNav from "../components/serviceNav";

export default function ServicePage() {
  // Initial form state (Updated currency to EGP based on your uploaded file)
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

  // Handle changes (including file uploads)
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "images" && files) {
      setFormData((prevData) => ({
        ...prevData,
        images: Array.from(files),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Request Submitted! Check the console.");
  };

  return (
    <Container className="my-5">
      <div className="text-center mb-5">
        <h2 className="display-4 fw-bold text-dark">Post a Service Request</h2>
        <p className="lead">Let's find the right professional for your job.</p>
      </div>
      <Row className="justify-content-center">
        <Col lg={8}>
          <Form onSubmit={handleSubmit}>
            {/* 1. Title */}
            <Form.Group className="mb-4">
              <Form.Label>Title</Form.Label>
              <FloatingLabel controlId="titleInput" label="Title">
                <Form.Control
                  type="text"
                  placeholder="e.g., Custom Bookshelf Installation"
                  size="lg"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="custom-form-control rounded-pill"
                />
              </FloatingLabel>
            </Form.Group>

            {/* 2. Description */}
            <Form.Group className="mb-4">
              <Form.Label>Description</Form.Label>
              {/* <FloatingLabel controlId="descriptionInput" label="Description"> */}
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Describe the service you need in detail..."
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="large-radius custom-form-control"
              />
              {/* </FloatingLabel> */}
            </Form.Group>

            {/* 3. Observations */}
            <Form.Group className="mb-4">
              <Form.Label>Observations</Form.Label>
              {/* <FloatingLabel controlId="observationsInput" label="Observations"> */}
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Are there any specific details, obstacles, or access instructions?"
                name="observations"
                value={formData.observations}
                onChange={handleChange}
                className="large-radius custom-form-control"
              />
              {/* </FloatingLabel> */}
            </Form.Group>

            {/* 4. Address */}
            <Form.Group className="mb-4">
              <Form.Label>Address</Form.Label>
              <FloatingLabel controlId="addressInput" label="Address">
                <Form.Control
                  type="text"
                  placeholder="Enter your full address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="custom-form-control rounded-pill"
                />
              </FloatingLabel>
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
                  className="rounded-pill custom-form-control"
                />
              </Form.Group>

              {/* 6. Budget */}
              <Form.Group as={Col} md={6} className="mb-4">
                <Form.Label>Budget</Form.Label>
                <InputGroup>
                  {/* Currency Select */}
                  <Form.Select
                    aria-label="Currency"
                    style={{ maxWidth: "100px" }}
                    name="currency"
                    value={formData.currency}
                    onChange={handleChange}
                    className="custom-form-control rounded-pill"
                  >
                    <option>EGP</option>
                    <option>USD</option>
                    <option>SAR</option>
                  </Form.Select>
                  {/* Budget Input */}
                  <Form.Control
                    type="text"
                    placeholder="0.00"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="rounded-pill custom-form-control"
                  />
                </InputGroup>
              </Form.Group>
            </Row>

            {/* 7. Image Upload */}
            <Form.Group className="mb-4">
              <Form.Label>Image Upload</Form.Label>
              <div className="border border-2 rounded-3 p-5 text-center file-upload-box">
                <i className="fas fa-image fa-3x text-muted mb-3"></i>

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
                  Upload a file
                </label>

                {formData.images.length > 0 ? (
                  <small className="d-block text-success">
                    {formData.images.length} file(s) selected.
                  </small>
                ) : (
                  <small className="d-block text-muted">
                    or drag and drop (PNG, JPG, GIF up to 10MB)
                  </small>
                )}
              </div>
            </Form.Group>

            {/* 8. Submit Button */}
            <Button
              variant="warning"
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
