function getBeer(id){
    return fetch('https://punkapi.com/documentation/v2/beers/1' + id)
    .then(response => response.json())
    .then(data => data.results[0])
}
describe('getBeer', ()=>{
    it('gets a single beer', ()=>{
        
    })
})