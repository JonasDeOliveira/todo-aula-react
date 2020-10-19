import React from 'react';
import Button from '../template/button';

export default props => {

    const keyHandler = (e) => {
        if (e.key === 'Enter') {
           props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    return (

        <div role='form' className="todoForm">
            <div className="col-12" class="form-group">
                <label for="tasks">Tarefas</label>
                <input id='description' className='form-control'
                    placeholder='Adicione uma tarefa'
                    value={props.description}
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}></input>
            </div>
            <div className="col-12">
                <Button onClick={props.handleAdd}  style="primary" title="Adicionar"/>
                <Button onClick={props.handleClear} style="outline-secondary" title="Limpar"/>
            </div>  
        </div>
        
        
    )
}