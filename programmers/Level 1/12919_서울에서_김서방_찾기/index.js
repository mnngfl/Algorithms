function solution(seoul) {
  const idx = seoul.findIndex(el => {
    return el === 'Kim';
  });
  return `김서방은 ${idx}에 있다`;
}
