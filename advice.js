

const adviceNo = document.getElementById('advice-no');
const advicePara = document.getElementById('advice-para');
const btn = document.getElementById('btn');

btn.addEventListener('click',request)

request()

async function request(){
	const config = {
		header:{
			'Accept':'application/json'
		}
	}
	fetch('https://api.adviceslip.com/advice',config)
	.then(res => res.json())
	.then((slip) => {
		advicePara.innerHTML = "\""+slip.slip.advice+"\"";
		adviceNo.innerHTML = "ADVICE"+" "+"#"+slip.slip.id;
	})
}