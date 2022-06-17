
const service = async () => {
    
    const url = `https://firebasestorage.googleapis.com/v0/b/interview-498d3.appspot.com/o/news.json?alt=media&token=63f227b0-7774-4016-b7fe-42507315ac9e`;

    const response = await fetch(url);
    
    console.log('servicio')
    if(response.ok)
        return response.json();
    else
        throw "Not found information";

}

export default service;