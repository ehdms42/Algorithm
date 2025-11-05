function solution(n, control) {

    let controlSplit = control.split('');

    for (let i = 0; i < controlSplit.length; i++) {
        switch(controlSplit[i]) {
            case "w":
                n += 1;
                break;
            case "s":
                n -= 1;
                break;
            case "d":
                n += 10;
                break;
            case "a":
                n -= 10;
                break;
        }
    }

    return n;
}