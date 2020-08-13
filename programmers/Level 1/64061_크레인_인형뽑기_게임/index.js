function solution(board, moves) {
    let answer = 0;
    let basket = [];
    let item = 0;

    moves.forEach((move) => {
        for (let i = 0; i < board.length; i++) {
            item = board[i][move - 1];

            if (item > 0) {            
                board[i][move - 1] = 0;
                basket.push(item);

                if (basket.length >= 2 && (basket[basket.length - 1] == basket[basket.length - 2])) {
                    basket.splice(-2);
                    answer += 2;
                }
                break;
            }
        }
    });

    return answer;
}
