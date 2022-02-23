export default function sumIf(values, fn, initial = 0) {
 return values.reduce((acc, value) => {
  if (fn(value)) {
    return acc + value
  }

  return acc
 }, initial)
}
