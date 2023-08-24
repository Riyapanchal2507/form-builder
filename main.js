'use strict';
let inc = 1;
function addinput() {
    document.getElementById("add-field").innerHTML +=
        "<div style='    background-image: radial-gradient(circle farthest-corner at 10% 20%, rgb(133 29 25) 10%, rgb(221 170 165 / 98%) 99.8%); padding: 20px;color: white; margin: 10px;' id='my-input-form" + inc + "'><h1 id='main-text-changer" + inc + "' class='text' >Input<span class='star' style = 'display:none;'>*</span></h1><input type='text' placeholder='Enter Your Name Here'/><button class = 'btns' style = 'margin-left:40px;' onclick='remove_input(" + inc + ")'><i class='fa-solid fa-trash'></i></button><button class = 'btns' onclick='open_side_nav(" + inc + ")''><i class='fa-solid fa-pencil'></i></button><div id='mySidebar-2" + inc + "' class = 'edit-field'> <a href='javascript:void(0)' class='closebtn' onclick='close_side_nav(" + inc + ")'>×</a> <div class='form-group input_fromlay'> <label for='exampleInputEmail1' style= 'color: #fff; font-size: 26px; margin-top: -12px; margin-bottom: 20px; font-weight: 600;'>Feild Label</label> <input type='text' class='form-control input_textlay' id='emailinput-" + inc + "' onkeyup='inpute_change(" + inc + ", this.value)' placeholder='Name'> <div class='form-check padd'></div> </div></div>";
    inc++;
}

function addtextarea() {
    document.getElementById("add-field").innerHTML +=
        "<div style='    background-image: radial-gradient(circle farthest-corner at 10% 20%, rgb(133 29 25) 10%, rgb(221 170 165 / 98%) 99.8%); padding: 20px;color: white; margin: 10px;' id='my-input-form" + inc + "'><h1 id='main-text-changer" + inc + "' class='text' >Textarea<span class='star' style = 'display:none;'>*</span></h1><textarea placeholder='add text here'></textarea><button class = 'btns' style = 'margin-left:40px;' onclick='remove_input(" + inc + ")'><i class='fa-solid fa-trash'></i></button><button class = 'btns' onclick='open_side_nav(" + inc + ")''><i class='fa-solid fa-pencil'></i></button><div id='mySidebar-2" + inc + "' class = 'edit-field'> <a href='javascript:void(0)' class='closebtn' onclick='close_side_nav(" + inc + ")'>×</a> <div class='form-group input_fromlay'> <label for='exampleInputEmail1'  style= 'color: #fff; font-size: 26px; margin-top: -12px; margin-bottom: 20px; font-weight: 600;'>Feild Label</label> <input type='text' class='form-control input_textlay' id='emailinput-" + inc + "' onkeyup='inpute_change(" + inc + ", this.value)' placeholder='Name'> <div class='form-check padd'></div> </div></div>";
    inc++;
}

function addemail() {
    document.getElementById("add-field").innerHTML +=
        "<div style='    background-image: radial-gradient(circle farthest-corner at 10% 20%, rgb(133 29 25) 10%, rgb(221 170 165 / 98%) 99.8%); padding: 20px;color: white; margin: 10px;' id='my-input-form" + inc + "'><h1 id='main-text-changer" + inc + "' class='text' >Email Address<span class='star' style = 'display:none;'>*</span></h1> <input type= 'email'" + inc + "' placeholder='Enter email'> <button class = 'btns' style = 'margin-left:40px;' onclick='remove_input(" + inc + ")'><i class='fa-solid fa-trash'></i></button><button class = 'btns' onclick='open_side_nav(" + inc + ")''><i class='fa-solid fa-pencil'></i></button><div id='mySidebar-2" + inc + "' class = 'edit-field'> <a href='javascript:void(0)' class='closebtn' onclick='close_side_nav(" + inc + ")'>×</a> <div class='form-group input_fromlay'> <label for='exampleInputEmail1' style= 'color: #fff; font-size: 26px; margin-top: -12px; margin-bottom: 20px; font-weight: 600;'>Feild Label</label> <input type='text' class='form-control input_textlay' id='emailinput-" + inc + "' onkeyup='inpute_change(" + inc + ", this.value)' placeholder='Name'> <div class='form-check padd'></div> </div></div>";
    inc++;
}

function addphone() {
    document.getElementById("add-field").innerHTML +=
        "<div style='    background-image: radial-gradient(circle farthest-corner at 10% 20%, rgb(133 29 25) 10%, rgb(221 170 165 / 98%) 99.8%); padding: 20px;color: white; margin: 10px;' id='my-input-form" + inc + "'><h1 id='main-text-changer" + inc + "' class='text' >Number<span class='star' style = 'display:none;'>*</span></h1> <input type= 'number'" + inc + "' placeholder='Enter email'><button class = 'btns' style = 'margin-left:40px;' onclick='remove_input(" + inc + ")'><i class='fa-solid fa-trash'></i></button> <button class = 'btns' onclick='open_side_nav(" + inc + ")''><i class='fa-solid fa-pencil'></i></button><div id='mySidebar-2" + inc + "' class = 'edit-field'> <a href='javascript:void(0)' class='closebtn' onclick='close_side_nav(" + inc + ")'>×</a> <div class='form-group input_fromlay'> <label for='exampleInputEmail1' style= 'color: #fff; font-size: 26px; margin-top: -12px; margin-bottom: 20px; font-weight: 600;'>Feild Label</label> <input type='text' class='form-control input_textlay' id='emailinput-" + inc + "' onkeyup='inpute_change(" + inc + ", this.value)' placeholder='Name'> <div class='form-check padd'></div> </div></div>";
    inc++;
}

function adddropdown() {
    document.getElementById("add-field").innerHTML +=
        "<div style='background-image: radial-gradient(circle farthest-corner at 10% 20%, rgb(133 29 25) 10%, rgb(221 170 165 / 98%) 99.8%); padding: 20px;color: white; margin: 10px;' id='my-input-form" + inc + "'><h1 id='main-text-changer" + inc + "' class='text' >Dropdowm<span class='star' style = 'display:none;'>*</span></h1><label>Please Select</label> <select class='custom-select' id='dropdown-group-" + inc + "'><option>option 1</option> <option>option 2</option> <option>option 3</option> <option>option 4</option> <option>option 5</option> </select><button class = 'btns' style = 'margin-left:40px;' onclick='remove_input(" + inc + ")'><i class='fa-solid fa-trash'></i></button> <button class = 'btns' onclick='open_side_nav(" + inc + ")''><i class='fa-solid fa-pencil'></i></button><div id='mySidebar-2" + inc + "' class = 'edit-field'> <a href='javascript:void(0)' class='closebtn' onclick='close_side_nav(" + inc + ")'>×</a> <div class='form-group input_fromlay'> <label for='exampleInputEmail1' style= 'color: #fff; font-size: 26px; margin-top: -12px; margin-bottom: 20px; font-weight: 600;'>Feild Label</label> <input type='text' class='form-control input_textlay' id='emailinput-" + inc + "' onkeyup='inpute_change(" + inc + ", this.value)' placeholder='Name'> <div class='form-check padd'></div> </div></div>";
    inc++;
}

function addcheckbox() {
    document.getElementById("add-field").innerHTML +=
        "<div style='background-image: radial-gradient(circle farthest-corner at 10% 20%, rgb(133 29 25) 10%, rgb(221 170 165 / 98%) 99.8%); padding:20px; color:white; margin:10px;' id='my-input-form" + inc + "'><h1 id='main-text-changer" + inc + "' class='text' >checkbox<span class='star' style = 'display:none;'>*</span></h1><label> <input type='checkbox' placeholder='choose a option'/> i need online course</label><label><input type='checkbox' class='input2' placeholder='choose a option'/> i need offline course</label><button class = 'btns' style = 'margin-left:40px;' onclick='remove_input(" + inc + ")'><i class='fa-solid fa-trash'></i></button><button class = 'btns' onclick='open_side_nav(" + inc + ")''><i class='fa-solid fa-pencil'></i></button><div id='mySidebar-2" + inc + "' class = 'edit-field'> <a href='javascript:void(0)' class='closebtn' onclick='close_side_nav(" + inc + ")'>×</a> <div class='form-group input_fromlay'> <label for='exampleInputEmail1' style= 'color: #fff; font-size: 26px; margin-top: -12px; margin-bottom: 20px; font-weight: 600;'>Feild Label</label> <input type='text' class='form-control input_textlay' id='emailinput-" + inc + "' onkeyup='inpute_change(" + inc + ", this.value)' placeholder='Name'> <div class='form-check padd'></div> </div></div>";
        inc++;
    inc++;
}

function addradiobutton() {
    document.getElementById("add-field").innerHTML +=
    "<div style='background-image: radial-gradient(circle farthest-corner at 10% 20%, rgb(133 29 25) 10%, rgb(221 170 165 / 98%) 99.8%); padding:20px;color:white; margin:10px;' id='my-input-form" + inc + "'><h1 id='main-text-changer" + inc + "' class='text' >RadioButton<span class='star' style = 'display:none;'>*</span></h1><label>  <input type='radio'/> i need online course</label><label><input type='radio' class='input2'/> i need offline course</label></button><button class ='btns' style='margin-left: 40px;' onclick='remove_input(" + inc + ")'><i class='fa-solid fa-trash'></i></button><button class ='btns' onclick='open_side_nav(" + inc + ")''><i class='fa-solid fa-pencil'></i></div>";
    inc++;
}

function addimage() {
    document.getElementById("add-field").innerHTML +=
        "<div style='    background-image: radial-gradient(circle farthest-corner at 10% 20%, rgb(133 29 25) 10%, rgb(221 170 165 / 98%) 99.8%); padding: 20px;color: white; margin: 10px;' id='my-input-form" + inc + "'><h1 id='main-text-changer" + inc + "' class='text' >Files/Images<span class='star' style = 'display:none;'>*</span></h1> <input type= 'file' class='img-input" + inc + "' placeholder='Select Image'/><button class ='btns' style='margin-left: 40px;' onclick='remove_input(" + inc + ")'><i class='fa-solid fa-trash'></i></button><button class = 'btns' ' onclick='open_side_nav(" + inc + ")''><i class='fa-solid fa-pencil'></i></button><div id='mySidebar-2" + inc + "' class = 'edit-field'> <a href='javascript:void(0)' class='closebtn' onclick='close_side_nav(" + inc + ")'>×</a> <div class='form-group input_fromlay'> <label for='exampleInputEmail1'  style= 'color: #fff; font-size: 26px; margin-top: -12px; margin-bottom: 20px; font-weight: 600;'>Feild Label</label> <input type='text' class='form-control input_textlay' id='emailinput-" + inc + "' onkeyup='inpute_change(" + inc + ", this.value)' placeholder='Name'> <div class='form-check padd'></div> </div></div>";
    inc++;
}


// for email changing value of feild
function inpute_change(id, value) {
    document.getElementById("main-text-changer" + id).innerHTML = value;
}

function remove_input(i) {
    let getinputid = document.getElementById('my-input-form' + i);
    getinputid.remove();
    confirm('are you sure you want to delete');
}


function open_side_nav(i) {
    document.getElementById("mySidebar-2" + i).style.display = "block";
}


function close_side_nav(i) {
    document.getElementById("mySidebar-2" + i).style.display = "none";
}

