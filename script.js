let counter=0;
const counterElement=document.getElementById('counter');
const clk=document.getElementById('clk');
clk.addEventListener('click',()=>{
	alert(`Un-incremented value: ${counter}`);
	counter++;
	counterElement.textContent=counter;
});
