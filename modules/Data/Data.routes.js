const ALL_Data = require('./Controller/get_all_data')

const router = require('express').Router()

router.get('/get_cluster_data/:number', ALL_Data.get_cluster_data)

router.get('/get_SS01_data', ALL_Data.get_SS01_data)

router.get('/get_W01_data', ALL_Data.get_W01_data)

router.get('/get_C01_data', ALL_Data.get_C01_data)

router.get('/get_ALMEME_data', ALL_Data.get_ALMEME_data)

router.get('/get_AlMZEIPW01_data', ALL_Data.get_AlMZEIPW01_data)

router.get('/get_F01_data', ALL_Data.get_F01_data)

router.get('/get_F02_data', ALL_Data.get_F02_data)

router.get('/get_AUTEME_data', ALL_Data.get_AUTEME_data)

router.get('/get_AUTOEMTAS01_data', ALL_Data.get_AUTOEMTAS01_data)

router.get('/get_AUTOEMTAS02_data', ALL_Data.get_AUTOEMTAS02_data)

router.get('/get_BANEME_data', ALL_Data.get_BANEME_data)

router.get('/get_BANIEIPW01_data', ALL_Data.get_BANIEIPW01_data)



module.exports = router
