class Walk {
  isTenMinuteWalk(array) {
    let southCount = array.filter(s => s === 's').length
    let northCount = array.filter(n => n === 'n').length
    let eastCount = array.filter(e => e === 'e').length
    let westCount = array.filter(w => w === 'w').length

    if (array.length < 10 || southCount !== northCount || eastCount !== westCount) {
      return false
    } else {
      return true
    }

  }
};