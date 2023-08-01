module.exports = function toReadable (number) {
    
    // обработчик количества разрядов
    const countRank = (number) => {
        let str = '';
        const rank = String(number).length;
        if (rank === 1) {
            return unitTransform(number);
        }

        if (rank === 2) {
            if (number >= 10 && number < 20) {
                return ten_twentyTransfom(number);
            }
            if (number >= 20 && number <= 99) {
                if (!(number % 10)) {
                    str = tensTransform(number)
                    return str;
                }
                else {
                    str = `${tensTransform(Math.floor(number / 10) * 10)} ${unitTransform(number % 10)}`;
                    return str; 
                }
            }
        }
        
        if (rank = 3) {
            
        }

        if (rank = 4) {
            return 'thousand';
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

    // обработчик десятков 20-90
    const tensTransform = (number) => {
        let arr = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        return arr[number / 10 - 2];
    }

    // обработчик сотен (не забыть про s в 200+ hundreeds)
    const hundreedTransform = (number) => {
                   
    }
    
    // обработчик 1000 =)

}