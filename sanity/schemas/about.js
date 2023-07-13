
export default {
  title: 'Sobre mi',
  name: 'about',
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
      name: 'technologies',
      tittle: 'Tecnologías',
      type: 'array',
      of: [
        {
          name: 'Tecnología',
          title: 'technology',
          type: 'string',
        }
      ]
    },
    {
      name: 'photo',
      title: 'Foto',
      type: 'image',
    },
  ]
}