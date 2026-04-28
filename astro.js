var astro = {}

astro.calc = async function (tyear, tmonth, tday, thour, tminute, tsecond) {
  var r = await $.post('/qm/astro', {
    birthday: tyear + '/' + tmonth + '/' + tday + ' ' + thour + ':' + tminute + ':' + tsecond
  }).catch(e => {
    //
  })
  var zhi = '子丑寅卯辰巳午未申酉戌亥'
  var zhistar = ['', '', '', '', '', '', '', '', '', '', '', '']
  if (r) {
    astro.result = r
    var pos = r.position
    for (var i in pos) {
      for (var z in zhi) {
        if (zhi[z] == pos[i][1]) zhistar[z] += pos[i][0]
      }
    }
    return { pos: pos, zhistar: zhistar }
  } else return false
}

astro.calc_now = async function () {
  var d = new Date()
  var door = await astro.calc(
    parseInt(d.getFullYear()),
    parseInt(d.getMonth()) + 1,
    parseInt(d.getDate()),
    parseInt(d.getHours()),
    parseInt(d.getMinutes()),
    parseInt(d.getSeconds())
  )
  return door
}
