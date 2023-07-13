export default {
  name: 'experience',
  title: 'Trabajos',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título de la sección',
      type: 'string',
    },
    {
      name: 'jobs',
      title: 'Trabajos',
      type: 'array',
      of: [
        {
          name: 'jobsG',
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