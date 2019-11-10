let webUrl1='';
let webUrl2='';

if(process.env.NODE_ENV === 'development'){
	webUrl1='http://localhost:8080/api';//云服务器项目api，已经由Nginx转发了
	webUrl2='http://localhost:8080/bpi';//爱奇艺海贼王api，已经由Nginx转发了
}else{
	webUrl1='http://106.12.140.159:8080/api';//云服务器项目api,106.12.140.159是服务器云地址，已经由Nginx转发了
	webUrl2='http://106.12.140.159:8080/bpi';//爱奇艺海贼王api,106.12.140.159是服务器云地址，已经由Nginx转发了
}

export{webUrl1,webUrl2}