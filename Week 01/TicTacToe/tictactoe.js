class TicTacToe {
  constructor() {
    this.pattern = [];
    this.el = null;
    this.currentPlayer = 0;
  }
   
  // 棋盘内容初始化
  init() {
    this.pattern = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];
    this.currentPlayer = 1;
    this.el = document.querySelector('.chessboard');
    this.renderBoard();
  };

  // 绘制棋盘
  renderBoard() {
    for (let row = 0; row < this.pattern.length; row++) {
      for (let column = 0; column < this.pattern[row].length; column++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        this.pattern[row][column] && cell.classList.add('disabled');
        cell.setAttribute('data-pos', String(row * 3 + column));
        cell.innerText = this.pattern[row][column] === 1 ? '⭕️' :
          this.pattern[row][column] === 2 ? '❌' : '';
        cell.addEventListener('click', () => {
          console.log('click ', this.pattern);
          this.play(row, column);
        });
        this.el.appendChild(cell);
      }
    }
  };

  // 棋盘格子，落子交互
  play(x, y) {
    if (this.el && !this.pattern[x][y]) {
      this.pattern[x][y] = this.currentPlayer;
      this.renderChess(x, y);
      const result = this.checkWinner(this.pattern, this.currentPlayer);
      if (result) {
        window.alert(`玩家${this.currentPlayer === 1 ? '⭕️' : '❌'}获胜！`);
      } else {
        // const pattern = JSON.parse(JSON.stringify(this.pattern));
        // this.willWin(pattern, this.currentPlayer);
        // console.log(this.getBestChoice(pattern, this.currentPlayer));
        this.currentPlayer = 3 - this.currentPlayer;
        const player = this.currentPlayer;
        const pattern = JSON.parse(JSON.stringify(this.pattern));
        console.log(`玩家${this.currentPlayer}最佳位置`, this.getBestChoice(pattern, player));
      }
    }
  };

  // 绘制棋子
  renderChess(x, y) {
    const cell = this.el.querySelector(`[data-pos="${x * 3 + y}"]`);
    cell.innerText = this.currentPlayer === 1 ? '⭕️' :
      this.currentPlayer === 2 ? '❌' : '';
    cell.classList.add('disabled');
  }

  // 判断胜负
  checkWinner(pattern, player) {
    let isWin = false;
    // 横向判定
    for (let i = 0;i < 3;i++) {
      isWin = pattern[i].every((item) => {
        return item === player;
      });
      if (isWin) {
        return true;
      }
    }
    // 纵向判定
    for (let j = 0;j < 3;j++) {
      isWin = true;
      for (let i = 0;i < 3;i++) {
        if (pattern[i][j] !== player) {
          isWin = false;
        }
      }
      if (isWin) {
        return isWin;
      }
    }
    // 斜向判定 左上至右下
    isWin = true;
    for (let i = 0;i < 3;i++) {
      if (pattern[i][i] !== player) {
        isWin = false;
      }
    }
    if (isWin) {
      return isWin;
    }
    // 斜向判定 右上至左下
    isWin = true;
    for (let i = 0;i < 3;i++) {
      if (pattern[i][2 - i] !== player) {
        isWin = false;
      }
    }
    if (isWin) {
      return isWin;
    }
  }

  // 预判可能胜负
  willWin(pattern, player) {
    for (let i = 0;i < 3;i++) {
      for (let j = 0;j < 3;j++) {
        if (!pattern[i][j]) {
          let patternCopy = JSON.parse(JSON.stringify(pattern));
          patternCopy[i][j] = player;
          const isWin = this.checkWinner(patternCopy, player);
          // isWin && console.log(`玩家${this.currentPlayer === 1 ? '⭕️' : '❌'}将要获胜！`)
          if (isWin) {
            return [j, i];
          }
        }
      }
    }
    return null;
  }

  getBestChoice(pattern, player) {
    let p;
    // 若存在可赢的点，直接选择并返回
    if (p = this.willWin(pattern, player)) {
      return {
        point: p,
        result: 1
      }
    }
    let result = -2;
    let point = null;
    for (let i = 0;i < 3;i++) {
      for (let j = 0;j < 3;j++) {
        if (!pattern[i][j]) {
          const newPattern = JSON.parse(JSON.stringify(pattern));
          newPattern[i][j] = player;
          const choice = this.getBestChoice(newPattern, 3 - player);
          if (-choice.result > result) {
            point = [j, i];
            result = -choice.result;
          }
        }
      }
    }
    return {
      point: point,
      result: point ? result : 0
    }
  }
}

const instance = new TicTacToe();
instance.init();