function solution(a, b) {
    var answer = '';
    var day_names = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    var days_in_month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var days_total = 0;
    
    for (let i = 0; i < a-1; i++) {
        days_total += days_in_month[i];
    }
    days_total += b-1;
    
    answer = day_names[days_total % 7]
    
    return answer;
}
