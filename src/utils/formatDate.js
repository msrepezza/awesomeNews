
export function formatDate(date){

    let dDate = new Date(date);

    if(!isNaN(dDate)){
        let formattedDate =  dDate.getFullYear() + '/' + (dDate.getMonth() + 1) + '/' + dDate.getDate();
        return formattedDate;
    }
    else
        throw "Not found date";
}