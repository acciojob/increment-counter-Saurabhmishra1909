let counter=0;
const counterElement=document.getElementById('counter');
const incrementBtn=document.getElementById('incrementBtn');
clk.addEventListener('click',()=>{
	alert(`Un-incremented value: ${counter}`);
	counter++;
	counterElement.textContent=counter;
});
