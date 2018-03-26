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
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  S,
  Text
} from "spectacle";
import CodeSlide from "spectacle-code-slide";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const links = {
  general: "https://objectpartners.com/2017/11/03/css-in-js-benefits-drawbacks-and-tooling/",
  styled: "https://github.com/styled-components/awesome-styled-components",
  cssinjs: "https://github.com/tuchk4/awesome-css-in-js",
  cantsee: "https://www.youtube.com/watch?v=BXOF_8jDdf8",
  hackern: "https://hackernoon.com/i-swore-never-to-use-css-in-js-here-are-6-reasons-why-i-was-wrong-541fe3dfdeb7",
  medium:  "https://medium.com/@steida/css-in-js-the-argument-refined-471c7eb83955"
}

/* eslint import/no-webpack-loader-syntax: "off" */

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
            <Appear>
              <ListItem>Global Namespace</ListItem>
            </Appear>
            <Appear>
              <ListItem>Isolation</ListItem>
            </Appear>
            <Appear>
              <ListItem>Dependencies</ListItem>
            </Appear>
            <Appear>
              <ListItem>Dead Code Elimination</ListItem>
            </Appear>
            <Appear>
              <ListItem>Not Meant to be Dynamic</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor={"secondary"}>
          <Heading fit>CSS IN JS</Heading>
          <Heading fit textColor="primary">
            {" "}
            because... um... why not?
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor={"primary"}>
          <Image src={require("./img/trends.jpg")} />
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("!!raw-loader!./snippets/styled.js")}
          ranges={[
            {
              loc: [0, 2],
              title: "LETS POSHUKAEM REACT?",
              image: "https://i.giphy.com/media/qmfpjpAT2fJRK/giphy.webp"
            },
            { loc: [ 3, 11] },
            { loc: [12, 18] }
          ]}
        />
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("!!raw-loader!./snippets/radium.js")}
          ranges={[
            { loc: [0, 5] },
            { loc: [5, 6] },
            { loc: [6, 14] },
            { loc: [15, 18] },
            { loc: [19, 22] },
            { loc: [24, 25] },
            { loc: [25, 31] },
            { loc: [32, 43] },
            { loc: [45, 46] }
          ]}
        />
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("!!raw-loader!./snippets/glamorous.js")}
          ranges={[
            { loc: [0, 2] },
            { loc: [3, 9] },
            { loc: [9, 10] }
          ]}
        />
        <Slide transition={["fade"]} bgColor={"secondary"}>
          <Image src={ require('./img/misha.jpg') } />
          <Text textColor="tertiary">
            Миша, тебе с таким реактом денег никто не даст!
          </Text>
        </Slide>
        <CodeSlide
          lang="js"
          code={require("!!raw-loader!./snippets/jss.js")}
          ranges={[
            { loc: [ 0, 3] },
            { loc: [ 4, 6] },
            { loc: [ 8,14] },
            { loc: [14,22] },
            { loc: [22,27] },
            { loc: [29,31] },
            { loc: [32,40] }
          ]}
        />
        <Slide transition={["fade"]} bgColor={"secondary"}>
          <Image src="http://css-live.ru/wp-content/uploads/2017/11/css-project-example.png" />
        </Slide>
        <Slide transition={["zoom"]} bgColor={"tertiary"}>
          <Heading textColor="secondary">LINKS</Heading>
          <List textColor="primary">
            <ListItem>
              <Link href={ links.general } textColor="primary"><S type="underline">General Talks</S></Link>
            </ListItem>
            <ListItem>
              <Link href={ links.cantsee } textColor="primary"><S type="underline">"Can't see dots" talk</S></Link>
            </ListItem>
            <ListItem>
              <Link href={ links.cssinjs } textColor="primary"><S type="underline">Awesome CSS in JS</S></Link>
            </ListItem>
            <ListItem>
              <Link href={ links.styled } textColor="primary"><S type="underline">Awesome Styled Components</S></Link>
            </ListItem>
            <ListItem>
              <Link href={ links.medium } textColor="primary"><S type="underline">CSS in JS - Arguments refined</S></Link>
            </ListItem>
            <ListItem>
              <Link href={ links.hackern } textColor="primary"><S type="underline">I swore not to use JSS</S></Link>
            </ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
