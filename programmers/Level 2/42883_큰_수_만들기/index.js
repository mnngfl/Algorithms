function solution(number, k) {
    let result = "";
    let len = number.length - k;
    let start_idx = 0;
    let max_idx;

    while (result.length < len) {
        max_idx = start_idx;
        
        for (let i = start_idx; i <= start_idx + k; i++) {
            if (number[i] === '9') {
                max_idx = i;
                break;
            }
            if (number[max_idx] < number[i]) {
                max_idx = i;
            }
        }
        
        result += number[max_idx];
        k = k - (max_idx - start_idx);
        start_idx = max_idx + 1;
        
        if (k < 0) result += number.slice(start_idx);
    }
    
    return result;
}
