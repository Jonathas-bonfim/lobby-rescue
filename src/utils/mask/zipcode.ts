export const handleZipCodeChange = (
  event: React.ChangeEvent<HTMLInputElement>
) => {
  let value = event.target.value.replace(/\D/g, "");

  if (value.length > 8) {
    value = value.slice(0, 8);
  }

  if (value.length >= 6) {
    value = `${value.slice(0, 2)}.${value.slice(2, 5)}-${value.slice(5)}`;
  } else if (value.length >= 3) {
    value = `${value.slice(0, 2)}.${value.slice(2)}`;
  }

  return value;
};
