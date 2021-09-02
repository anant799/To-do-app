"use strict";
export const __esModule = true;
import Container_1 from "./Container";
import { display_date_time } from "./display_date_time";
//import * './interface';
//import *  './interface';
//let aa:container_arrays.=[];
// main
var obj;
obj.div_left = document.getElementById("div_present");
obj.div_right = document.getElementById("div_past");
obj.div_middle = document.getElementById("div_future");
obj.root = document.getElementById('root');
// for timer
obj.start_time = document.getElementById("timer_start_time");
obj.deadline_time = document.getElementById("timer_time");
obj.date_field = document.getElementById("date_field");
obj.text_field = document.getElementById("text_field");
obj.button_field = document.getElementById("date_button");
obj.present_array = [];
obj.past_array = [];
obj.future_array = [];
obj.button_field.addEventListener("click", func_main_1);
function func_main_1() {
    if (obj.date_field.value != "" && obj.text_field.value != "" && obj.start_time.value != "" && obj.deadline_time.value != "") {
        //console.log(zzzz.value);
        //console.log(zzzz1.value);
        var x = obj.date_field.value;
        //window.alert(x);
        var y = x.split('-');
        // for timer
        var current_timer = new Date().getTime();
        var temp = new display_date_time();
        var d1 = temp.display_date_time(x);
        d1 += " " + obj.start_time.value;
        var goal_start_timer = new Date(d1).getTime();
        //console.log(goal_timer);
        //let d1=display_date_tim(x);
        //d1+=" "+start_time.value;
        var deadline_timer = new Date(obj.deadline_time.value).getTime();
        //console.log(deadline_timer);
        if (goal_start_timer <= current_timer && current_timer < deadline_timer) //present
         {
            obj.present_array.push(new Container_1["default"](obj.div_left, x, obj.text_field.value, "present", deadline_timer, deadline_timer, obj));
            //console.log(present_array[0].input_text);
            obj.present_array[0].checking_for_completness();
        }
        else if (goal_start_timer > current_timer) //future
         {
            obj.future_array.push(new Container_1["default"](obj.div_middle, x, obj.text_field.value, "future", goal_start_timer, deadline_timer, obj));
            obj.future_array[0].checking_for_completness();
        }
        else { //past
            alert("Task cannot be created for past.");
            //new container(div_middle,x,text_field_js.value);
        }
    }
    else {
        alert("Enter the data in fields");
    }
    //date_field_js.value="";
    //text_field_js.value="";
}
