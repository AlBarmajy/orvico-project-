import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  FloatingLabel,
} from "react-bootstrap";

export default function BookServicePage() {
  // 1. Initial State
  const [bookingData, setBookingData] = useState({
    date: "",
    time: "",
    details: "",
    agreedToTerms: false,
  });

  // 2. Handle Change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBookingData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // 3. Submission Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يتم إضافة منطق التحقق (Validation) لاحقًا
    console.log("Booking Data:", bookingData);
    alert("Booking attempted! Check console for data.");
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col lg={7} md={9}>
          <div className="text-center mb-4">
            <h2 className="display-5 fw-bold text-dark">Book a Service</h2>
            <p className="lead text-muted">
              Let's get the details to connect you with the right professional.
            </p>
          </div>

          <Form onSubmit={handleSubmit} className="p-4 shadow rounded-3">
            <Row>
              {/* Date Picker */}
              <Form.Group as={Col} md={6} className="mb-4">
                <Form.Label>Preferred Date</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  value={bookingData.date}
                  onChange={handleChange}
                  className="custom-form-control rounded-pill"
                />
              </Form.Group>

              {/* Time Picker */}
              <Form.Group as={Col} md={6} className="mb-4">
                <Form.Label>Preferred Time</Form.Label>
                <Form.Control
                  type="time"
                  name="time"
                  value={bookingData.time}
                  onChange={handleChange}
                  className="custom-form-control rounded-pill"
                />
              </Form.Group>
            </Row>

            {/* Service Details - Textarea */}
            <Form.Group className="mb-4">
              <Form.Label>Notes to Professional</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="e.g. 'The front door lock is sticking, please check it.' or 'l need a custom-built bookshelf for a small alcove.'"
                name="details"
                value={bookingData.details}
                onChange={handleChange}
                className="large-radius custom-form-control"
              />
            </Form.Group>

            {/* Terms Checkbox */}
            <Form.Group className="mb-4">
              <Form.Check
                type="checkbox"
                id="termsCheck"
                label={
                  <>
                    I agree to the{" "}
                    <span className="text-warning fw-bold">
                      Terms and Conditions
                    </span>
                  </>
                }
                name="agreedToTerms"
                checked={bookingData.agreedToTerms}
                onChange={handleChange}
                className="agreePolicy"
              />
            </Form.Group>

            {/* Submit Button */}
            <Button
              variant="warning"
              type="submit"
              className="w-100 main-btn p-3 mt-4"
            >
              <i className="bi bi-check-circle"></i> Confirm Booking
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
