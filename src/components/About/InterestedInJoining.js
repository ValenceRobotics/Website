import { SimpleGrid } from "@chakra-ui/react";

function InterestedInJoining() {
  return (
    <div>
      <SimpleGrid columns={{ base: 1, md: 1 }} mt="20" mx="auto" spacing="10">
        <h1 className="text-4xl font-bold text-black font-heading mx-auto dark:text-slate-200">
          <span className="text-dark-orange">Interested</span> in{" "}
          <span className="text-dark-orange">Joining</span>? Fill out the{" "}
          <a
            href="https://forms.gle/XDHLhtjhZRDmcG6q8"
            className="text-dark-orange underline hover:text-dark-orange"
            target="_blank"
            rel="noreferrer"
          >
            member information form
          </a>
        </h1>

        {/* <h2 className="text-3xl md:text-4xl font-bold text-center text-black align-middle font-para"></h2> */}
      </SimpleGrid>
    </div>
  );
}

export default InterestedInJoining;
