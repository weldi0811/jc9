   let arrManusia = [
    {nama: 'Alex', umur: 22, job: 'Dev'},  // ALVIN -> alvin (/toLowerCase()) 
    {nama: 'Alicia', umur: 32, job: 'Dev'},
    {nama: 'Alona', umur: 26, job: 'Dev'},
    {nama: 'Batios', umur: 33, job: 'CEO'},
    {nama: 'Bakhti', umur: 38, job: 'PM'},
    {nama: 'Charlee', umur: 27, job: 'CTO'}
];

let arrJob = [
    'All' ,'Dev', 'CEO', 'PM', 'CTO'
];

// [tr, tr, tr, tr, tr, tr]
// Merender list data ke tabel
var funShow = () => {
    var listManusia = arrManusia.map((val) => { // val = {name, age,  job}
        return `<tr>
        <td>${val.nama}</td>
        <td>${val.umur}</td>
        <td>${val.job}</td>
        </tr>`
    })

    var listJob = arrJob.map(val => { // val = string seperti 'All', 'Dev', 'CEO'
        return `<option>${val}</option>`
    })

    document.getElementById('here').innerHTML = listManusia.join('')
    document.getElementById('job').innerHTML = listJob.join('')

}

// Input Data
var funInputData = () => {
    var NAMA = document.getElementById('nama').value
    var UMUR = document.getElementById('umur').value
    var JOB = document.getElementById('jobInput').value

    arrManusia.push({
        nama: NAMA,
        umur: UMUR,
        job: JOB
    })

    if(arrJob.includes(JOB) == false){
        arrJob.push(JOB)
    }

    funShow()

}

// FILTER NAME
var funFilterName = () => {
    var filter = document.getElementById('search').value
    var test = []
    var list = []

    for (var i = 0; i < arrManusia.length; i++){
        var name = arrManusia[i].nama.toLowerCase()
        var input = filter.toLowerCase()
        
        if(name.includes(input)){ // true of false
            test.push(arrManusia[i])
        }

    }

    list = test.map(val => {
        return `<tr>
        <td>${val.nama}</td>
        <td>${val.umur}</td>
        <td>${val.job}</td>
        </tr>`
    })

    document.getElementById('here').innerHTML = list.join('')
    
}

var fn3 = () =>{
    var umur1 = document.getElementById('num1').value
    var umur2 = document.getElementById('num2').value
    var testumur = []
    var testlist = []
    if(umur1 != null){
        for(var i = 0; i < arrManusia.length; i++){
            var usia = parseInt(arrManusia[i].umur)
            var inputumur1 = parseInt(umur1)
                if(usia>=inputumur1){
                    testumur.push(arrManusia[i])
                } 
        }
    }
    if(umur2 != null){
        for(var i=0; i< arrManusia.length; i++){
            var usia=parseInt(arrManusia[i].umur)
            var inputumur2 = parseInt(umur2)
                if(usia<=inputumur2){
                    testumur.push(arrManusia[i])
                }
        }
    }

    if(testumur.includes(usia)){ // true of false
        testumur.push(arrManusia[i])
    }



    testlist = testumur.map(val => {
        return `<tr>
        <td>${val.nama}</td>
        <td>${val.umur}</td>
        <td>${val.job}</td>
        </tr>`
    })

    document.getElementById('here').innerHTML = testlist.join('')
    console.log(umur1);
    console.log(umur2);
    
    
}

var fn4 = () =>{
    var filter = document.getElementById('job').value
    var test = []
    var list = []

    for (var i = 0; i < arrManusia.length; i++){
        var job = arrManusia[i].job.toLowerCase()
        var input = filter.toLowerCase()

        if(input == 'all'){
            test.push(arrManusia[i])
        }
        
        if(job.includes(input)){ // true of false
            test.push(arrManusia[i])
        }

    }

    list = test.map(val => {
        return `<tr>
        <td>${val.nama}</td>
        <td>${val.umur}</td>
        <td>${val.job}</td>
        </tr>`
    })

    document.getElementById('here').innerHTML = list.join('')
}
