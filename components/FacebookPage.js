import Script from 'next/script';

const FacebookPage = () => {
  return (
    <div>
    <Script
        src='https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v13.0'
        strategy='afterInteractive'
        crossOrigin='anonymous'
        async
        defer
        nonce="Cy93CbtV"
        />
    <div
      className="fb-page"
      data-href="https://www.facebook.com/RNWrockeros661/"
      data-tabs="timeline"
      data-width="500"
      data-height="500"
      data-small-header="true"
      data-adapt-container-width="true"
      data-hide-cover="false"
      data-show-facepile="false"
    >
      <blockquote
        cite="https://www.facebook.com/RNWrockeros661/"
        className="fb-xfbml-parse-ignore"
      >
        <a href="https://www.facebook.com/RNWrockeros661/">ROCK &amp; WINGS</a>
      </blockquote>
    </div>
    </div>
  );
};

export default FacebookPage;
