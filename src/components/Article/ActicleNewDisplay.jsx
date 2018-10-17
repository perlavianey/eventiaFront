import React from 'react'
import { SketchPicker } from 'react-color';
import { Input,Button,Icon,Checkbox} from 'antd'

const { TextArea } = Input;
const CheckboxGroup = Checkbox.Group;
const plainOptions = ['XCH', 'CH', 'M','G', 'XG', 'XXG'];

const ArticleNewDisplay =({onBack,onChangeColor,onChangeCheckList,onChange,onSubmit,loading,event,onChangeFile})=>{
    
    return(
        <div>
        <div className="white"></div><br/> <br/>
        <section className="eventPadre">
        
        <h2 className="title">Creando artículo para el evento<br/>"{event.name}"</h2>
             <form onSubmit={onSubmit} className="newArticle" >
                Nombre: <br/><Input name="name"
                type="text"
                style={{width:'100%'}}
                prefix={<Icon type="book" theme="filled" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                required={true}
                onChange={onChange}
                placeholder="Nombre del artículo"/><br/><br/>
            
                Descripción: <br/><TextArea name="description"
                placeholder="Descripción del artículo." 
                style={{width:'100%'}}
                onChange={onChange}
                autosize={{ minRows: 2, maxRows: 6 }} /><br/><br/>
                
                Color: <SketchPicker/> <br/><br/>

                Tallas disponibles:<br/><CheckboxGroup 
                options={plainOptions} 
                onChange={onChangeCheckList} /><br/><br/>
            
                Imagen:<br/><Input accept="image/*"
                style={{width:'100%',border:"0"}}
                onChange={onChangeFile} 
                type="file"/><br/><br/>

                Número de piezas disponibles: <br/><Input name="stock"
                type="number"
                style={{width:'100%'}}
                prefix={<Icon type="diff" theme="filled" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                onChange={onChange}
                placeholder="¿Cuántos piezas se venderán?"/><br/><br/>
            
                Precio:<br/><Input name="price"
                type="text"
                style={{width:'100%'}}
                prefix={<Icon type="dollar" theme="outlined" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                onChange={onChange}
                placeholder="¿En cuánto se venderá cada artículo?"/><br/><br/><br/><br/>
                <div className="btnCreateEvent">
                    <Button style={{width:'120px'}} loading={loading} 
                    type="primary" className="btnEventia2" 
                    htmlType="submit" >Crear Artículo</Button> 
                </div>
            </form><br/>

            <div className="cbButton">
                <Icon type="left-circle" onClick={onBack} style={{fontSize:'40px', color:'navy', cursor:"pointer"}}  theme="filled" />
                <p>Ir atrás</p>
            </div><br/>
        </section>
    </div>
)}

export default ArticleNewDisplay