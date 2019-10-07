module.exports = function check(str, bracketsConfig) {
    let matchConfigNumbers = [];
    for (let i = 0; i < str.length; i++) {
        let symbol = str.charAt(i);
        for (let ConfigNumber = 0; ConfigNumber < bracketsConfig.length; ConfigNumber++) {
            let openBracketConfig = bracketsConfig[ConfigNumber][0];
            let closeBracketConfig = bracketsConfig[ConfigNumber][1];
            if (symbol === openBracketConfig) {
                if (openBracketConfig === closeBracketConfig && ConfigNumber === matchConfigNumbers[matchConfigNumbers.length - 1]) {
                    matchConfigNumbers.pop();
                } else {
                    matchConfigNumbers.push(ConfigNumber);
                }
            } else if (symbol === closeBracketConfig) {
                if (ConfigNumber === matchConfigNumbers[matchConfigNumbers.length - 1]) {
                    matchConfigNumbers.pop();
                } else {
                    return false;
                }
            }
        }
    }
    return !matchConfigNumbers.length;
}
