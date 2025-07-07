function solution(code) {
    const result = Array.from(code).reduce((acc, char, idx) => {
        let { ret, mode } = acc;

        if (char === '1') {
            mode = 1 - mode;
        } else {
            if (mode === 0) {
                if (idx % 2 === 0) {
                    ret += char;
                }
            } else {
                if (idx % 2 !== 0) {
                    ret += char;
                }
            }
        }
        return { ret, mode };
    }, { ret: '', mode: 0 });

    return result.ret === '' ? 'EMPTY' : result.ret;
}