"use strict";
exports.__esModule = true;
exports.cell = void 0;
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
        this.container.main_component_object.root.append(this.new_win);
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
exports.cell = cell;
