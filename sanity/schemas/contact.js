export default {
    name: 'experience',
    title: 'Experiencia',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Título de la sección',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Descripción',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'email',
            title: 'Email de contacto',
            type: 'email'
        }
    ]
}