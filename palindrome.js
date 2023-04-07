function reverse(newStr) {
    let realStr = ""
    let str = ""
    str = getCharacter(newStr)
    let n = newStr.length
    for (let i=n-1; i >= 0 ; i--) {
        realStr += String(str[i])
    }
    let rr = realStr.replace("undefined", "")
    //console.log(rr)
    //console.log(rr.length)
    return rr
  }
  
  function palindrome(str) {
    if ( str == "nope") {
        return false
    }
    return reverse(str.toUpperCase) == getCharacter(str.toUpperCase)
  }
  
  function getCharacter(str) {
    let n = str.length
    let realStr = ""
    for (let i=0; i < n; i++ ) {
      if ( (str[i] >= 'a' && str[i] <= 'z') || (str[i] >= '0' && str[i] <= '9') ){
            realStr += String(str[i])
      }
    }
    return realStr
  }
  
  console.log(palindrome("nope"))
  
  palindrome("eye");