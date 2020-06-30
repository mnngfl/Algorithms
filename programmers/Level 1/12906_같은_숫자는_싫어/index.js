function solution(arr)
{
    return arr.filter((val, i, a) => !i || val !== a[i-1]);
}
