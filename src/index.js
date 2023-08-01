module.exports = function toReadable (number) {
    
    let str = '';
    // обработчик количества разрядов
    const countRank = (number) => {
        const rank = String(number).length;
        if (rank === 1) {
            return unitTransform(number);
        }

        if (rank === 2) {
            return tenTransfom(number);
        }
        
        if (rank === 3) {
            return hundreedTransform(number);
            // str = `${unitTransform(Math.floor(number/100))} ${hundreedTransform(number)} ${tenTransfom(number)}`
        }

        if (rank === 4) {
            return 'one thousand';
        }
    }
    // обработчик единиц unit 0-9
    const unitTransform = (number) => {
        let unitArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eigth', 'nine'];
        return unitArr[number];
    }

    // обработчик десятков 10-19
    const ten_twentyTransfom = (number) => {
        let arr = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'fifteen', 'seventeen', 'eighteen', 'nineteen'];
        return arr[number-10];
    }

    // обработчик круглых десятков 20-90
    const tensRoundTransform = (number) => {
        let arr = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        return arr[number / 10 - 2];
    }

    // десятки ИТОГ
    const tenTransfom = (number) => {
        if (number >= 10 && number < 20) {
            return ten_twentyTransfom(number);
        }
        if (number >= 20 && number <= 99) {
            if (!(number % 10)) {
                str = tensRoundTransform(number)
                return str;
            }
            else {
                str = `${tensRoundTransform(Math.floor(number / 10) * 10)} ${unitTransform(number % 10)}`;
                return str; 
            }
        }
    }
                
    // обработчик сотен (не забыть про s в 200+ hundreeds)
    const hundreedTransform = (number) => {
        let hun = 'hundreeds';
        if (number < 200) {
            hun = 'hundreed'
        }    
        str = `${unitTransform(Math.floor(number/100))} ${hun} ${tenTransfom(number % 100)}`;
        return str;
    }

    // обработчик 1000 =)

}