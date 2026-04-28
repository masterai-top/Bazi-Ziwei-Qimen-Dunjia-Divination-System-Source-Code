//---奇門----
var bzdoor = {}
var yat_ji = '子丑寅卯辰巳午未申酉戌亥'
//if (window.location.href.substr(0, 4) == "http")
//    bzdoor.server = "";
//else
bzdoor.server = '/qm'
bzdoor.showdetail = ''
bzdoor.door_search_day = 30
bzdoor.square = [
  [3, 8, 1],
  [2, 4, 6],
  [7, 0, 5]
]
bzdoor.squarez = [
  ['辰', '申'],
  ['卯', '酉'],
  ['寅', '戌']
]
bzdoor.astroindex = [
  [4, 8],
  [3, 9],
  [2, 10]
]
bzdoor.locations = ['坎', '坤', '震', '巽', '中', '乾', '兌', '艮', '離']
bzdoor.locations2 = ['坤', '巽', '離', '兌', '中', '艮', '坎', '震', '乾']
bzdoor.header = [
  ['甲子', '戊'],
  ['甲戌', '己'],
  ['甲申', '庚'],
  ['甲午', '辛'],
  ['甲辰', '壬'],
  ['甲寅', '癸']
]
bzdoor.match5 = function (gz) {
  switch (gz[0]) {
    case '甲':
      if (gz[1] == '子') return '癸'
      else if (gz[1] == '戌') return '己'
      else if (gz[1] == '申') return '乙'
      else if (gz[1] == '午') return '丙'
      else if (gz[1] == '辰') return '丁'
      else if (gz[1] == '寅') return '戊'
    case '乙':
      return '庚'
    case '丙':
      return '辛'
    case '丁':
      return '壬'
    case '戊':
      return '癸'
    case '己':
      if (gz[1] == '巳') return '戊'
      else if (gz[1] == '卯') return '己'
      else if (gz[1] == '丑') return '庚'
      else if (gz[1] == '亥') return '辛'
      else if (gz[1] == '酉') return '壬'
      else if (gz[1] == '未') return '癸'
    case '庚':
      return '乙'
    case '辛':
      return '丙'
    case '壬':
      return '丁'
    case '癸':
      return '戊'
  }
}
bzdoor.calc_door_best = function (days, find) {
  $.post(
    bzdoor.server + '/bestdoor',
    {
      days: days,
      find: find
    },
    r => {
      bzdoor.door_best = r
      bzdoor.$apply()
    },
    e => {
      alert('Fail')
    }
  )
}
bzdoor.calc_now = async function () {
  var d = new Date()
  var door = await bzdoor.calc_door_process(
    parseInt(d.getFullYear()),
    parseInt(d.getMonth()) + 1,
    parseInt(d.getDate()),
    parseInt(d.getHours()),
    parseInt(d.getMinutes()),
    parseInt(d.getSeconds())
  )
  return door
}
bzdoor.calc_door_str = async function (datestr) {
  var parts = datestr.split(' ')
  var d = parts[0].split('/')
  var h = parts[1].split(':')
  return await bzdoor.calc_door_process(d[0], d[1], d[2], h[0], h[1], h[2])
}
bzdoor.calc_door_process = async function (tyear, tmonth, tday, thour, tminute, tsecond) {
  var r = await $.post(bzdoor.server + '/door', {
    birthday: tyear + '/' + tmonth + '/' + tday + ' ' + thour + ':0:0'
  }).catch(e => {
    //
  })
  var astro_result = await astro.calc(tyear, tmonth, tday, thour, tminute, tsecond)
  if (r) {
    bzdoor.door = r.door
    bzdoor.door.luiyin = r.luiyin
    bzdoor.astro = astro_result
    return bzdoor.door
  } else return false
}
bzdoor.search_door = async function (room, days) {
  var r = await $.post(bzdoor.server + '/bestdoor', {
    room: room,
    days: days
  }).catch(e => {
    //
  })
  if (r) {
    return r
  } else return false
}
bzdoor.getheader = function (word) {
  for (var i in bzdoor.header) if (bzdoor.header[i][0] == word) return bzdoor.header[i][1]
}

bzdoor.fullname = function (word) {
  return doordict.fullname(word)
}
bzdoor.getelement = function (word) {
  return doordict.element[word]
}
bzdoor.intomb = function (word, location) {
  if (!bzdoor.door) return ''
  return doordict.intomb(word, location)
}
bzdoor.issuck = function (word, location) {
  if (!bzdoor.door) return ''
  return doordict.issuck(word, location)
}
bzdoor.isempty = function (location) {
  if (!bzdoor.door) return ''
  return doordict.isempty(bzdoor.door.empty[6] + bzdoor.door.empty[7], location)
}
bzdoor.showgmatchgood = function (word) {
  if (doordict.gmatch[word]) return doordict.gmatch[word].substr(5, 1)
  else return ''
}
/*
bzdoor.showgmatchmeaning = function (word) {
    bzdoor.showtitle = doordict.gmatch[word].substr(0, 4) + ' (' + doordict.gmatch[word].substr(5, 1) + ')';
    bzdoor.showdetail = $sce.trustAsHtml(doordict.gmatch[word]);
}*/
bzdoor.showboxtext = function (title, word) {
  bzdoor.showtitle = title
  bzdoor.showdetail = $sce.trustAsHtml(word)
}
bzdoor.getmean = function (word) {
  var title = word
  var body = doordict.meaning[word].replace(/^\n+/, '').replace(/\n/g, '<br>')
  return { title: title, body: body }
}
bzdoor.relate = function (other, me) {
  return doordict.relate(other, me)
}
bzdoor.life = function (other, me) {
  var relate = doordict.relate(other, me)
  if (relate == '生') return 'level4'
  if (relate == '幫') return 'level5'
  if (relate == '泄') return 'level3'
  if (relate == '耗') return 'level2'
  if (relate == '克') return 'level1'
}
bzdoor.level = function (other, me) {
  var relate = doordict.relate(other, me)
  if (relate == '生') return 'level5'
  if (relate == '幫') return 'level4'
  if (relate == '泄') return 'level3'
  if (relate == '耗') return 'level2'
  if (relate == '克') return 'level1'
}
var thisyear = new Date()
bzdoor.zhiyear = {}
thisyear = thisyear.getFullYear()
for (var i = thisyear; i > thisyear - 24; i--) {
  if (!bzdoor.zhiyear[yat_ji[(i - 1911 - 1) % 12]]) bzdoor.zhiyear[yat_ji[(i - 1911 - 1) % 12]] = [i]
  else bzdoor.zhiyear[yat_ji[(i - 1911 - 1) % 12]].push(i)
}
bzdoor.inroom = function (room) {
  if (!bzdoor.door) return ''
  return (
    (room == bzdoor.door.gz[1] ? '年' : '') +
    (room == bzdoor.door.gz[3] ? '月' : '') +
    (room == bzdoor.door.gz[5] ? '日' : '') +
    (room == bzdoor.door.gz[7] ? '時' : '')
  )
}
