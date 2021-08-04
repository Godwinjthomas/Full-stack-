const Files={template:`
<div>
    <th>
      <div class="d-flex flex-row">
        <input class="form-control m-2"
        v-model="filenameFilter"
        v-on:keyup="FilterFn()"
        placeholder="Search By Name ">
     </div>
    </th>

    <th>
      <div class="d-flex flex-row">
         <input class="form-control m-2"
          v-model="modifiedFilter"
          v-on:keyup="FilterFn()"
          placeholder="Modified YYYY-MM-DD">
      </div>
   </th>

</script>
<table class="table table-striped table-dark">
 <thead style="position: sticky;top: 0" class= "thead-light">


     <tr>
        <th>
            Name
        </th>

        <th>
          Content

        </th>

        <th>
           Modified date
        </th>

        <th>
           Created date
        </th>
        <th>
           View
        </th>
        <th>
           Edit
        </th>
        <th>
          Delete
        </th>
     </tr>
</thead>
<tbody>
    <tr  v-for="Text in Files">

        <td>{{Text.Name}}</td>

        <td>
           <div style="max-width: 200px;overflow: hidden;text-overflow: ellipsis; white-space: nowrap;">

             {{Text.content}}
           </div>


             <button type ="button"
               data-bs-toggle="modal"
               data-bs-target="#exampleModal"
               @click="display(Text)">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-list" viewBox="0 0 16 16">
                   <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                 </svg>
             </button>
        </td>


        <td>{{Text.modified_date}}</td>
        <td>{{Text.created_date}}</td>
        <td>
        <button type ="button"

             class="btn btn-light mr-1"

             data-bs-dismiss="modal"

             @click="pagedisplay(Text.Name,Text.f_size,Text.content,Text.modified_date,Text.created_date)">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-display-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M6 12c0 .667-.083 1.167-.25 1.5H5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-.75c-.167-.333-.25-.833-.25-1.5h4c2 0 2-2 2-2V4c0-2-2-2-2-2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h4z"/>
                 </svg>
        </button>
        <td>
           <button type="button"
              class="btn btn-light mr-1"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal1"
              @click="editClick(Text)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="Green" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
          </button>
        </td>
        <td>
          <button type="button" @click="deleteClick(Text.Fileid)"
            class="btn btn-light mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-trash-fill" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg>
          </button>
        </td>
    </tr>
</tbody>


</table>

<div class="modal fade" id="exampleModal" tabindex="-1"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
<div class="modal-content" fill="green">
    <div class="modal-header">
        <h5 class="modal-title"  id="exampleModalLabel">{{modalTitle}}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"
        aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <div class="input-group mb-3">
              <h5>{{content}}</h5>
        </div>

    </div>
</div>
</div>
</div>
<div class="modal fade" id="exampleModal1" tabindex="-1"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-lg modal-dialog-centered">
<div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{modalTitle}}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"
        aria-label="Close"></button>
    </div>
    <div class="modal-body">
    <div class="d-flex flex-row bd-highlight mb-3">
        <div class="p-2 w-50 bd-highlight">

            <div class="input-group mb-3">
                <span class="input-group-text">Content</span>

                <input type="paragraph-text" class="form-control" v-model="content">
            </div>
        </div>

    </div>

        <button type="button" @click="updateClick(Text)"
         class="btn btn-primary">
         Update
        </button>
    </div>
</div>
</div>
</div>
 <router-view></router-view>
</div>

`,

data(){
    return{
        Files:[],
        modalTitle:"",
        Name:"",
        Fileid:0,
        f_size:"",
        content:"",

        modified_date:"",
        created_date:"",
        Hashvalue:"",

        departmentsWithoutFilter:[]
    }
},
methods:{
    refreshData(){
        axios.get(variables.API_URL+"file")
        .then((response)=>{
            this.Files=response.data;
            this.modifiedWithoutFilter=response.data;
        });
    },

    display(Text){
        this.modalTitle="content";
        this.content=Text.content;


    },
    pagedisplay(Name,f_size,content,modified_date,created_date){
         this.page = [Name,f_size,content,modified_date,created_date];
         this.$router.push({name:"text",params:{id:this.page}})

    },
     editClick(Text){
        this.modalTitle="Edit Content of File";
        this.Fileid=Text.Fileid;
        this.Name=Text.Name;
        this.f_size=Text.f_size;
        this.content=Text.content;
        this.modified_date=Text.modified_date;
        this.created_date=Text.created_date;
        this.Hashvalue=Text.Hashvalue;
    },
    updateClick(){
        axios.put(variables.API_URL+"file",{
           Fileid:this.Fileid,
           Name:this.Name,
           f_size:this.f_size,
           content:this.content,
           modified_date:this.modified_date,
           created_date:this.created_date,
           Hashvalue:this.Hashvalue
        })
       .then((response)=>{
            this.refreshData();
            alert(response.data);
       });
    },

    deleteClick(id){
        if(!confirm("Are you sure?")){
            return;
        }
        axios.delete(variables.API_URL+"file/"+id)
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });

    },


    FilterFn(){
        var modifiedFilter=this.modifiedFilter;
        var filenameFilter=this.filenameFilter;

        this.Files=this.modifiedWithoutFilter.filter(
            function(el){
                return el.modified_date.toString().toLowerCase().includes(
                    modifiedFilter.toString().trim().toLowerCase()
                )&&
                el.Name.toString().toLowerCase().includes(
                    filenameFilter.toString().trim().toLowerCase()
                )
            });
    },

},
mounted:function(){
    this.refreshData();
}
}