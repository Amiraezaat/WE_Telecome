const Read_Data = require('../../../Utilies/Read_data')
const reader = require('xlsx')
const path = require('path')

//========================================================//
exports.get_cluster_data = (req, res) => {
  const { number } = req.params //cluster number
  const file = reader.readFile(
    path.join(__dirname, '../../../Data_sheets/50 Clusters (1).csv'),
    {
      sheetRows: false
    }
  )
  const data = []
  const sheets = file.SheetNames
  for (let i = 0; i < sheets.length; i++) {
    const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]])
    temp.forEach(res => {
      if (res.Cluster.toString() == number.toString()) {
        data.push([res['Cell Name'] ,res['EPM_RRC_SR']  , res['EPM_ERAB_SR'] , res['Cluster']])
      }
    })
  }
  if (data.length > 0) {
    res.status(200).json({ message: 'Done', data: data })
  } else {
    res
      .status(400)
      .json({
        message: 'In-valid clutser number , please enter a valid number '
      })
  }
}

//========================================================//

exports.get_SS01_data = (req, res) => {
  Read_Data('../Data_sheets/ALEXHSS01.txt.csv', res)
}

//========================================================//

exports.get_W01_data = (req, res) => {
  Read_Data('../Data_sheets/AlEXIPW01.txt.csv', res)
}

//========================================================//

exports.get_C01_data = (req, res) => {
  Read_Data('../Data_sheets/ALMDSC01.txt.csv', res)
}

//========================================================//

exports.get_ALMEME_data = (req, res) => {
  Read_Data('../Data_sheets/ALMEME.txt.csv', res)
}

//========================================================//

exports.get_AlMZEIPW01_data = (req, res) => {
  Read_Data('../Data_sheets/AlMZEIPW01.txt.csv', res)
}

//========================================================//

exports.get_F01_data = (req, res) => {
  Read_Data('../Data_sheets/ATCSCF01.txt.csv', res)
}

//========================================================//

exports.get_F02_data = (req, res) => {
  Read_Data('../Data_sheets/ATCSCF02.txt.csv', res)
}

//========================================================//

exports.get_AUTEME_data = (req, res) => {
  Read_Data('../Data_sheets/AUTEME.txt.csv', res)
}

//========================================================//

exports.get_AUTOEMTAS01_data = (req, res) => {
  Read_Data('../Data_sheets/AUTOEMTAS01.txt.csv', res)
}

//========================================================//

exports.get_AUTOEMTAS02_data = (req, res) => {
  Read_Data('../Data_sheets/AUTOEMTAS02.txt.csv', res)
}

//========================================================//

exports.get_BANEME_data = (req, res) => {
  Read_Data('../Data_sheets/BANEME.txt.csv', res)
}

//========================================================//

exports.get_BANIEIPW01_data = (req, res) => {
  Read_Data('../Data_sheets/BANIEIPW01.txt.csv', res)
}
