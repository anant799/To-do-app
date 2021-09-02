"use strict";
exports.__esModule = true;
var Cell_1 = require("./Cell");
var display_date_time_1 = require("./display_date_time");
var container = /** @class */ (function () {
    function container(place, x, text, timeline, timer, deadline_timer, main_component_object) {
        this.place = place;
        this.input_date = x;
        this.input_text = text;
        this.timeline = timeline;
        this.timer = timer;
        this.deadline_timer = deadline_timer; // for active to pass the argument
        //this.current_time=current_time;
        this.main_component_object = main_component_object;
        this.list = [];
        this.func_1();
    }
    container.prototype.checking_for_completness = function () {
        //console.log(this.text);
        var count = 0;
        var change_in_completness = false;
        for (var obj = 0; obj < this.list.length; obj++) {
            if (this.list[obj].checkbox_status == true)
                count += 1;
        }
        //console.log(count);
        //console.log(this.container.list.length);
        if (count == this.list.length && count != 0) {
            this.thumbs_up_div.append(this.thumbsup);
            this.div1.style.backgroundColor = "#2e772e";
            this.div1.style.opacity = "0.9";
            this.button.style.backgroundColor = "black";
            this.completed_button.style.backgroundColor = "black";
            change_in_completness = true;
            console.log("completed");
        }
        else if (this.thumbs_up_div.contains(this.thumbsup)) {
            //this.container.thumbs_up_div.remove(this.thumbsup);
            this.thumbsup.remove();
            this.div1.style.backgroundColor = "#EBEBEB";
            this.div1.style.opacity = "1";
            this.button.style.backgroundColor = "#00962e";
            this.completed_button.style.backgroundColor = "#00962e";
            change_in_completness = true;
            console.log('2');
        }
        else
            console.log('3');
        // sorting based on completeness and time
        console.log(this.timeline);
        if (true) {
            if (this.timeline == "present") {
                //console.log('going');
                var completed_objects = [];
                var uncompleted_objects = [];
                for (var i = 0; i < this.main_component_object.present_array.length; i++) {
                    if (this.main_component_object.present_array[i].thumbs_up_div.contains(this.main_component_object.present_array[i].thumbsup))
                        completed_objects.push(this.main_component_object.present_array[i]);
                    else
                        uncompleted_objects.push(this.main_component_object.present_array[i]);
                }
                //let finished_array=[]
                //console.log(completed_objects.length);
                //console.log(uncompleted_objects.length);
                uncompleted_objects.sort(function (a, b) {
                    return a.timer - b.timer;
                });
                var count_1 = 0;
                for (var i = 0; i < uncompleted_objects.length; i++) {
                    uncompleted_objects[i].div1.style.order = count_1;
                    //console.log(uncompleted_objects[i].input_text);
                    count_1 += 1;
                }
                completed_objects.sort(function (a, b) {
                    return a.timer - b.timer;
                });
                for (var i = 0; i < completed_objects.length; i++) {
                    completed_objects[i].div1.style.order = count_1;
                    count_1 += 1;
                }
                //present_array=uncompleted_objects.concat(completed_objects);
                //present_array=finished_array;
            }
            else if (this.timeline == "future") {
                console.log('futu');
                var completed_objects = [];
                var uncompleted_objects = [];
                for (var i = 0; i < this.main_component_object.future_array.length; i++) {
                    if (this.main_component_object.future_array[i].thumbs_up_div.contains(this.main_component_object.future_array[i].thumbsup))
                        completed_objects.push(this.main_component_object.future_array[i]);
                    else
                        uncompleted_objects.push(this.main_component_object.future_array[i]);
                }
                //let finished_array=[]
                //console.log(completed_objects.length);
                //console.log(uncompleted_objects.length);
                uncompleted_objects.sort(function (a, b) {
                    return a.timer - b.timer;
                });
                var count_2 = 0;
                for (var i = 0; i < uncompleted_objects.length; i++) {
                    uncompleted_objects[i].div1.style.order = count_2;
                    //console.log(uncompleted_objects[i].input_text);
                    count_2 += 1;
                }
                completed_objects.sort(function (a, b) {
                    return a.timer - b.timer;
                });
                for (var i = 0; i < completed_objects.length; i++) {
                    completed_objects[i].div1.style.order = count_2;
                    count_2 += 1;
                }
            }
            else { }
        }
    };
    container.prototype.func_1 = function () {
        this.making_elements();
        this.place.append(this.div1);
    };
    container.prototype.add_steps_window = function () {
        var obj = new Cell_1.cell(this.input.value, this.div, this);
        this.list.push(obj);
        this.checking_for_completness(); //calling the function using cell class object
    };
    container.prototype.making_elements = function () {
        var _this = this;
        this.h2 = document.createElement('h4');
        this.h2.innerText = "Title: " + this.input_text;
        this.timer_div = document.createElement("div"); // for timer
        this.date_time_div = document.createElement('div');
        var obj = new display_date_time_1.display_date_time();
        var d1 = obj.display_date_time(this.input_date);
        this.date_time_div.innerText = d1;
        //this.h5=document.createElement('h4');
        //this.h5.innerText=this.current_time;
        this.input = document.createElement('input');
        this.input.classList.add("text_field");
        this.div1 = document.createElement('div');
        this.div = document.createElement('div');
        this.button = document.createElement('button');
        this.button.classList.add("button_field");
        this.button.innerText = "Add steps";
        this.completed_button_div = document.createElement("div");
        this.completed_button_div.classList.add("completed_button_div");
        this.completed_button = document.createElement('button');
        this.completed_button.classList.add("completed_button_field");
        this.completed_button.innerText = "Complete";
        if (this.timeline == "present")
            this.completed_button_div.append(this.completed_button);
        //<i class="" aria-role="presentation" aria-label="THUMBS UP SIGN"></i>
        this.button.addEventListener('click', function () {
            if (_this.input.value != "") {
                _this.add_steps_window();
                _this.input.value = "";
            }
            else
                alert("Enter the step");
        });
        this.completed_button.addEventListener('click', function () {
            _this.timer = -1;
            var self = _this;
            _this.gg(self);
        });
        this.thumbs_up_div = document.createElement('div');
        this.thumbsup = document.createElement('i');
        this.thumbsup.className = "fa fa-thumbs-up";
        this.thumbsup.classList.add("thumbs");
        //this.thumbsup.style="font-size:36px";
        //class="fa fa-thumbs-down"
        //<i class="em em---1" aria-role="presentation" aria-label="THUMBS UP SIGN"></i>
        this.thumbsdown = document.createElement('i');
        this.thumbsdown.className = "fa fa-thumbs-down";
        this.thumbsup.classList.add("thumbs");
        //this.thumbsdown.style="font-size:36px";
        //this.thumbsdown.ariaLabel="THUMBS DOWN SIGN";
        //<i class="em em--1" aria-role="presentation" aria-label="THUMBS DOWN SIGN"></i>
        this.div1.append(this.h2);
        this.div1.append(this.date_time_div);
        this.div1.append(this.timer_div);
        //this.div1.append(this.h5);
        this.div1.append(this.thumbs_up_div);
        this.div1.append(this.input);
        this.div1.append(this.button);
        this.div1.append(this.completed_button_div);
        this.div1.append(this.div);
        //this.div1.style.marginTop=;
        this.div1.className = "block";
        this.h2.className = "item1";
        this.date_time_div.className = "item2";
        //this.h5.className="item3";
        this.thumbs_up_div.className = "item4";
        this.input.className = "item5";
        this.button.classList.add("item6");
        this.div.classList.add("item7");
        this.timer_div.classList.add("item9");
        var self = this;
        this.gg(self);
    };
    container.prototype.gg = function (self) {
        self.xx = setInterval(function () {
            // Get today's date and time
            var now = new Date().getTime();
            // Find the distance between now and the count down date
            var distance = self.timer - now;
            console.log(self.timer);
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            // Output the result in an element with id="demo"
            var ans = "";
            if (days > 0)
                ans += days + "d";
            if (hours > 0)
                ans += " " + hours + "h";
            if (minutes > 0)
                ans += " " + minutes + "m";
            if (seconds > 0)
                ans += " " + seconds + "s";
            //let ans=days + "d " + hours + "h "+ minutes + "m " + seconds + "s ";
            if (self.timeline == "future")
                ans = "Starts In: " + ans;
            else if (self.timeline == "present")
                ans = "Expires In:" + ans;
            self.timer_div.innerText = ans;
            // If the count down is over, write some text 
            if (distance < 0) {
                if (self.timeline == "future") {
                    var cln = self.div1;
                    self.main_component_object.div_left.appendChild(cln);
                    self.place = self.main_component_object.div_left;
                    self.timeline = "present";
                    self.timer = self.deadline_timer;
                    self.gg(self);
                    self.completed_button_div.append(self.completed_button);
                    self.main_component_object.present_array.push(self);
                    //console.log(present_array.length);
                    //console.log(future_array.length);
                    var index = self.main_component_object.future_array.indexOf(self);
                    self.main_component_object.future_array.splice(index, 1);
                    if (self.main_component_object.future_array.length > 0)
                        self.main_component_object.future_array[0].checking_for_completness();
                    self.main_component_object.present_array[0].checking_for_completness();
                    //console.log(self.place);
                    //console.log("hi");
                }
                else if (self.timeline == "present") {
                    var cln = self.div1;
                    self.main_component_object.div_right.appendChild(cln);
                    self.place = self.main_component_object.div_right;
                    self.timeline = "past";
                    self.timer = -1;
                    self.completed_button.remove();
                    if (!(self.thumbs_up_div.contains(self.thumbsup))) {
                        self.div1.style.backgroundColor = "red";
                        self.div1.style.opacity = 0.9;
                        self.thumbs_up_div.append(self.thumbsdown);
                        self.button.style.backgroundColor = "black";
                    }
                    //self.gg(self);
                    self.button.disabled = true;
                    self.input.disabled = true;
                    //console.log(self.list.length+"hello");
                    for (var i = 0; i < self.list.length; i++) {
                        self.list[i].checkbox_button.disabled = true;
                        self.list[i].delbutton.disabled = true;
                        //self.list[i].win_desc.disabled=
                        //self.list[i].save_button.disabled=true;
                    }
                    self.main_component_object.past_array.push(self);
                    //console.log(present_array.length);
                    //console.log(future_array.length);
                    var index = self.main_component_object.future_array.indexOf(self);
                    self.main_component_object.present_array.splice(index, 1);
                    if (self.main_component_object.present_array.length > 0)
                        self.main_component_object.present_array[0].checking_for_completness();
                    self.main_component_object.past_array[0].checking_for_completness();
                    //console.log(self.place);
                    //console.log("hi");
                }
                else {
                    clearInterval(self.xx);
                    self.timer_div.innerText = "Expired";
                }
                //document.getElementById("demo").innerHTML = "EXPIRED";
            }
        }, 1000);
    };
    return container;
}());
exports["default"] = container;
