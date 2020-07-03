function solution(n)
{
    let numStr = n.toString().split('');
    return numStr.reduce((acc, curr) => acc += parseInt(curr), 0);
}
