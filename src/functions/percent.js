export default function percent(percent, total) {
  return parseFloat((percent / 100) * total).toFixed(2)
}
