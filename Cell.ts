import container from './Container';


export class cell
{
    checkbox_status: boolean;
    text: string;
    place: HTMLDivElement;
    container: container;
    state: { desc: string; };
    step: HTMLDivElement;
    p: HTMLParagraphElement;
    checkbox_button: HTMLInputElement;
    delbutton: HTMLButtonElement;
    new_win: HTMLDivElement;
    inner_win: HTMLDivElement;
    win_title: HTMLHeadingElement;
    win_desc: HTMLTextAreaElement;
    button_div: HTMLDivElement;
    save_button: HTMLButtonElement;

    constructor(text,place,obj)
    {
        this.checkbox_status=false;
        this.text=text;
        this.place=place;
        this.container=obj;
        this.state={
            desc:"Enter the description"
        }
        this.func_1();
        
    }

    func_1()
    {
        
        this.step=document.createElement('div');
        this.step.classList.add('card');
        
        this.p=document.createElement('p');
        this.p.innerText=this.text;
        this.p.classList.add("item8");

        this.checkbox_button=document.createElement('input');
        this.checkbox_button.type="checkbox";
        //this.checkbox_button.innerText="com";
        this.checkbox_button.className="checkbox_button";

        // checking status of check box
        this.checkbox_button.addEventListener('change',()=>{
            if(this.checkbox_button.checked==true)
            {
                this.checkbox_status=true;
            }
            else
            {
                this.checkbox_status=false;
            }
            //console.log(this.checkbox_status);
            this.container.checking_for_completness();
        });
        


        this.delbutton=document.createElement('button');
        this.delbutton.innerText="X";
        this.delbutton.className="delbutton";
        
        this.step.append(this.p);
        this.step.append(this.checkbox_button);
        this.step.append(this.delbutton);
        this.place.append(this.step);

        //  event listener
        // for opening a new window
        this.step.addEventListener('click',(e)=>{
        if(e.target!=this.delbutton&&e.target!=this.checkbox_button)
        this.nextwindow();
        });

        // for delete button
        this.delbutton.addEventListener('click',()=>{
            this.step.remove();
            let index = this.container.list.indexOf(this);
            this.container.list.splice(index,1);

            this.container.checking_for_completness();
            //console.log('list length'+ this.container.list.length);
        });
    }



    nextwindow():void
    {
        //Create elements
        this.new_win = document.createElement("div");
        this.inner_win = document.createElement("div");
        
        this.win_title = document.createElement("h1");
        this.win_title.innerText=this.text;
        
        this.win_desc = document.createElement("textarea");
        this.win_desc.innerText=this.state.desc;
        
        this.button_div=document.createElement('div');
        
        this.save_button=document.createElement('button');
        this.save_button.innerText="Save";
        
        


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


        this.new_win.addEventListener('click', (e)=>{
            if(e.target==this.new_win)
            this.new_win.remove();

        });
        if(this.container.timer==-1)
        {
            this.win_desc.disabled=true;
            return;
        }
        
        this.save_button.addEventListener('click',()=>{
            if(this.win_desc.value!="")
            {
                this.state.desc=this.win_desc.value;
                alert('Saved');
            }
            else{
                alert("enter the description");
            }
        });


    }

}


