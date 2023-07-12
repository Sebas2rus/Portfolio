import { getByType } from '../../sanity/lib'

export default async function userHandler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      const homeData = await getById(
        'home-setup',
        'groupContainer,teamHome, contentTitle,  "personList":teamHome.personList[]->, bannerData[]-> '
      );

      const cardHomeData = await getByType(
        'content',
        'title, background_img, base, "slug":slug.current'
      );

      const schoolData = await getById('school-setup', 'groupContainer');

      // eslint-disable-next-line no-case-declarations
      const cleanData = {
        cardHomeData: {
          title: homeData.contentTitle,
          cardsHome: cardHomeData.map((card) => ({
            ...card,
            category: card.base[0],
            background_img: urlFor(card.background_img)
              .width(350)
              .height(220)
              .url(),
          })),
        },
        bannerData: homeData?.bannerData?.map((banner) => ({
          ...banner,
          background_img: urlFor(banner.background_img).width(1024).url(),
        })),
        groupContainer: {
          ...schoolData.groupContainer,
          cardGroup: schoolData?.groupContainer?.cardGroup.map((card) => ({
            ...card,
            background_img: urlFor(card.background_img).width(400).url(),
          })),
        },
        teamHome: {
          ...homeData.teamHome,
          personList: homeData.personList.map((person) => ({
            name: person.name,
            person: urlFor(person.image).width(400).height(400).url(),
          })),
        },
      };

      res.status(200).json(cleanData);
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}