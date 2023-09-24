import { VerticalFeatureRow } from "../feature/VerticalFeatureRow";
import { Section } from "../layout/Section";

const PEOPLE = [
  {
    title: `Shri Bhagwan Narayan Jamkar`,
    image: `/assets/images/people/5.jpeg`,
  },
  {
    title: `Sau. Niramala Sureshrao Nandurkar`,
    image: `/assets/images/people/8.jpeg`,
  },
  {
    title: `Arun Champatrao Pohankar`,
    image: `/assets/images/people/4.jpeg`,
  },
  {
    title: `Shri. Rajendra Ramkrushna Ambulkar`,
    image: `/assets/images/people/3.jpeg`,
  },
  {
    title: `Shri Ravikant Vithalrao Kakde`,
    image: `/assets/images/people/2.jpeg`,
  },
  {
    title: `Shri Umesh Pandurangji Ladvikar`,
    image: `/assets/images/people/6.jpeg`,
  },
  {
    title: `Shri Rameshwar Motiramji Wadurkar`,
    image: `/assets/images/people/10.png`,
  },
  {
    title: `Vivek R. Dhamankar`,
    image: `/assets/images/people/1.jpeg`,
  },
];

const VerticalFeatures = () => (
  <Section title="Key Financial Indicators" description="">
    <h1 className="whitespace-pre-line text-1xl font-bold text-gray-900">
      Since inception Audit class `A`.
    </h1>
    <h1 className="scroll-mt-2 whitespace-pre-line text-1xl font-bold text-gray-900">
      Maximum permissible dividend paid every year.
    </h1>
    <h1 className="whitespace-pre-line text-1xl font-bold text-gray-900">
      Net NPA : 1.82%
    </h1>
    <h1 className="whitespace-pre-line text-1xl font-bold text-gray-900">
      Business philosophy
    </h1>
    <h1 className="whitespace-pre-line text-1xl font-bold text-gray-900">
      We aim at: Evolving ourselves into a strong and sound competitive
      financial system, providing integrated services to customers from all
      segments, leverage on technology and human resources, adopt best
      accounting and ethical practices and fulfill corporate and social
      responsibilities towards all stakeholders, visualize aspiring benchmarks /
      goals and attain them efficiently and effectively.
    </h1>
    <h1 className="whitespace-pre-line text-1xl font-bold leading-hero text-gray-900">
      &nbsp;
    </h1>
    <h1 className="whitespace-pre-line text-1xl font-bold text-gray-900">
      Features :-
    </h1>
    <h1 className="whitespace-pre-line text-1xl font-bold text-gray-900">
      1) 9 % Rate of Interest for Deposits
    </h1>
    <h1 className="whitespace-pre-line text-1xl font-bold text-gray-900">
      2) 14 % Rate of Interest for Loans
    </h1>
    <h1 className="whitespace-pre-line text-1xl font-bold text-gray-900">
      ( Instant loan , with Mortgage or without Mortgage)
    </h1>

    <h1 className="whitespace-pre-line text-1xl font-bold leading-hero text-gray-900">
      &nbsp;
    </h1>
    <h1 className="whitespace-pre-line text-1xl font-bold leading-hero text-gray-900">
      Chairman :-
    </h1>
    <h1 className="whitespace-pre-line text-1xl font-bold text-gray-900">
      Shri Bhagwan Narayan Jamkar{" "}
    </h1>
    <h1 className="whitespace-pre-line text-1xl font-bold text-gray-900">
      Vice Chairperson
    </h1>
    <h1 className="whitespace-pre-line text-1xl font-bold text-gray-900">
      Sau. Niramala Sureshrao Nandurkar
    </h1>
    <h1 className="whitespace-pre-line text-1xl font-bold leading-hero text-gray-900">
      &nbsp;
    </h1>
    <h1 className="whitespace-pre-line text-1xl font-bold text-gray-900">
      Secretary
    </h1>
    <h1 className="whitespace-pre-line text-1xl font-bold text-gray-900">
      Arun Champatrao Pohankar
    </h1>
    <h1 className="whitespace-pre-line text-1xl font-bold leading-hero text-gray-900">
      &nbsp;
    </h1>
    <h1 className="whitespace-pre-line text-1xl font-bold text-gray-900">
      Directors
    </h1>
    <h1 className="whitespace-pre-line text-1xl font-bold text-gray-900">
      Shri. Rajendra Ramkrushna Ambulkar
    </h1>
    <h1 className="whitespace-pre-line text-1xl font-bold text-gray-900">
      Shri Ravikant Vithalrao Kakde
    </h1>
    <h1 className="whitespace-pre-line text-1xl font-bold text-gray-900">
      Shri Umesh Pandurangji Ladvikar
    </h1>
    <h1 className="whitespace-pre-line text-1xl font-bold text-gray-900">
      Shri Arun Gulabrao Savarkar
    </h1>
    <h1 className="whitespace-pre-line text-1xl font-bold text-gray-900">
      Shri Rameshwar Motiramji Wadurkar
    </h1>
    <h1 className="whitespace-pre-line text-1xl font-bold text-gray-900">
      Smt. Prabhatai Subhashrao Bhagwat
    </h1>
    <h1 className="whitespace-pre-line text-1xl font-bold text-gray-900">
      Shri Vivek Rameshrao Dhamankar
    </h1>

    {PEOPLE.map((item) => {
      return (
        <VerticalFeatureRow
          title={item.title}
          description=""
          image={item.image}
          imageAlt={item.title}
        />
      );
    })}
  </Section>
);

export { VerticalFeatures };
