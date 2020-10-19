import React from 'react';
import Button from '../template/button';

export default props => {
    const renderRows = () => {
        const list = props.list || [];
        return list.map(item => (
            <tr key={item.id}>
                <td>{item.description}</td>
                <td>
                    <Button style='success' title="Finalizar" hide={item.done}
                        onClick={() => props.handleMarkAsDone(item)}></Button>
                    <Button style='warning' title="retormar" hide={!item.done}
                        onClick={() => props.handleMarkAsPending(item)}></Button>
                    <Button style='danger' title="excluir"
                        onClick={() => props.handleRemove(item)}></Button>
                </td>
            </tr>
        ))
                
    }

    // const renderRows = () => {
    //     const list = props.list || []
        // return list.map(todo => (
        //     <tr key={todo.id}>
        //         <td>{todo.description}</td>
        //         <td>
        //             <Button style='success' hide={todo.done}
        //                 onClick={() => props.handleMarkAsDone(todo)}
        //                 title="Finalizar"></Button>
        //             <Button style='warning' hide={!todo.done}
        //                 onClick={() => props.handleMarkAsPending(todo)}
        //                 title="retormar"></Button>
        //             <Button style='danger'
        //                 onClick={() => props.handleRemove(todo)}
        //                 title="excluir"></Button>
        //         </td>
        //     </tr>
        // ))
    // }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}