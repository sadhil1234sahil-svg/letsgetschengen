/**
 * Modular enquiry validation and submission service.
 * Replace `submitEnquiry` implementation with your API endpoint, CRM webhook,
 * or email service integration (e.g., Resend, Formspree, HubSpot, custom backend)
 * without changing any form UI components.
 */

export const INITIAL_ENQUIRY_STATE = {
  fullName: '',
  phone: '',
  email: '',
  destination: '',
  travelMonth: 'Immediate (Next 30 Days)',
  residencyCategory: 'UAE Golden Residency (10-Year)',
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^[+\d][\d\s().-]{6,20}$/;

export function validateEnquiryForm(values) {
  const errors = {};

  if (!values.fullName.trim() || values.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name as in your passport.';
  }

  if (!values.phone.trim() || !PHONE_PATTERN.test(values.phone.trim())) {
    errors.phone = 'Please enter a valid UAE Mobile / WhatsApp number.';
  }

  if (!values.email.trim() || !EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!values.destination || values.destination === 'Select Destination Country') {
    errors.destination = 'Please select your primary European destination.';
  }

  return errors;
}

export async function submitEnquiry(payload) {
  // Simulated async submission for static/preview builds.
  // Swap this block with `fetch('/api/enquiries', { method: 'POST', ... })` when connected.
  await new Promise((resolve) => setTimeout(resolve, 650));

  const referenceCode = `LGS-${Date.now().toString(36).toUpperCase().slice(-6)}`;

  return {
    ok: true,
    referenceCode,
    submittedAt: new Date().toISOString(),
    payload,
  };
}

