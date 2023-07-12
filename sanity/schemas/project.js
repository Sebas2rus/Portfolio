export default {
    name: 'project',
    title: 'Proyecto',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Nombre del proyecto',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Descripción del proyecto',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'technologies',
            title: 'Tecnología usadas',
            type: 'array',
            of: [
                {
                    name: 'technology',
                    title: 'Tecnología',
                    type: 'string'
                }
            ]
        },
        {
            name: 'readMoreUrl',
            title: 'Leer más url',
            type: 'url'

        },
        {
            name: 'github',
            title: 'Url de Github',
            type: 'url'

        },
        {
            name: 'projectUrl',
            title: 'Url del proyecto',
            type: 'url'

        },
        {
            name: 'image',
            title: 'Imagen del proyecto',
            type: 'image'
        }

    ]

}