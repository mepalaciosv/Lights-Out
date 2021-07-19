import React from 'react';
import { PageHeader } from 'antd';

const Inicio = () => {

    // Antes del return se puede poner codigo JS
    
    return (

        // En el return se puede escribir codigo .html
        <div>
            <PageHeader
            className="site-page-header"
            onBack={() => null}
            title="Light Out"
            subTitle="Juego"
            />
        </div>

    )
}

export default Inicio;