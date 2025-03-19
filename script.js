let counter=0;
const counterElement=document.getElementById('counter');
const incrementBtn=document.getElementById('incrementBtn');
incrementBtn.addEventListener('click',()=>{
	alert(`${counter}`);
	counter++;
	counterElement.textContent=counter;
});
