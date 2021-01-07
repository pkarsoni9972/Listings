import React, { useEffect, useState } from 'react';
import DataHandler from '../services/DataHandler'


const ReuableComponent = ({ url, Card, page }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        //fetching data after ever page update
        DataHandler.getData(url, page).then(e => setData(e));

    }, [page]);

    return (<div>
        <ul class="md:grid md:grid-cols-3 md:col-gap-10 md:row-gap-10">
            {(data) && data.map(e =>
                <Card key={e.id} detail={e} />)
            }
        </ul>
    </div>)
}
export default ReuableComponent;