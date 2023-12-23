var NameInput = document.getElementById("NameInput")
var URLInput = document.getElementById("URLInput")
var errormessage= document.getElementById("errormessage")
var closeBtn= document.getElementById("closeBtn")
var xx= URLInput.value
var deleteBtns;
var visitBtns;
var arraylist=[];
if (localStorage.getItem('bookmarks')) {
    arraylist = JSON.parse(localStorage.getItem('bookmarks'));
    displaydata();
}
function addsite(){
    if((validationName()==true)&&(validationURL()==true)){
    var site={
        name:NameInput.value,
        url:URLInput.value,
    }
    arraylist.push(site);
    localStorage.setItem('bookmarks', JSON.stringify(arraylist));

    cleardata();
    NameInput.classList.remove("is-valid")
    NameInput.classList.remove("is-invalid")
    URLInput.classList.remove("is-valid")
    URLInput.classList.remove("is-invalid")
    displaydata();

}}
function cleardata(){
    NameInput.value=""
    URLInput.value=""
}
function displaydata(){
    var cartona="";
    for(var i=0;i<arraylist.length;i++){
        cartona+=`
        <tr>
        <td>${i}</td>
        <td>${arraylist[i].name}</td>
        <td>${arraylist[i].url}</td>
        <td>
        </button>
        <button
    class="btn btn-sm btn-success"
    style="font-size: 20px"
    onclick="visitSite('${arraylist[i].url}')"
>
    <i class="fa-solid fa-link"></i> &nbsp Visit &nbsp;
</button>
        <td>
<button onclick="deltdata(${i})" class="btn btn-sm btn-danger" style="font-size: 20px"><i class="fa-solid fa-trash-can"></i> &nbsp Delete&nbsp</button>
        </td>
        </tr>`
    }
    document.getElementById("tabelbody").innerHTML=cartona;
}


function deltdata(index){
    arraylist.splice(index,1)
    localStorage.setItem('bookmarks', JSON.stringify(arraylist));

    displaydata();
}

function visitSite(url) {
    window.open(url, '_blank');
}

function validationName(){
    var text=NameInput.value;
    var regexName= /^\w{3,}(\s+\w+)*$/;

    if(regexName.test(text)==true){
        NameInput.classList.add("is-valid")
        NameInput.classList.remove("is-invalid")
        errormessage.classList.add("d-none")
        return true;
    }
    else{
        NameInput.classList.add("is-invalid")
        NameInput.classList.remove("is-valid")
        errormessage.classList.remove("d-none")
        return false;
    }
}
function validationURL(){
    var text=URLInput.value;
    var regexName= /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;

    if(regexName.test(text)==true){
        URLInput.classList.add("is-valid")
        URLInput.classList.remove("is-invalid")
        errormessage.classList.add("d-none")
        return true;
    }
    else{
        URLInput.classList.add("is-invalid")
        URLInput.classList.remove("is-valid")
        errormessage.classList.remove("d-none")
        return false;
    }
}
function closeModal() {
    errormessage.classList.add("d-none");
  }
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("box-info")) {
      closeModal();
    }
  });

