export default function decomposeDate(dateToDescompose) {
  const year = Number(dateToDescompose.getUTCFullYear());
  const month = Number(dateToDescompose.getMonth()) + 1; //getMonth() is zero-based
  const day = Number(dateToDescompose.getDate());

  return [year, month, day];
}

export const compareDates = (today, dateDecomposed) => {
  const greaterYear = dateDecomposed[0] > today[0];

  if (greaterYear) return true;

  const sameYear = dateDecomposed[0] === today[0];
  const greaterMonth = dateDecomposed[1] > today[1];

  if (sameYear && greaterMonth) return true;

  const sameMonth = dateDecomposed[1] === today[1];
  const greaterOrEqualday = dateDecomposed[2] >= today[2];

  if (sameYear && sameMonth && greaterOrEqualday) return true;

  return false;
};
