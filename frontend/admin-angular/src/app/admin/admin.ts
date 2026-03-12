import { Component } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { CommonModule } from '@angular/common'

@Component({
selector:'app-admin',
standalone:true,
imports:[CommonModule],
templateUrl:'./admin.html'
})

export class AdminComponent{

resources:any[]=[]
experiences:any[]=[]

constructor(private http:HttpClient){}

ngOnInit(){
this.load()
}

load(){

this.http.get<any[]>("http://localhost:3000/resources")
.subscribe(data=>{
this.resources=data
})

this.http.get<any[]>("http://localhost:3000/experiences")
.subscribe(data=>{
this.experiences=data
})

}

deleteresource(id:string){

this.http.delete("http://localhost:3000/deleteresource/"+id)
.subscribe(()=>{

this.resources=this.resources.filter(r=>r._id!==id)

})

}

deleteexperience(id:string){

this.http.delete("http://localhost:3000/deleteexperience/"+id)
.subscribe(()=>{

this.experiences=this.experiences.filter(e=>e._id!==id)

})

}

}