export default function bonus(days, maximum = 300){
    let pricePerDay = (maximum / 22)
    return parseFloat((pricePerDay * days))
}