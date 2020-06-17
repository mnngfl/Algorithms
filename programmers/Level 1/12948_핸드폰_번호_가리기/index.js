function solution(phone_number) {
    let last_number = phone_number.substring(phone_number.length - 4);
    return '*'.repeat(phone_number.length - 4) + last_number;
}
