export default {
    name: 'projects',
    title: 'Proyectos',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Título de la sección',
            type: 'string',
        },
        {
            name: 'featured',
            title: 'Proyectos destacados',
            type: 'array',
            of: [
                {
                    name: 'projects',
                    title: 'Proyectos',
                    type: 'object',
                    fields: [
                        {
                            name: 'project',
                            title: 'Proyecto',
                            type: 'reference',
                            to: [{ type: 'project' }]
                        }
                    ]
                }
            ]
        },
        {
            name: 'others',
            title: 'Otros proyectos',
            type: 'array',
            of: [
                {
                    name: 'projects',
                    title: 'Proyectos',
                    type: 'object',
                    fields: [
                        {
                            name: 'project',
                            title: 'Proyecto',
                            type: 'reference',
                            to: [{ type: 'project' }]
                        }
                    ]
                }
            ]
        }

    ]

}