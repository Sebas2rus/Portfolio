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
      of: [
        {
          name: 'jobs',
          title: 'Trabajos',
          type: 'object',
          fields: [
            {
              title: 'Trabajos referentes',
              name: 'job',
              type: 'reference',
              to: [{ type: 'job' },]
            }
          ]
        }
      ]
    }
  ]
}