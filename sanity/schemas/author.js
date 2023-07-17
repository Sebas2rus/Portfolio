import { BlockEditor } from "sanity";

export default {
  name: 'author',
  title: 'Autor',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nombre',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: [
            {
              title: 'Strong',
              value: 'strong'
            },
            {
              title: 'Emphasis',
              value: 'em'
            },
            {
              title: 'Sup',
              value: 'sup',
              BlockEditor: {
                icon: () => <div>x<sup>2</sup></div>,
                render: ({ children }) => <sup>{children}</sup>
              }
            }
          ]
        }
      ]
    },
    {
      name: 'github',
      title: 'Github url',
      type: 'url'
    },
    {
      name: 'instagram',
      title: 'Instagram url',
      type: 'url'
    },
    {
      name: 'twitter',
      title: 'Twitter url',
      type: 'url'
    },
    {
      name: 'linkedin',
      title: 'Linkedin url',
      type: 'url'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'email'
    }

  ],
}
