module.exports = function toReadable (number) {

    //PS дерьмо а не код =)
    
    let str = '';
    // обработчик количества разрядов
    const countRank = (number) => {
        const rank = String(number).length;
        if (rank === 1) {
            return unitTransform(number);
        }

        if (rank === 2) {
            return tenTransform(number);
        }
        
        if (rank === 3) {
            return hundreedTransform(number);
        }

        if (rank === 4) {
            return 'one thousand';
        }
    }

    // обработчик единиц unit 0-9
    const unitTransform = (number) => {
        let arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        return arr[number];
    }

    // обработчик десятков 10-19
    const ten_twentytransform = (number) => {
        let arr = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        return arr[number-10];
    }

    // обработчик круглых десятков 20-90
    const tensRoundTransform = (number) => {
        let arr = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        return arr[number / 10 - 2];
    }

    // десятки ИТОГ
    const tenTransform = (number) => {
        if (number >= 10 && number < 20) {
            return ten_twentytransform(number);
        }
        // переписать: убрать if, оставить только код
        if (number >= 20 && number <= 99) {
            if (!(number % 10)) {
                str = tensRoundTransform(number);
                return str;
            }
            else {
                str = `${tensRoundTransform(Math.floor(number / 10) * 10)} ${unitTransform(number % 10)}`;
                return str; 
            }
        }
        // if ((number % 100) === 10) {
        //     return unitTransform(number % 100);
        //     }
        // }
        // if (number % 100 === 0) {
        //     return '';
        }
                
    // обработчик сотен
    const hundreedTransform = (number) => {
        str = `${unitTransform(Math.floor(number/100))} hundred ${(number % 100) ? tenTransform(number % 100) || unitTransform(number % 100): ''}`;
        return str;
    }

    return countRank(number);
}
