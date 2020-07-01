function convert_mm2cm (x: number) {
    return Math.idiv(x, 10) % 10
}
function plot (num: number, row: number) {
    for (let col = 0; col <= 10; col++) {
        if (col <= num) {
            led.plot(col % 5, row + Math.idiv(col, 5))
        } else {
            led.unplot(col % 5, row + Math.idiv(col, 5))
        }
    }
}
function convert_mm2m (x: number) {
    return Math.idiv(x, 1000) % 10
}
function convert_mm2dm (x: number) {
    return Math.idiv(x, 100) % 10
}
let m = 0
let dm = 0
let cm = 0
basic.clearScreen()
for (let mm = 0; mm <= 5000; mm++) {
    cm = convert_mm2cm(mm)
    dm = convert_mm2dm(mm)
    m = convert_mm2m(mm)
    plot(cm - 1, 3)
    plot(dm - 1, 1)
    plot(m - 1, 0)
}
