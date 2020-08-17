class Walk {
  isTenMinuteWalk(array) {
    let southCount = array.filter(x => x === 's').length
    let northCount = array.filter(y => y === 'n').length

    if (array.length < 10) {
      return false
    } else if (southCount !== northCount) {
      return false
    }

  }
};