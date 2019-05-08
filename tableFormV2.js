    arrjob = ['dev','Digital Marketing','Sales', 'Lawyer', 'Adventurer']
    arrform = [
    {nama: 'alex', umur : 22, jobT:'dev'},
    {nama: 'beatrix', umur : 24, jobT:'Digital Marketing'},
    {nama: 'Chloe', umur : 21, jobT:'dev'},
    {nama: 'Dave', umur : 26, jobT:'Sales'},
    {nama: 'Eri', umur : 29, jobT:'Lawyer'},
    {nama: 'Frodo', umur : 35, jobT:'Adventurer'}
]
var fn1 = () =>{
var name = document.getElementById('nama').value
var age = document.getElementById('umur').value
var job = document.getElementById('jobT').value

arrform.push({
    nama : name,
    umur : age,
    jobT : job
})
arrjob.push(job)

    //cuma ngetes buat do log
var iterator = arrform.values()
for(let elements of iterator){
    console.log(elements); 
}
var iterator2 = arrjob.values()
for(let elements2 of iterator2){
    console.log(elements2);
   
}


show(arrform,'here')


}
var show = (arrei, target) =>{
    var list = ''
    for(var i = 0; i < arrei.length; i++){
        list += `
        <tr>
            <td>${arrei[i].nama}</td>
            <td>${arrei[i].umur}</td>
            <td>${arrei[i].jobT}</td>
        </tr>
        `
    }   
    document.getElementById(`${target}`).innerHTML = list;

    let x = (arrjob) => arrjob.filter((v,i) => arrjob.indexOf(v) === i)
    
    var select = document.getElementById("dropdownjob");
    for(var i = 0; i < arrjob.length; i++) {
    var opt = arrjob[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}
    
}

var fn2 = () =>{

}

var fn3 = () =>{

}

var fn4 = () =>{

}

var onLoad = () =>{

}
