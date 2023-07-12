import {
    HomeIcon,
    BookIcon,
    ComponentIcon,
    EnvelopeIcon,
    UserIcon,
} from '@sanity/icons';

export const deskStructure = (S) =>
    S.list()
        .title('Páginas')
        .items([
            S.listItem()
                .title('Autor')
                .icon(UserIcon)
                .child(S.document().schemaType('author').documentId('author-setup')),
            S.listItem()
                .title('Sobre mi')
                .icon(HomeIcon)
                .child(S.document().schemaType('about').documentId('about-setup')),
            S.listItem()
                .title('Proyectos')
                .icon(BookIcon)
                .child(S.document().schemaType('projects').documentId('projects-setup')),
            S.listItem()
                .title('Trabajos')
                .icon(ComponentIcon)
                .child(S.document().schemaType('experience').documentId('experience-setup')),
            S.listItem()
                .title('Contacto')
                .icon(EnvelopeIcon)
                .child(S.document().schemaType('contact').documentId('contact-setup')),

            // Add a visual divider (optional)
            S.divider(),
            // List out the rest of the document types, but filter out the config type
            ...S.documentTypeListItems().filter(
                (listItem) =>
                    ![
                        'contact',
                        'experience',
                        'projects',
                        'about',
                        'author'
                    ].includes(listItem.getId())
            ),
        ]);