export default function(value) {
  if (!value) return "";
  value = value.toString();
  return value.toLowerCase().replace(/\b(\w)/g, (s) => s.toUpperCase());
}
