var url=require('url')
var adr='https://my.puma.com/my/en/pd/bmw-m-motorsport-r-cat-trainers/4062451824129.html?s_kwcid=PL-1-PUMA-MY-GO-EN-0000&mktID=PL%3ASingPost%3AGoogle%3A2019_AlwaysOn_Shopping_SPEC%3AMalaysia'
var add2="http://localhost:8081/siva?name=siva"

var q=url.parse(add2,true)
console.log(q.host)
console.log(q.pathname)
console.log(q.search)
var d=q.query

console.log(d.name)
