var arrjob = ['all','dev','CTO','CEO']
var arrform = [
    {nama: 'alex', umur : 22, jobT:'dev'}
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

show(arrform,'here')

var select = document.getElementById('job')
select.options[select.option.length] = new Option()
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


    
    var option = document.createElement("option");
    option.text = document.getElementById('jobT').value;

    job.add(option);

    
}

var fn2 = () =>{

}

var fn3 = () =>{

}

var fn4 = () =>{

}
