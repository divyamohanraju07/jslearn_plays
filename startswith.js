var data = {
    practicals: '0',
    checkpoint01: '0',
    checkpoint02: '0',
    checkpoint03: '0',
    checkpoint04: '0',
    checkpoint05: '0',
    checkpoint06: '0',
    checkpoint07: '0',
    checkpoint08: '0',
    checkpoint09: '0',
    checkpoint10: '0',
    total: '0'
}

var res = Object.keys(data).filter(v => v.startsWith('checkpoint')).map(e => data[e] !== "0")

console.log(res)