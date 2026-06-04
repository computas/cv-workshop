export function formatMonthYear(date: string): string {
  const dateObj = new Date(date);
  const month = dateObj.toLocaleDateString("nb-NO", { month: "long" });
  const year = dateObj.getFullYear();
  return `${month.charAt(0).toUpperCase() + month.slice(1)} ${year}`;
}
