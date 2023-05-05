
let tbody = document.getElementById("tbody");

(async function loadDefaultData(){
    let url = `https://gist.githubusercontent.com/harsh3195/b441881e0020817b84e34d27ba448418/raw/c4fde6f42310987a54ae1bc3d9b8bfbafac15617/demo-json-data.json`;
    let response = await fetch(url);
    let students = await response.json();
    loadDatatoTable(students);
})();

async function loadDefaultData(){
    let url = `https://gist.githubusercontent.com/harsh3195/b441881e0020817b84e34d27ba448418/raw/c4fde6f42310987a54ae1bc3d9b8bfbafac15617/demo-json-data.json`;
    let response = await fetch(url);
    let students = await response.json();
    return students;
}

function loadDatatoTable(students){
    tablem.style.display = "none";
    students.forEach((item)=>{
        let tr = document.createElement("tr");
        let fullname = `${item.first_name} ${item.last_name}`;
        let passing = item.passing? "Passed":"Failed";
        tr.innerHTML = `<td>${item.id}</td>
                         <td><div class="imgc"><img src="${item.img_src}">
                              ${fullname}</div>
                         </td>
                         <td>${item.gender}</td>
                         <td>${item.class}</td>
                         <td>${item.marks}</td>
                         <td>${passing}</td>
                         <td>${item.email}</td>`;
        tbody.appendChild(tr);
    })
}


let searchstring = document.getElementById("searchstring");

async function filterData(){
    let data = await loadDefaultData();
    tbody.innerHTML='';
    let resultstudents = data.filter((item)=>{
        let valuestr = searchstring.value.toLowerCase();
        let value = valuestr.trim();
        if(value === `${item.last_name}`.toLowerCase() || value === `${item.first_name}`.toLowerCase()|| value === `${item.email}`.toLowerCase()){
            return true;
        }
    })
    loadDatatoTable(resultstudents);
}

async function sortazf(){
    let students = await loadDefaultData();
    tbody.innerHTML='';
    students.forEach(function(student) {
        student.fullName = student.first_name + " " + student.last_name;
      });

      students.sort(function(a, b) {
        if (a.fullName < b.fullName) {
          return -1;
        } else if (a.fullName > b.fullName) {
          return 1;
        } else {
          return 0;
        }
      });
    
      loadDatatoTable(students);
}

async function sortza(){
    let students = await loadDefaultData();
    tbody.innerHTML='';
    students.forEach(function(student) {
        student.fullName = student.first_name + " " + student.last_name;
      });

      students.sort(function(a, b) {
        if (a.fullName > b.fullName) {
          return -1;
        } else if (a.fullName < b.fullName) {
          return 1;
        } else {
          return 0;
        }
      });
    
      loadDatatoTable(students);
}

async function sortbymarks(){
    let students = await loadDefaultData();
    tbody.innerHTML='';
    students.sort((a,b)=>{
        return a.marks - b.marks;
    })
    loadDatatoTable(students);
}

async function sortbyclass(){
    let students = await loadDefaultData();
    tbody.innerHTML='';
    students.sort((a,b)=>{
        return a.class - b.class;
    })
    loadDatatoTable(students);
}

async function sortbypassing(){
    let students = await loadDefaultData();
    tbody.innerHTML='';
    let resultstudents = students.filter((item)=>{
        if(item.passing) return true;
    })

    loadDatatoTable(resultstudents);
}

let tbodymale = document.getElementById("tbodymale");
let tablem = document.getElementById("tablem");

async function sortbygender(){
    let students = await loadDefaultData();
    tbody.innerHTML='';
    let female = students.filter((item)=>{
        if(item.gender === "Female") return true;
    })
    loadDatatoTable(female);
    
    let male = students.filter((item)=>{
        if(item.gender === "Male") return true;
    })

    tablem.style.display = "table";

    tbodymale.innerHTML='';
    male.forEach((item)=>{
        let tr = document.createElement("tr");
        let fullname = `${item.first_name} ${item.last_name}`;
        let passing = item.passing? "Passed":"Failed";
        tr.innerHTML = `<td>${item.id}</td>
                         <td><div class="imgc"><img src="${item.img_src}">
                              ${fullname}</div>
                         </td>
                         <td>${item.gender}</td>
                         <td>${item.class}</td>
                         <td>${item.marks}</td>
                         <td>${passing}</td>
                         <td>${item.email}</td>`;
        tbodymale.appendChild(tr);
    })
}
