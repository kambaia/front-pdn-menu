import React, {Component } from 'react';
import { EditForm } from "../styles/Users";
import {handlerAllUsers, HandlerEditUsers, UpdateUser} from "../services/ApiListUsers";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import { MainDiv, SubWindow, SubHeaderWindow } from "../styles/SystemManager";
import SideBar from "../components/SideBar/index";
import { FiChevronLeft, FiEdit, FiTrash, FiRefreshCw } from 'react-icons/fi';
import { RegisterUser, getOrgs} from "../services/Signup";
import Users from './Users';
import UsersList from './UsersList';
import { toast } from "react-toastify";

const data = [
  {
    section: "Título",
    menu: [
      {
        title: "menu 1",
        onPress: () => null,
      },
      {
        title: "menu 1",
        onPress: () => null,
      },
    ],
  },
];





class EditUsers extends Component {
    constructor() {
        super();
        this.state = {  
          user:[],
        resetPassword:"",
          orgs:[],
          form:{},
          isShow:true,
          subPage:"",
          user_type:"",
          

          
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleResetPassword=this.handleResetPassword.bind(this);
        
      
      }
    
  
      

componentDidMount() {
  const {id}=this.props.match.params
        HandlerEditUsers(id)
        .then( (data)=> {this.setState({ form:data})})
        .catch((error)=>{toast.error("Ocorreu um erro ....", error)});

        getOrgs().then((data)=>{
          this.setState({ orgs:data})
        }).catch((error)=>{
          toast.error("Ocorreu um erro ....", error)
        })
        
 }

onSubmit(e) {
  
  e.preventDefault();
  const {id}=this.props.match.params;
  const form=this.state.form;
  UpdateUser(form,id).then((data)=>{console.log(data)}).catch((err)=>{toast.error("Ocorreu um erro ....", err)})
  toast.success("Utilizador actualizado com sucesso!");
  
}

handleChange(event){
  const { name, value} = event.target;

this.setState(state=>({
  form: {...state.form, [name]: value}
}))
 
}

handleResetPassword(){
  this.setState({resetPassword:"12345"})
  alert("Senha alterada para:12345");
}




  
   
    render() { 
   
        return ( 
          <div>
          <Header />
             <MainDiv>
           <SideBar data={[
              {
                section: "Verificar Sectores",
                menu: [
                  {
                    title: "Validar Dados das Metas",
                    onPress: () => null,
                  },
                  {
                    title: "Validar Reporte das Acções",
                    onPress: () => null,
                  },
                  {
                    title: "Interagir com os Sectores",
                    onPress: () => null,
                  },
                ],
              },
              {
                section: "Gerir Sistema",
                menu: [],
              },
              {
                section: "Utilizadores",
                menu: [
                  {
                    title: "Adicionar Utilizadores",
                    onPress: () => null,
                  },
                  {
                    title: "Listar Utilizadores",
                    onPress: () => null,
                  },
                ],
              },
            ]} />
          
         <SubHeaderWindow>
         <SubHeader title="Gestão do Sistema"/>
            <SubWindow>

<EditForm onSubmit={this.onSubmit}>
        
               <input  type="text" name="name" value={this.state.form.name} onChange={this.handleChange}/>
               <br />
               <input type="text" name="username" value={this.state.form.username} onChange={this.handleChange} />
               <br />
              
     <input type="text" name="user_type" value={this.state.form.userType}  onChange={this.handleChange}/>
               
         
              
               
               <br/>
              
   
    
     {          this.state.form.org && (
       <input name="nameOrg"  disabled value={ this.state.form.org.nameOrg}/>
     )}
        
       
      
                
               <br/>
               <button
                 type="password"
                 name="password"
                 value={this.state.resetPassword}
                 list="responsabilidade" 
                 onClick={this.handleResetPassword}> Redifinir Senha  <FiRefreshCw  style={{ align: "center"}}/></button>
              
               <datalist id="responsabilidade">
                 
                     <option />
                 
               </datalist>
               
               <br />
               <button>Actualizar Utilizador</button>
 
                
                
             
            
      </EditForm>
            </SubWindow>
         </SubHeaderWindow>
           
             
               </MainDiv> 
           
              
           </div> 
      
         );
    }
}




 



 
export default EditUsers;