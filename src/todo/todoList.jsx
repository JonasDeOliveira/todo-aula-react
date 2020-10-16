import React from 'react';
import Button from '../template/button';

export default props => {
    const renderRows = () => {
        return (
            <>
            <tr>
                <td>Descrição</td>
                <td>
                    <Button style="success" title="Finalizar"/>
                    <Button style="warning" title="retormar"/>
                    <Button style="danger" title="excluir"/>
                </td>
            </tr>
            <tr>
            <td>Descrição</td>
            <td>
                <Button style="success" title="Finalizar"/>
                <Button style="warning" title="retormar"/>
                <Button style="danger" title="excluir"/>
            </td>
        </tr>
        <tr>
        <td>Descrição</td>
        <td>
            <Button style="success" title="Finalizar"/>
            <Button style="warning" title="retormar"/>
            <Button style="danger" title="excluir"/>
        </td>
    </tr>
    </>
        )
    }

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