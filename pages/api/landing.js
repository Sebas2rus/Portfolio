/* eslint-disable no-case-declarations */
import { getById, urlForImage } from '../../sanity/lib';

export default async function userHandler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      const authorData = await getById(
        'author-setup',
        'twitter, name, description, linkedin, email, github, "curriculum": curriculum.asset->url',
      );
      const aboutData = await getById(
        'about-setup',
        'technologies, title, photo, description',
      );
      const workData = await getById(
        'experience-setup',
        'title,  jobs[]{job->{company, position, activities, dates }}',
      );
      const projectsData = await getById(
        'projects-setup',
        'title, featured, others[]{project->{name, description, technologies, readMoreUrl, github, projectUrl, image }}, featured[]{project->{name, description, technologies, readMoreUrl, github, projectUrl, image }}',
      );
      const contactData = await getById(
        'contact-setup',
        'title, description, email',
      );

      const cleanData = {
        authorData,
        aboutData: {
          ...aboutData,
          photo: urlForImage(aboutData.photo).url(),
        },
        workData,
        projectsData: {
          ...projectsData,
          others: projectsData?.others.map((other) => ({
            ...other.project,
            image: urlForImage(other?.project.image).url(),
          })),
          featured: projectsData?.featured.map((featured) => ({
            ...featured.project,
            image: urlForImage(featured?.project.image).url(),
          })),
        },
        contactData,
      };

      res.status(200).json(cleanData);
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}