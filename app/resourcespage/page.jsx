import Link from 'next/link';

const ResourceCard = ({ title, imageUrl, linkUrl }) => {
  return (
    <div className="bg-white p-5 rounded-md shadow-lg flex flex-col items-center">
      <img src={imageUrl} alt={title} className="w-24 h-24 object-cover mb-4" />
      <h2 className="font-satoshi font-semibold text-lg text-gray-700 mb-3">
        <a href={linkUrl} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h2>
    </div>
  );
};

const Resources = () => {
  const recommendedBooks = [
    {
      title: 'Healing PTSD: A CBT workbook for taking back your life ',
      imageUrl: '/assets/images/healing.jpg',
      linkUrl: 'https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiYi-DypZKCAxWIxu0KHYWwBYEYABANGgJkZw&gclid=CjwKCAjw-eKpBhAbEiwAqFL0mvO7bw-iA5VgXVF4ku7ra3uadBL4RAhz-wnmpcNtiNaQPKqj431zXRoCe7wQAvD_BwE&ei=KZ05ZaOSB-Pg8QG6yJfgDw&ohost=www.google.com&cid=CAESVuD21itmQyJ6pgC9_BO3HK0ar9L930Hso7PfEZS8N-NyPdwarSlQsCwHXAxRZdeqTzDeu8BzhfxEyWIs8SlQQOY0YSwWd4aHF5osZydgdrfC1mhDzRAH&sig=AOD64_0ZAfcGuHtYCPNTNaLst7kpkRXNKw&ctype=5&q=&sqi=2&ved=2ahUKEwjjytLypZKCAxVjcDwKHTrkBfwQ9aACKAB6BAgCECY&adurl=',
    },
    {
      title: 'The Myth of Normal',
      imageUrl: '/assets/images/myth.jpg',
      linkUrl: 'https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiYi-DypZKCAxWIxu0KHYWwBYEYABAZGgJkZw&gclid=CjwKCAjw-eKpBhAbEiwAqFL0mnANjW4P3FwjgYQJuQduv1OLpCPzjL6EgZRiy-rAUeixOHTfXehALBoCyVUQAvD_BwE&ei=KZ05ZaOSB-Pg8QG6yJfgDw&ohost=www.google.com&cid=CAESVuD21itmQyJ6pgC9_BO3HK0ar9L930Hso7PfEZS8N-NyPdwarSlQsCwHXAxRZdeqTzDeu8BzhfxEyWIs8SlQQOY0YSwWd4aHF5osZydgdrfC1mhDzRAH&sig=AOD64_3qklE6tYkPA0IPBgDjTZjQPpUiig&ctype=5&q=&sqi=2&ved=2ahUKEwjjytLypZKCAxVjcDwKHTrkBfwQ9aACKAB6BAgCEHY&adurl=',
    },
    {
      title: 'Based: mental, physical, and spiritual mastery',
      imageUrl: '/assets/images/based.jpeg',
      linkUrl: 'https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiYi-DypZKCAxWIxu0KHYWwBYEYABAIGgJkZw&gclid=CjwKCAjw-eKpBhAbEiwAqFL0mlYmL9qx7ibo612kKa8sNnL8MnNzR59Yu4NN0mL13UtRHAkr-HhwOhoCtxoQAvD_BwE&ei=KZ05ZaOSB-Pg8QG6yJfgDw&ohost=www.google.com&cid=CAESVuD21itmQyJ6pgC9_BO3HK0ar9L930Hso7PfEZS8N-NyPdwarSlQsCwHXAxRZdeqTzDeu8BzhfxEyWIs8SlQQOY0YSwWd4aHF5osZydgdrfC1mhDzRAH&sig=AOD64_1mFzXDnoMa9M9ORuKJ4XK1u71Mhw&ctype=5&q=&sqi=2&ved=2ahUKEwjjytLypZKCAxVjcDwKHTrkBfwQ9aACKAB6BAgCEC0&adurl=',
    },
  ];

  const onlinePlatforms = [
    {
      title: 'Online Therapy at Synergy eTherapy',
      imageUrl: '/assets/images/therapy.jpeg',
      linkUrl: 'https://www.synergyetherapy.com/trauma-therapy-ptsd-treatment/',
    },
    {
      title: 'Job Search for PTSD at EPIC Assist',
      imageUrl: '/assets/images/jobsearch.jpeg',
      linkUrl: 'https://epicassist.org/jobseekers/get-started/job-tips-post-traumatic-stress-disorder/',
    },
    {
      title: 'How to cope with Trauma',
      imageUrl: '/assets/images/cope.jpeg',
      linkUrl: 'https://www.helpguide.org/articles/ptsd-trauma/traumatic-stress.htm',
    },
  ];

  return (
    <section className="w-full max-w-full flex flex-col items-start">
      <h1 className="head_text text-left text-3xl font-bold mb-3">
        <span className="blue_gradient">Resources</span>
      </h1>
      <p className="desc text-left max-w-md mb-10">
        Find resources and information to help you on your journey.
      </p>

      <div className="mt-10 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-5">Recommended Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-10">
          {recommendedBooks.map((book, index) => (
            <ResourceCard key={index} {...book} />
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-5">Online Platforms</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {onlinePlatforms.map((platform, index) => (
            <ResourceCard key={index} {...platform} />
          ))}
        </div>
      </div>

      <div className="flex-end mx-3 my-5 gap-4">
        <Link href="/">
          <span className="text-gray-500 text-sm cursor-pointer">Back to Home</span>
        </Link>
      </div>
    </section>
  );
};

export default Resources;
