import msg from '../../common/msg'

document.querySelectorAll('button.counter').forEach(btn => {
    let i = 0
    btn.onclick = () => {
        btn.className = `counter click-${i}`
        btn.innerHTML = msg.clicked(i++)
        btn.disabled = i > 10
    }
    btn.onclick()
})
