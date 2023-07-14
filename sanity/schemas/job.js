export default {
    name: 'job',
    title: 'Trabajo',
    type: 'document',
    fields: [
        {
            name: 'company',
            title: 'Nombre de la compañia',
            type: 'string',
        },
        {
            name: 'position',
            title: 'Puesto',
            type: 'string',
        },
        {
            name: 'dates',
            title: 'Fecha  de inicio - Fecha de finalización',
            type: 'string',
        },
        {
            name: 'activities',
            title: 'Actividades desarrolladas',
            type: 'array',
            of: [
                {
                    name: 'activity',
                    title: 'Actividad',
                    type: 'text'
                }
            ]
        },
    ]
}