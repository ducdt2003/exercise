// str.slice(beginIndex, endIndex);

function truncateString(str){
    if (str.length > 15){
        return str.slice(0, 10) + '...';
    }else {
        return str
    }
}

console.log(truncateString("xinchaocacbandenvoiTechmaster"));