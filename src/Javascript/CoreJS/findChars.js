const words = ["baby", "referee", "cat"];
const input1 = "ctay";
const input2 = "baygtuigf";
const input3 = "batyureb";

const findChars = (words, chars) => {
    let isFulfilled = false;
    let result = "";
    for (let i = 0; i < words.length; i++) {
        if (isFulfilled) return result;
        result = "";
        for (let j = 0; j < words[i].length; j++) {
            if (chars.includes(words[i][j])) {
                chars = chars.replace(words[i][j], "");
                result += words[i][j];
                if (result === words[i]) {
                    isFulfilled = true;
                    break;
                }
            } else {
                result = "-";
                break;
            }
        }
    }
    return result;
};

console.log(findChars(words, input1));
console.log(findChars(words, input2));
console.log(findChars(words, input3));