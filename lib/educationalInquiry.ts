/** Shared (client + server) inquiry validation. Pure functions only — no secrets, no server APIs. */

export const INQUIRY_FIELDS = [
  "institutionName",
  "institutionType",
  "contactPerson",
  "email",
  "phone",
  "students",
  "faculty",
  "destination",
  "dates",
  "duration",
  "focus",
  "budget",
  "requirements",
  "message",
] as const;

export type InquiryField = (typeof INQUIRY_FIELDS)[number];
export type InquiryValues = Record<InquiryField, string>;
export type InquiryErrors = Partial<Record<InquiryField, string>>;

export const MAX_LEN: Record<InquiryField, number> = {
  institutionName: 160,
  institutionType: 60,
  contactPerson: 120,
  email: 200,
  phone: 40,
  students: 6,
  faculty: 6,
  destination: 120,
  dates: 120,
  duration: 60,
  focus: 120,
  budget: 60,
  requirements: 1200,
  message: 2000,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateInquiry(values: Partial<Record<InquiryField, string>>): InquiryErrors {
  const v = (k: InquiryField) => (values[k] ?? "").trim();
  const errors: InquiryErrors = {};

  if (!v("institutionName")) errors.institutionName = "Please enter your institution’s name.";
  if (!v("institutionType")) errors.institutionType = "Please choose an institution type.";
  if (!v("contactPerson")) errors.contactPerson = "Please tell us who to contact.";

  if (!v("email")) errors.email = "Please enter an email address.";
  else if (!EMAIL_RE.test(v("email"))) errors.email = "That email doesn’t look right.";

  const digits = v("phone").replace(/\D/g, "");
  if (!v("phone")) errors.phone = "Please enter a phone number.";
  else if (digits.length < 7 || digits.length > 15) errors.phone = "Please enter a valid phone number.";

  const students = v("students");
  if (!students) errors.students = "Please estimate the number of students.";
  else if (!/^\d+$/.test(students) || Number(students) < 1) errors.students = "Enter a whole number, 1 or more.";

  const faculty = v("faculty");
  if (faculty && (!/^\d+$/.test(faculty))) errors.faculty = "Enter a whole number.";

  for (const key of INQUIRY_FIELDS) {
    if (v(key).length > MAX_LEN[key]) errors[key] = `Please keep this under ${MAX_LEN[key]} characters.`;
  }
  return errors;
}

export function cleanInquiry(input: Record<string, unknown>): InquiryValues {
  const out = {} as InquiryValues;
  for (const key of INQUIRY_FIELDS) {
    const raw = input[key];
    out[key] = typeof raw === "string" ? raw.trim().slice(0, MAX_LEN[key] + 1) : "";
  }
  return out;
}
