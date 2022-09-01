const reader = require('xlsx')
const path = require('path')

const Read_Data = (file_path, res) => {
  // Reading our excel sheet file
  const file = reader.readFile(path.join(__dirname, file_path), {
    sheetRows: false
  })
  const data = []
  const sheets = file.SheetNames
  for (let i = 0; i < sheets.length; i++) {
    const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]])
    temp.forEach(res => {
      data.push(res)
    })
  }
  res.json({ message: 'Done', data: data })
}

module.exports = Read_Data
