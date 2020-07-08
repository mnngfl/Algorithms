function solution(s){
    s = s.toLowerCase().replace(/[^p|y]/g, '');
    return (s.match(/p+/g) || []).join('').length === (s.match(/y+/g) || []).join('').length;
}
