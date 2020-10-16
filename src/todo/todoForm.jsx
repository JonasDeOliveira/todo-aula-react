import React from 'react';
import Button from '../template/button';

export default props => {
    return (

        <div role='form' className="todoForm">
            <div className="col-12" class="form-group">
                <label for="tasks">Tarefas</label>
                <input type="text" class="form-control" id="tasks"/>
            </div>
            <div className="col-12">
                <Button style="primary" title="Adicionar"/>
                <Button style="outline-secondary" title="Limpar"/>
            </div>  
        </div>
        
        
    )
}