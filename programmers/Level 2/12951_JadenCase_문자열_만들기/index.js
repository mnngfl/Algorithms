function solution(s) {
    return s.toLowerCase().split(' ').map(x => {
        let str = x;
        if (x.length > 0) {
            str = x[0].toUpperCase() + x.substring(1);
        }
        return str;
    }).join(' ');
}

