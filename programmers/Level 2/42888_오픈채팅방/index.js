function solution(record) {
    let uRecords = [];
    let uList = {};
    record.forEach(item => {
        item = item.split(' ');

        if (item[0] == 'Enter') {
            uRecords.push(`${item[1]}님이 들어왔습니다.`);
            uList[item[1]] = item[2];
        } else if (item[0] == 'Leave') {
            uRecords.push(`${item[1]}님이 나갔습니다.`);
        } else {
            uList[item[1]] = item[2];
        }
    });

    return uRecords.map(item => {
        let uId = item.match(/[A-Za-z0-9+]*/)[0];
        return item.replace(/[A-Za-z0-9+]*/, uList[uId]);
    });
}
