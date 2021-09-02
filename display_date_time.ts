export class display_date_time{

    display_date_time(x:string):string
    {
        //console.log("yes");
        let y=x.split('-');
        let ans="";
        if(y[1]=="01")
        ans+="Jan";
        else if(y[1]=="02")
        ans+="Feb";
        else if(y[1]=="03")
        ans+="March";
        else if(y[1]=="04")
        ans+="April";
        else if(y[1]=="05")
        ans+="May";
        else if(y[1]=="06")
        ans+="June";
        else if(y[1]=="07")
        ans+="July";
        else if(y[1]=="08")
        ans+="Aug";
        else if(y[1]=="09")
        ans+="Sep";
        else if(y[1]=="10")
        ans+="Oct";
        else if(y[1]=="11")
        ans+="Nov";
        else
        ans+="Dec";
        
        ans+=" "+y[2]+","+y[0];

        //let xx=this.current_time.split(':');
        //ans+=xx[0]+":"+xx[1];
        
        return ans;
    }
}