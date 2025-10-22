// src/pages/service.jsx
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import ServiceNav from "../components/serviceNav";
export default function ServicePage() {
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
          <Form>
            {/* 1. Title */}
            <Form.Group className="mb-4">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g., Custom Bookshelf Installation"
                size="lg"
              />
            </Form.Group>

            {/* 2. Description */}
            <Form.Group className="mb-4">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Describe the service you need in detail..."
              />
            </Form.Group>

            {/* 3. Observations */}
            <Form.Group className="mb-4">
              <Form.Label>Observations</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Are there any specific details, obstacles, or access instructions? e.g., 'Third floor apartment with no elevator.'"
              />
            </Form.Group>

            {/* 4. Address */}
            <Form.Group className="mb-4">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Enter your full address" />
            </Form.Group>

            <Row>
              {/* 5. Preferred Date */}
              <Form.Group as={Col} md={6} className="mb-4">
                <Form.Label>Preferred Date</Form.Label>
                {/* Note: In React/Bootstrap, type="date" might need specific styling */}
                <Form.Control type="date" />
              </Form.Group>

              {/* 6. Budget (with Currency Select) */}
              <Form.Group as={Col} md={6} className="mb-4">
                <Form.Label>Budget</Form.Label>
                <InputGroup>
                  <Form.Select
                    aria-label="Currency"
                    style={{ maxWidth: "100px" }}
                  >
                    <option>USD</option>
                    <option>CAD</option>
                    <option>EUR</option>
                  </Form.Select>
                  <Form.Control type="number" placeholder="0.00" />
                </InputGroup>
              </Form.Group>
            </Row>

            {/* 7. Image Upload (Placeholder - سنعمل عليه لاحقًا) */}
            <Form.Group className="mb-4">
              <Form.Label>Image Upload</Form.Label>
              <div className="border border-secondary border-2 border-dashed rounded-3 p-5 text-center">
                <i className="fas fa-image fa-3x text-muted mb-3"></i>
                <p className="mb-1">Upload a file or drag and drop</p>
                <small className="text-muted">PNG, JPG, GIF up to 10MB</small>
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
