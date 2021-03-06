function display_date_tim(x) {
    //console.log("yes");
    var y = x.split('-');
    var ans = "";
    if (y[1] == "01")
        ans += "Jan";
    else if (y[1] == "02")
        ans += "Feb";
    else if (y[1] == "03")
        ans += "March";
    else if (y[1] == "04")
        ans += "April";
    else if (y[1] == "05")
        ans += "May";
    else if (y[1] == "06")
        ans += "June";
    else if (y[1] == "07")
        ans += "July";
    else if (y[1] == "08")
        ans += "Aug";
    else if (y[1] == "09")
        ans += "Sep";
    else if (y[1] == "10")
        ans += "Oct";
    else if (y[1] == "11")
        ans += "Nov";
    else
        ans += "Dec";
    ans += " " + y[2] + "," + y[0];
    //let xx=this.current_time.split(':');
    //ans+=xx[0]+":"+xx[1];
    return ans;
}
var container = /** @class */ (function () {
    function container(place, x, text, timeline, timer, deadline_timer) {
        this.place = place;
        this.input_date = x;
        this.input_text = text;
        this.timeline = timeline;
        this.timer = timer;
        this.deadline_timer = deadline_timer; // for active to pass the argument
        //this.current_time=current_time;
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
                for (var i = 0; i < present_array.length; i++) {
                    if (present_array[i].thumbs_up_div.contains(present_array[i].thumbsup))
                        completed_objects.push(present_array[i]);
                    else
                        uncompleted_objects.push(present_array[i]);
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
                for (var i = 0; i < future_array.length; i++) {
                    if (future_array[i].thumbs_up_div.contains(future_array[i].thumbsup))
                        completed_objects.push(future_array[i]);
                    else
                        uncompleted_objects.push(future_array[i]);
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
        var obj = new cell(this.input.value, this.div, this);
        this.list.push(obj);
        this.checking_for_completness(); //calling the function using cell class object
    };
    container.prototype.making_elements = function () {
        var _this = this;
        this.h2 = document.createElement('h4');
        this.h2.innerText = "Title: " + this.input_text;
        this.timer_div = document.createElement("div"); // for timer
        this.date_time_div = document.createElement('div');
        this.date_time_div.innerText = display_date_tim(this.input_date);
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
                    div_left.appendChild(cln);
                    self.place = div_left;
                    self.timeline = "present";
                    self.timer = self.deadline_timer;
                    self.gg(self);
                    self.completed_button_div.append(self.completed_button);
                    present_array.push(self);
                    //console.log(present_array.length);
                    //console.log(future_array.length);
                    var index = future_array.indexOf(self);
                    future_array.splice(index, 1);
                    if (future_array.length > 0)
                        future_array[0].checking_for_completness();
                    present_array[0].checking_for_completness();
                    //console.log(self.place);
                    //console.log("hi");
                }
                else if (self.timeline == "present") {
                    var cln = self.div1;
                    div_right.appendChild(cln);
                    self.place = div_right;
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
                    past_array.push(self);
                    //console.log(present_array.length);
                    //console.log(future_array.length);
                    var index = future_array.indexOf(self);
                    present_array.splice(index, 1);
                    if (present_array.length > 0)
                        present_array[0].checking_for_completness();
                    past_array[0].checking_for_completness();
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
var cell = /** @class */ (function () {
    function cell(text, place, obj) {
        this.checkbox_status = false;
        this.text = text;
        this.place = place;
        this.container = obj;
        this.state = {
            desc: "Enter the description"
        };
        this.func_1();
    }
    cell.prototype.func_1 = function () {
        var _this = this;
        this.step = document.createElement('div');
        this.step.classList.add('card');
        this.p = document.createElement('p');
        this.p.innerText = this.text;
        this.p.classList.add("item8");
        this.checkbox_button = document.createElement('input');
        this.checkbox_button.type = "checkbox";
        //this.checkbox_button.innerText="com";
        this.checkbox_button.className = "checkbox_button";
        // checking status of check box
        this.checkbox_button.addEventListener('change', function () {
            if (_this.checkbox_button.checked == true) {
                _this.checkbox_status = true;
            }
            else {
                _this.checkbox_status = false;
            }
            //console.log(this.checkbox_status);
            _this.container.checking_for_completness();
        });
        this.delbutton = document.createElement('button');
        this.delbutton.innerText = "X";
        this.delbutton.className = "delbutton";
        this.step.append(this.p);
        this.step.append(this.checkbox_button);
        this.step.append(this.delbutton);
        this.place.append(this.step);
        //  event listener
        // for opening a new window
        this.step.addEventListener('click', function (e) {
            if (e.target != _this.delbutton && e.target != _this.checkbox_button)
                _this.nextwindow();
        });
        // for delete button
        this.delbutton.addEventListener('click', function () {
            _this.step.remove();
            var index = _this.container.list.indexOf(_this);
            _this.container.list.splice(index, 1);
            _this.container.checking_for_completness();
            //console.log('list length'+ this.container.list.length);
        });
    };
    cell.prototype.nextwindow = function () {
        var _this = this;
        //Create elements
        this.new_win = document.createElement("div");
        this.inner_win = document.createElement("div");
        this.win_title = document.createElement("h1");
        this.win_title.innerText = this.text;
        this.win_desc = document.createElement("textarea");
        this.win_desc.innerText = this.state.desc;
        this.button_div = document.createElement('div');
        this.save_button = document.createElement('button');
        this.save_button.innerText = "Save";
        //Append
        this.button_div.append(this.save_button);
        this.inner_win.append(this.win_title);
        this.inner_win.append(this.win_desc);
        this.inner_win.append(this.button_div);
        this.new_win.append(this.inner_win);
        root.append(this.new_win);
        this.save_button.classList.add("button_field");
        this.new_win.classList.add("new_win");
        this.inner_win.classList.add("inner_win");
        this.win_title.classList.add("win_title");
        this.win_desc.classList.add("win_desc");
        this.new_win.addEventListener('click', function (e) {
            if (e.target == _this.new_win)
                _this.new_win.remove();
        });
        if (this.container.timer == -1) {
            this.win_desc.disabled = true;
            return;
        }
        this.save_button.addEventListener('click', function () {
            if (_this.win_desc.value != "") {
                _this.state.desc = _this.win_desc.value;
                alert('Saved');
            }
            else {
                alert("enter the description");
            }
        });
    };
    return cell;
}());
// main
var div_left = document.getElementById("div_present");
var div_right = document.getElementById("div_past");
var div_middle = document.getElementById("div_future");
var root = document.getElementById('root');
// for timer
var start_time = document.getElementById("timer_start_time");
var deadline_time = document.getElementById("timer_time");
var date_field_js = document.getElementById("date_field");
var text_field_js = document.getElementById("text_field");
var button_field_js = document.getElementById("date_button");
var present_array = [];
var past_array = [];
var future_array = [];
button_field_js.addEventListener("click", func_main_1);
function func_main_1() {
    if (date_field_js.value != "" && text_field_js.value != "" && start_time.value != "" && deadline_time.value != "") {
        //console.log(zzzz.value);
        //console.log(zzzz1.value);
        var x = date_field_js.value;
        //window.alert(x);
        var y = x.split('-');
        // for timer
        var current_timer = new Date().getTime();
        var d1 = display_date_tim(x);
        d1 += " " + start_time.value;
        var goal_start_timer = new Date(d1).getTime();
        //console.log(goal_timer);
        //let d1=display_date_tim(x);
        //d1+=" "+start_time.value;
        var deadline_timer = new Date(deadline_time.value).getTime();
        //console.log(deadline_timer);
        if (goal_start_timer <= current_timer && current_timer < deadline_timer) //present
         {
            present_array.push(new container(div_left, x, text_field_js.value, "present", deadline_timer, deadline_timer));
            //console.log(present_array[0].input_text);
            present_array[0].checking_for_completness();
        }
        else if (goal_start_timer > current_timer) //future
         {
            future_array.push(new container(div_middle, x, text_field_js.value, "future", goal_start_timer, deadline_timer));
            future_array[0].checking_for_completness();
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
