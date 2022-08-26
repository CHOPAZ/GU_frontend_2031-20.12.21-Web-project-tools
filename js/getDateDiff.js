import { DateTime } from './luxon.js'

function getDateDiff (dateFrom, dateTo) {
  const dataFromObj = DateTime.fromISO(dateFrom)
  const dataToObj = DateTime.fromISO(dateTo)

  return dataFromObj.diff(dataToObj, ['years', 'months', 'days']).toObject()
}

export default getDateDiff