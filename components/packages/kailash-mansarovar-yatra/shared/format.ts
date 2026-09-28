const inr = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export const formatInr = (n: number) => inr.format(n);

const date = new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short", year: "numeric" });

/** "2026-09-01" → "1 Sept 2026". Parsed as UTC noon to avoid timezone drift. */
export const formatDate = (iso: string) => date.format(new Date(`${iso}T12:00:00Z`));
