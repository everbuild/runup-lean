export default {
    welcome: 'runup-lean is up and running!',
    clicked: n => {
        switch(n) {
            case 0: return 'click me'
            case 1: return 'you clicked me once'
            case 2: return 'you clicked me twice'
            case 10: return 'you\'ll never click me again'
            default: return `you clicked me ${n} times`
        }
    }
}