var boardSize = 16
var gNums = resetNums(boardSize)
// console.log('gNums', gNums)
var gNextNum = 1
var gBoard

// let [milliseconds, seconds, minutes] = [0, 0, 0]
// let int = null

function onInit() {
  gBoard = createBoard(boardSize)
  //   console.table(gBoard)
  renderBoard(gBoard)
  renderNextNum()
  //   if (int !== null) {
  //     clearInterval(int)
  //   }
  //   int = setInterval(startTimer, 10)
}

function onLevel(elLvlBtn) {
  //   console.log('elLvlBtn', elLvlBtn)
  if (elLvlBtn.innerText === 'Medium') {
    boardSize = 25
    restartBoard(boardSize)
  } else if (elLvlBtn.innerText === 'Hard') {
    boardSize = 36
    restartBoard(boardSize)
  } else {
    boardSize = 16
    restartBoard(boardSize)
  }
  //   restTimer()
  //   console.log('boardSize', boardSize)
  //   console.log('gNums', gNums)
}

function restartBoard(boardSize) {
  gNums = resetNums(boardSize)
  gBoard = createBoard(boardSize)
  //   console.table(gBoard)
  renderBoard(gBoard)
  gNextNum = 1
  renderNextNum()
}

function createBoard(boardSize) {
  var board = []
  for (var i = 0; i < Math.sqrt(boardSize); i++) {
    board.push([])
    for (var j = 0; j < Math.sqrt(boardSize); j++) {
      board[i][j] = drawNum()
    }
  }
  return board
}

function renderBoard(board) {
  // console.table(board)
  var strHTML = ''
  for (var i = 0; i < board.length; i++) {
    strHTML += '<tr>'
    for (var j = 0; j < board[0].length; j++) {
      var cell = board[i][j]
      var cellData = 'data-i="' + i + '" data-j="' + j + '"'

      strHTML += `<td ${cellData}
            onclick="onCellClicked(this,${i},${j})" 
            class="">
            ${cell}</td>`
    }
    strHTML += '</tr>\n'
  }
  // console.log(strHTML)
  var elBoard = document.querySelector('.board')
  elBoard.innerHTML = strHTML
}

function onCellClicked(elTd, cellI, cellJ) {
  //   console.log('elTd', elTd)
  //   console.log('elTd.innerText', elTd.innerText)
  //   console.log('cellI', cellI)
  //   console.log('cellJ', cellJ)

  if (elTd.innerText === `${gNextNum}`) {
    // console.log('gNextNum1', gNextNum)
    elTd.classList.add('clicked')
    // console.log('elTd', elTd)
    gNextNum++
    renderNextNum()
    // console.log('gNextNum2', gNextNum)
  }

  if (elTd.innerText === `${boardSize}`) {
    console.log('great job')
    // change next num
    gNextNum = 1
    console.log('gNextNum', gNextNum)
    // render next num
    // show msg
  }
}

// function startTimer() {
//   milliseconds += 10
//   if (milliseconds == 1000) {
//     milliseconds = 0
//     seconds++
//     if (seconds == 60) {
//       seconds = 0
//       minutes++
//     }
//   }

//   let m = minutes < 10 ? '0' + minutes : minutes
//   let s = seconds < 10 ? '0' + seconds : seconds
//   let ms =
//     milliseconds < 10
//       ? '00' + milliseconds
//       : milliseconds < 100
//       ? '0' + milliseconds
//       : milliseconds

//   let timerRef = document.querySelector('.timer span')
//   timerRef.innerHTML = `${m} : ${s} : ${ms}`
// }

// function restTimer() {
//   let timerRef = document.querySelector('.timer span')
//   clearInterval(int)[(milliseconds, seconds, minutes)] = [0, 0, 0]
//   timerRef.innerHTML = '00 : 00 : 000 '
// }

function renderNextNum() {
  var strHTML = ''
  strHTML += `${gNextNum}`
  var elNextNum = document.querySelector('.next span')
  //   console.log('elNextNum', elNextNum)
  elNextNum.innerHTML = strHTML
}

function drawNum() {
  var idx = getRandomInt(0, gNums.length)
  var num = gNums.splice(idx, 1)[0]
  return num
}

function resetNums(boardSize) {
  var nums = []
  for (var i = 0; i < boardSize; i++) {
    nums.push(i + 1)
  }
  //   console.log('resetNums', nums)
  return nums
}

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min //The maximum is inclusive and the minimum is inclusive
}
