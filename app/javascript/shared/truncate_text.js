export default {
  methods: {
    truncate_text(str, length, ending) {
      if(str != null) {
        if (length == null) {
          length = 100;
        }
        if (ending == null) {
          ending = '...';
        }
        if (str.length > length) {
          return str.substring(0, length - ending.length) + ending;
        } else {
          return str;
        }
      } else {
        return str;
      }
    },
    truncate_middle(fullStr, strLen, separator) {
      if (fullStr.length <= strLen) return fullStr;

      separator = separator || '...';

      var sepLen = separator.length,
          charsToShow = strLen - sepLen,
          frontChars = Math.ceil(charsToShow/2),
          backChars = Math.floor(charsToShow/2);

      return fullStr.substr(0, frontChars) +
             separator +
             fullStr.substr(fullStr.length - backChars);
    }
  }
};
