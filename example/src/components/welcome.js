import msg from '../common/msg'

const m = msg.welcome.replace(/\s+/g, '·')
const p = document.createElement('p')
p.textContent = '.'.repeat(m.length)
const bod = document.body

bod.insertBefore(p, bod.childNodes[0])
let i = 0
const int = setInterval(() => {
    p.textContent = m.substr(0, ++i) + '.'.repeat(m.length - i)
    if(i === m.length) clearInterval(int)
}, 100)