const addProduct = () =>{
    const nameo = document.getElementById("name");
    const quantityo = document.getElementById("quantity");
    const jh = nameo.value;
    const jh2 = quantityo.value;

    nameo.value = '';
    quantityo.value = '';
    const product = console.log(jh, jh2);
    system(jh, jh2)
}

// the below code fragment can be found in:
 const system = (jh, jh2) => {
    const adding2 = document.getElementById("adding");
    const adding3 = document.createElement("li");
    li.innerText = `${jh}: ${jh2}`
    adding2.appendChild(adding3);
 }