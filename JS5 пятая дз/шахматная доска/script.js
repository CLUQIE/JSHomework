let app = {
  config: {
    rows: [8,7,6,5,4,3,2,1],
    cols: ['a','b','c','d','e','f','g','h']
  },
  run(){
    //создаем доску
    let board = this.generateBoard();
    //добавляем доску в body
    document.body.innerHTML = board;
    // добавляем колонку с номерами
    this.insertRowsNumbers();
    // добавляем строку с буквами
    this.insertColsChars();
  },
  generateBoard(){
    let board ="";
    let rowsStartWithColor = 'white';
    for (let i = 0; i<this.config.rows.length; i++){
      let row="";
      if (rowsStartWithColor == 'white'){
        row = this.generateRow(rowsStartWithColor, this.config.rows[i]);
        rowsStartWithColor = 'black';
      } else {
        row = this.generateRow(rowsStartWithColor, this.config.rows[i]);
        rowsStartWithColor = 'white';
      }
      board += row;
    }
    return '<table>' + board + '</table>';
  },
  generateRow(startWithColor, rowNum){
    let currentColorClass = startWithColor;
    let row= "";
    for (let i = 0; i < this.config.cols.length; i++){
      let field = "";
      if (currentColorClass == 'white'){
        field = this.generateField('white',rowNum, this.config.cols[i]);
        currentColorClass = 'blackField';
      } else{
        field = this.generateField('black',rowNum, this.config.cols[i]);
        currentColorClass = 'white';
      }
      row += field;
    }
    return '<tr>' + row + '</tr>';
  },
  generateField(color, rowNum, colChar){
    return `<td data-rownum="${rowNum}" data-colChar="${colChar}" class="${color}"></td>`;
  },
  insertRowsNumbers(){
    let trs = document.querySelectorAll('tr');
    for (let i=0; i<trs.length;i++){
      let td = document.createElement('td');
      td.innerText = this.config.rows[i];
      trs[i].insertAdjacentElement('afterbegin', td);
    }
  },
  insertColsChars(){
    let tr = document.createElement('tr');
    tr.innerHTML += '<td></td>';
    for(let i = 0; this.config.cols.length;i++){
      tr.innerHTML+= `<td>${this.config.cols[i]}</td>`;
    }
    let tbody = document.querySelector('tbody');
    tbody.insertAdjacentElement('beforeend',tr);
  }
};

app.run();
