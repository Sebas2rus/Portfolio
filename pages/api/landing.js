import { getById, urlForImage } from '../../sanity/lib'


export default async function userHandler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      const authorData = await getById(
        'author-setup',
        `twitter, name, description, linkedin, email, github`
      );
      const aboutData = await getById(
        'about-setup',
        `technologies, title, photo, description`
      );
      const workData = await getById(
        'experience-setup',
        `title,  jobs[]{job->{company, position, activities, dates }}`
      );
      const projectsData = await getById(
        'projects-setup',
        `title, featured, others[]{project->{name, description, technologies, readMoreUrl, github, projectUrl, image }}, featured[]{project->{name, description, technologies, readMoreUrl, github, projectUrl, image }}`
      );
      const contactData = await getById(
        'contact-setup',
        `title, description, email`
      );

      const cleanData = {
        authorData,
        aboutData: {
          ...aboutData,
          photo: urlForImage(aboutData.photo).url()
        },
        workData,
        projectsData: {
          ...projectsData,
          others: projectsData?.others.map((other) => ({
            ...other.project,
            image: urlForImage(other?.project.image).url()
          })),
          featured: projectsData?.featured.map((featured) => ({
            ...featured.project,
            image: urlForImage(featured?.project.image).url()
          }))
        }
        // projectsData: projectsData.map(project =>({

        // }))
        ,
        contactData
      }

      //   cardHomeData: {
      //     title: homeData.contentTitle,
      //     cardsHome: cardHomeData.map((card) => ({
      //       ...card,
      //       category: card.base[0],
      //       background_img: urlFor(card.background_img)
      //         .width(350)
      //         .height(220)
      //         .url(),
      //     })),
      //   },
      //   bannerData: homeData?.bannerData?.map((banner) => ({
      //     ...banner,
      //     background_img: urlFor(banner.background_img).width(1024).url(),
      //   })),
      //   groupContainer: {
      //     ...schoolData.groupContainer,
      //     cardGroup: schoolData?.groupContainer?.cardGroup.map((card) => ({
      //       ...card,
      //       background_img: urlFor(card.background_img).width(400).url(),
      //     })),
      //   },
      //   teamHome: {
      //     ...homeData.teamHome,
      //     personList: homeData.personList.map((person) => ({
      //       name: person.name,
      //       person: urlFor(person.image).width(400).height(400).url(),
      //     })),
      //   },
      // };

      res.status(200).json(cleanData);
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}