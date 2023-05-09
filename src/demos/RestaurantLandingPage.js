import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  // const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={
          <>
            Earning Rewards with Pinnacle FTSO{" "}
            <HighlightedText>
              Your path to passive income and rewards.
            </HighlightedText>
          </>
        }
        description="Delegate your stake to us and earn a steady stream of rewards while supporting the growth of the Pinnacle.
        Our experienced team of delegators are committed to providing the highest level of security and performance for your stake.
        Join us now and start earning rewards today!"
        // imageSrc="../../images/stake.jpg"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Delegate"
      />
      <MainFeature
        subheading={<Subheading>Established Since 2023</Subheading>}
        heading={
          <>
            How does it work
            <wbr />
          </>
        }
        description={
          <Description>
            Are you looking to earn rewards from the Songbird and Flare
            blockchain networks, but don't want to run your own FTSO (Fault
            Tolerance by State Observation) node? No problem! By delegating your
            stake to our FTSO provider website, you can earn rewards without
            having to manage your own node.
            <br />
            <br />
            Here's how it works:
            <br />
            <br />
            1. Visit our website and connect your wallet. <br />
            2. You can delegate your stake in the Songbird or Flare network to
            our FTSO provider. This will allow us to use your stake to provide
            FTSO services to the network on your behalf. <br />
            3. As our FTSO provider detects and isolates faulty nodes, you will
            earn a share of the rewards for those services. <br />
            4. You can track your rewards and performance here by finding our
            provider name. <br />
            5. You can also undelegate your stake at any time, and your rewards
            will be proportionally credited to your wallet.
            <br />
            <br />
            By delegating to our FTSO provider, you can earn rewards from the
            Songbird and Flare networks without having to manage your own node.
            Plus, you can be sure that our experienced FTSO team will provide
            top-notch service to the network, maximizing your rewards.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Learn More"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      <MainFeature2
        subheading={<Subheading>A Reputed Brand</Subheading>}
        heading={
          <>
            Why <HighlightedText>Choose Us ?</HighlightedText>
          </>
        }
        statistics={[
          {
            key: "Low fee",
            value: "15% fee",
          },
          {
            key: "High reward rate",
            value: "Up to 0.55",
          },
          {
            key: "Transparency",
            value: "100%",
          },
        ]}
        primaryButtonText="Delegate Now"
        primaryButtonUrl="https://order.now.com"
        imageInsideDiv={false}
        imageSrc="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        imageCss={Object.assign(tw`bg-cover w-96`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      />
      {/* <Testimonial
        subheading=""
        heading={
          <>
            Customers <HighlightedText>Love Us.</HighlightedText>
          </>
        }
      /> */}
      {/* <DownloadApp
        text={
          <>
            People around you are ordering delicious meals using the{" "}
            <HighlightedTextInverse>Treact App.</HighlightedTextInverse>
          </>
        }
      /> */}
      <Footer />
    </AnimationRevealPage>
  );
};
