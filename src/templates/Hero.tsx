import Link from "next/link";

import { Background } from "../background/Background";
import { Button } from "../button/Button";
import { HeroOneButton } from "../hero/HeroOneButton";
import { Section } from "../layout/Section";
import { NavbarTwoColumns } from "../navigation/NavbarTwoColumns";
import { Logo } from "./Logo";
import Image from "next/image";

const Hero = () => {
  return (
    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        <div style={{ width: `100%`, height: `30%` }}>
          {/* <Image
            style={{ zIndex: -1 }}
            src={`/assets/images/bank1.svg`}
            objectFit="contain"
            layout="fill"
            alt={""}
          ></Image> */}
        </div>
        <NavbarTwoColumns logo={<Logo xl />}>
          <li className="hidden">
            <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
              &nbsp;
            </Link>
          </li>
          <li className="hidden">
            <Link href="/">Sign in</Link>
          </li>
        </NavbarTwoColumns>
      </Section>

      <Section yPadding="pt-20 pb-32">
        <HeroOneButton
          title={
            <>
              {
                "SHASHI NAGAR BADNERA ROAD AMRAVATI\n REG. NO. A T I /R S R/C R/123/2002\n DATE OF ESTABLISHMENT :- 19/09/2002\n"
              }
              <span className="text-primary-500">About US</span>
            </>
          }
          description="Shri. Sant Goroba Kaka Nagari Sahakari Credit Society Ltd. is registered under Maharashtra Co-operative Society Act 1960, established on 19th September 2002. To assist people in the society during their financial crisis, Shri. Pandurang Kisanrao Gandhre Founder President came forth with a resolution – Shri. Sant Goroba Kaka Nagari Sahakari Credit Society Ltd., which was founded with 300 members and Rs. 300000 Share Capital. It has now reached 1442 members, 90 lack share capital, 96 lack advances & deposits."
          button={
            <Link className="hidden" href="/">
              <Button xl> &nbsp;</Button>
            </Link>
          }
        />
      </Section>
    </Background>
  );
};

export { Hero };
