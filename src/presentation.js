// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide
          transition={["zoom"]}
          bgColor="primary"
          style={{ backgroundImage: require("./img/koschei.jpg") }}
        >
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            CSS in JS
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            или игла в яйце
          </Text>
          <Image src={require("./img/koschei.jpg")} />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Немного истории
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            кококой еще истории?
          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image
            src={
              "https://upload.wikimedia.org/wikipedia/commons/6/6c/CSS3_taxonomy_and_status_by_Sergey_Mavrody.svg"
            }
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Image
            src={"http://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg"}
            height={200}
          />
          <Image src={"http://lesscss.org/public/img/less_logo.png"} />
          <Image src={"http://stylus-lang.com/img/stylus-logo.svg"} />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Image src={"http://postcss.org/_/web_modules/Hero/postcss.svg"} />
          <Text textColor="primary">PostCSS</Text>
          <BlockQuote>
            <Quote>Use tomorrow's CSS, today!</Quote>
            <Cite>postcss.org</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor={"secondary"}>
          <Image
            src={
              "https://github.com/chancancode/postcss-canadian-stylesheets/raw/master/canadian-stylesheets.png"
            }
          />
        </Slide>
        <Slide transition={["fade"]} bgColor={"secondary"}>
          <Image
            src={
              "https://github.com/azat-io/postcss-tatar-stylesheets/raw/master/postcss-tatar-stylesheets.png?raw=true"
            }
          />
        </Slide>
        <Slide transition={["fade"]} bgColor={"secondary"}>
          <Heading>CSS Problems</Heading>
          <List textColor="primary">
            <Appear><ListItem>Global Namespace</ListItem></Appear>
            <Appear><ListItem>Isolation</ListItem></Appear>
            <Appear><ListItem>Dependencies</ListItem></Appear>
            <Appear><ListItem>Dead Code Elimination</ListItem></Appear>
            <Appear><ListItem>Not Meant to be Dynamic</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor={"secondary"}>
          <Heading fit>CSS IN JS</Heading>
          <Heading fit textColor="primary"> because... um... why not?</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor={"primary"}>
          <Image src={require("./img/trends.jpg")} />
        </Slide>
        <Slide transition={["fade"]} bgColor={"secondary"}>
          <Image src="http://css-live.ru/wp-content/uploads/2017/11/css-project-example.png" />
        </Slide>
      </Deck>
    );
  }
}
