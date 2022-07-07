var app = new function(){
    this.el = document.getElementById('tasks');
    this.tasks = []

    //read
    this.FetchAll = function(){
        var data='';
        console.log(tasks);

        if(this.tasks.length>0){
            //nous voulu itéré les nouvelles taches qui sont dans le tableau
            for(i=0; i<this.tasks.length; i++){
                data+='<tr>';
                data+='<td>' + (i+1) + '.' + this.tasks[i] + '</td>';
                data+='<td><button onClick="app.Edit('+i+')" class="btn btn-warning">Modifier</button></td>';
                data+='<td><button onClick="app.Delete('+i+')" class="btn btn-danger">Delete</button></td>';
                data+='</tr>';
            }
        }
        this.Count(this.tasks.length);
        return this.el.innerHTML = data
    };

    //create
    this.Add = function(){
        el = document.getElementById('add-todo');
        var task = el.value;
        if(task){
            this.tasks.push(task.trim());
            el.value='';
            this.FetchAll();        }
    };

    //update
    this.Edit = function(item){
        el = document.getElementById('edit-todo');
        el.value = this.tasks[item]
        document.getElementById('edit-box').style.display = "block";
        self = this;

        document.getElementById('save-edit').onsubmit= function(){
            var task =  el.value;
            if(task){
                self.tasks.splice(item, 1, task.trim());
                self.FetchAll();
                CloseInput();
            }

        }
    };

    //delete
    this.Delete = function(item){
        this.tasks.splice(item, 1)
        this.FetchAll();
    };

    //count
    this.Count = function(data){
        var el = document.getElementById('counter');
        var name = 'Tasks';
        if(data){
            if(data == 1){
                name = 'Task';
            }
            el.innerHTML = data + ' ' + name;
        }
        else{
            el.innerHTML = "No " + name;
        }
    };
}

//appel de la function FetchAll read pour qu'elle soit toujours à jour
app.FetchAll();


//function pour fermer l'input
function CloseInput(){
    document.getElementById('edit-box').style.display = 'none';
}