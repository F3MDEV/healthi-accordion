<!-- <p align="center">
  <a href="https://mpds.f3m.pt/" rel="noopener" target="_blank"><img width="350" src="https://i.imgur.com/OANOfLI.png" alt="MPDS logo"></a></p>
</p> -->

<h1 align="center">Healthi-Accordion</h1>

<div align="center">

[React](https://reactjs.org/) component for faster and simpler web development.

<!--
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/mui-org/material-ui/blob/master/LICENSE)
[![npm latest package](https://img.shields.io/npm/v/@material-ui/core/latest.svg)](https://www.npmjs.com/package/@material-ui/core)
[![npm next package](https://img.shields.io/npm/v/@material-ui/core/next.svg)](https://www.npmjs.com/package/@material-ui/core)
[![npm downloads](https://img.shields.io/npm/dm/@material-ui/core.svg)](https://www.npmjs.com/package/@material-ui/core)
[![CircleCI](https://img.shields.io/circleci/project/github/mui-org/material-ui/next.svg)](https://app.circleci.com/pipelines/github/mui-org/material-ui?branch=next)
[![Coverage Status](https://img.shields.io/codecov/c/github/mui-org/material-ui/next.svg)](https://codecov.io/gh/mui-org/material-ui/branch/next)
[![Follow on Twitter](https://img.shields.io/twitter/follow/MaterialUI.svg?label=follow+Material-UI)](https://twitter.com/MaterialUI)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=mui-org/material-ui)](https://dependabot.com)
[![Average time to resolve an issue](https://isitmaintained.com/badge/resolution/mui-org/material-ui.svg)](https://isitmaintained.com/project/mui-org/material-ui 'Average time to resolve an issue')
[![Crowdin](https://badges.crowdin.net/material-ui-docs/localized.svg)](https://translate.material-ui.com/project/material-ui-docs)
[![Open Collective backers and sponsors](https://img.shields.io/opencollective/all/material-ui)](https://opencollective.com/material-ui) -->

</div>

## Installation

Healthi-Accordion is available as an [npm package](npm i healthi-accordion).

```sh
// with npm
npm i healthi-accordion

```

## Usage

Here is a quick example to get you started, **it's all you need**:

```tsx
import * as React from "react";
import HealthiAccordion from "healthi-accordion";

function App() {
  return <HealthiAccordion medTitle="Link2"></HealthiAccordion>;
}

ReactDOM.render(<App />, document.querySelector("#app"));
```

<h4>Props</h4>

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <span>medTitle</span>
      </td>
      <td>
        <div>
          <span>Title of the medication.</span>
        </div>
        <div>
          <div>
            <span>string</span>
          </div>
        </div>
      </td>
      <td>
        <span>Tramadol + Paracetamol, 37.5 mg + 325 mg, Comprimido efervescente, Fita termossoldada
        </span>
      </td>
    </tr>
    <tr>
      <td>
        <span>medAmount</span>
      </td>
      <td>
        <div>
          <span>Amount of the medication.</span>
        </div>
        <div>
          <div>
            <span>React.ReactNode</span>
          </div>
        </div>
      </td>
      <td>
        <span>-</span>
      </td>
    </tr>
    <tr>
      <td>
        <span>dailyRoutine</span>
      </td>
      <td>
        <div>
          <span>How many times patient take the medication daily.</span>
        </div>
        <div>
          <div>
            <span>React.ReactNode</span>
          </div>
        </div>
      </td>
      <td>
        <span>3 por dia</span>
      </td>
    </tr>
    <tr>
      <td>
        <span>accordionDetails</span>
      </td>
      <td>
        <div>
          <span>Insert elements in the accordion details.</span>
        </div>
        <div>
          <div>
            <span>React.ReactNode</span>
          </div>
        </div>
      </td>
      <td>
        <span>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia dui augue, vitae pulvinar leo pretium at. Nunc est mauris, ultrices eu elit quis, rhoncus facilisis velit. Praesent auctor eu sapien sed ultricies. Fusce at tellus varius, pharetra dolor non, feugiat ipsum. Mauris sodales enim nulla, ac pharetra massa porttitor in. Ut id faucibus eros. Morbi pretium sed sapien sit amet scelerisque. Maecenas feugiat gravida fermentum. Aliquam malesuada ligula id lectus facilisis finibus. Pellentesque consequat nibh ut porttitor volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent eget turpis id ligula ultricies rhoncus vitae at lacus. Sed efficitur auctor nibh sed maximus. Duis ullamcorper quam in fringilla egestas. Vestibulum mattis varius ante at blandit. Phasellus felis erat, sollicitudin at sodales id, auctor at ligula."
        </span>
      </td>
    </tr>
    <tr>
      <td>
        <span>dropdownButton</span>
      </td>
      <td>
        <div>
          <span>Insert a button for the dropdown.</span>
        </div>
        <div>
          <div>
            <span>React.ReactNode</span>
          </div>
        </div>
      </td>
      <td>
        <span>"Detalhes"</span>
      </td>
    </tr>
    <tr>
      <td>
        <span>dropdownButton</span>
      </td>
      <td>
        <div>
          <span>Insert a button for the dropdown.</span>
        </div>
        <div>
          <div>
            <span>React.ReactNode</span>
          </div>
        </div>
      </td>
      <td>
        <span>-</span>
      </td>
    </tr>
    <tr>
      <td>
        <span>sideIcons</span>
      </td>
      <td>
        <div>
          <span>Insert elements in the side icons area.</span>
        </div>
        <div>
          <div>
            <span>React.ReactNode</span>
          </div>
        </div>
      </td>
      <td>
        <span>
            <>
                <CancelIcon color="secondary" className="my-auto mx-3">
                </CancelIcon>
            </>
        </span>
      </td>
    </tr>
    <tr>
      <td>
        <span>medAmount</span>
      </td>
      <td>
        <div>
          <span>Info about the med amount.</span>
        </div>
        <div>
          <div>
            <span>React.ReactNode</span>
          </div>
        </div>
      </td>
      <td>
        <span>
            -
        </span>
      </td>
    </tr>
    <tr>
      <td>
        <span>dailyRoutine</span>
      </td>
      <td>
        <div>
          <span>How many times the patient takes the medication a day.</span>
        </div>
        <div>
          <div>
            <span>string</span>
          </div>
        </div>
      </td>
      <td>
        <span>
            3 por dia
        </span>
      </td>
    </tr>
    <tr>
      <td>
        <span>sideIcons</span>
      </td>
      <td>
        <div>
          <span>Insert elements in the side icons area.</span>
        </div>
        <div>
          <div>
            <span>React.ReactNode</span>
          </div>
        </div>
      </td>
      <td>
        <span>
          <CancelIcon style={{color: "#04a0aa"}} className="my-auto mx-3"></CancelIcon>
        </span>
      </td>
    </tr>
  </tbody>
</table>
<br>
Yes, it's really all you need to get started! Try it in:
[CodeSandbox](https://codesandbox.io/)
<br>

## License

No License. "(...) nobody else can copy, distribute, or modify your work without being at risk of take-downs, shake-downs, or litigation."
