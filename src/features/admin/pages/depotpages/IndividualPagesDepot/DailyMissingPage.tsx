import React, { useEffect, useState } from 'react';
import API from '../../../../../api/axios';
import type { Missing } from '../../../../depot/types/Missing';
import DailyMissingTable from '../../../components/depotcomponents/IndividualComponentsDepot/DailyMissingTable';
import GraphDailyMissingReport from '../../../components/depotcomponents/GraphsDepot/GraphDailyMissing';
import Header from '../../../components/Header';

const DailyMissingPage : React.FC = () => {
    const [missings,setMissings] = useState<Missing[]>([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState<string | null>(null);

    useEffect(() => {
    API.get<Missing[]>('/faltantes-diarios')
      .then((res) => {
        if (res.data.length === 0) {
          setError('No se encontraron faltantes para el día de hoy.');
        } else {
          setMissings(res.data);
        }
      })
      .catch((err) => {
        console.error('Error al cargar los faltantes:', err);
        setError('Hubo un error al cargar los faltantes.');
      })
      .finally(() => setLoading(false));

    }, []);

    if(loading) return <h1 className='text-center'>Cargando los faltantes , por favor espere: </h1>
    if(error) return <h1 className='text-red-600'>{error}</h1>

    return(
        <div>
            <Header/>
            <div className='p-6'>
                <h1 className='text-2xl font-bold mb-4'>
                    Reporte: Faltantes diarios
                </h1>
                {/**Recibe de datos todos los fantantes recibidos */}
                <DailyMissingTable data={missings}/>
                <GraphDailyMissingReport data={missings} />
            </div>
        </div>
    )
}

export default DailyMissingPage;