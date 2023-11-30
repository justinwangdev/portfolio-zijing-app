import React from "react";
import { Image, Link } from "@nextui-org/react";

const Contact = () => {
  return (
    <section id="contact">
      <div className="h-screen grid md:grid-cols-2 m-y-12 py-24 gap-4 justify-center mx-unit-lg">
        <div className="text-default-500 flex flex-col items-center justify-center">
          <h5 className="text-4xl font-bold my-2">{`Let's Connect`}</h5>
          <p className="mt-4 mb-4 max-w-md">
            {`I am looking for connections! Please feel free to contact me through
          LinkedIn or Instagram. I'll try my best to get back to you!`}
          </p>
          <div className="socials flex flex-row gap-2">
            <Link
              href="https://www.instagram.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image src={"/svgs/instagram2.svg"} alt="Instagram Icon" />
            </Link>
            <Link
              href="https://www.linkedin.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image src={"/svgs/linkedin2.svg"} alt="LinkedIn Icon" />
            </Link>
          </div>
        </div>
        <Image
          src={"/imgs/mailbox.png"}
          width={500}
          height={500}
          alt="mailbox"
        />
      </div>
    </section>
  );
};

export default Contact;
