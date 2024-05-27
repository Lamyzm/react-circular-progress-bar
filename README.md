
<p align='center'> 아래 프로젝트에서 fork 후 dropShadow만 제거한 버전입니다.
<br>
<br>
<a target="_blank" href="https://alptugidin.github.io/react-circular-progress-bar/">Demo</a>
</p>
<br>
<p align="center">
<a href="https://www.npmjs.com/package/@alptugidin/react-circular-progress-bar">
<img src="https://badge.fury.io/js/@alptugidin%2Freact-circular-progress-bar.svg" />
<img alt="npm" src="https://img.shields.io/npm/dm/@alptugidin/react-circular-progress-bar.svg">
</a>
</p>

<p align='center'>
<br>
<img src='https://user-images.githubusercontent.com/31244930/209894184-90420eb5-796f-4f75-83a0-8dcd9b6d7192.gif'/>
</p>
<br>


# Installation
```bash
npm i react-circular-progress-bar-fork-lamyzm
```
or
```bash
yarn add react-circular-progress-bar-fork-lamyzm
```

# Import

```javascript
import {Flat, Heat, Nested} from '@alptugidin/react-circular-progress-bar'
```

# Usage
## Flat

```jsx
<Flat  
   progress={50}
   range={{ from: 0, to: 100 }}
   sign={{ value: '%', position: 'end' }}
   text={'Match'}
   showMiniCircle={true}
   showValue={true}
   sx={{
     strokeColor: '#ff0000',
     barWidth: 5, 
     bgStrokeColor: '#ffffff',
     bgColor: { value: '#000000', transparency: '20' },  
     shape: 'full',
     strokeLinecap: 'round',
     valueSize: 13,
     valueWeight: 'bold',
     valueColor: '#000000',
     valueFamily: 'Trebuchet MS',
     textSize: 13,
     textWeight: 'bold',
     textColor: '#000000',
     textFamily: 'Trebuchet MS',
     loadingTime: 1000,
     miniCircleColor: '#ff0000',
     miniCircleSize: 5,
     valueAnimation: true,
     intersectionEnabled: true
   }}
/>
```
## Props
| Prop name      | Type    | Required | Description                                                                                                                                                                                                                             |
|----------------|---------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| progress       | number  | Yes      | The progress value of the progress bar, ranging from 0 to 100.                                                                                                                                                                          |
| range          | object  | No       | An object containing the `from` and `to` values for the progress bar. The default value is `{ from: 0, to: 100 }`.                                                                                                                      |
| sign           | object  | No       | An object containing the `value` and `position` for the sign displayed in the progress bar. The `value` can be a string, and the `position` can be either `'start'` or `'end'`. The default value is `{ value: '%', position: 'end' }`. |
| text           | string  | No       | The text displayed above the progress bar.                                                                                                                                                                                              |
| showMiniCircle | boolean | No       | A flag indicating whether to show a mini circle at the end of the progress bar. The default value is `true`.                                                                                                                            |
| showValue      | boolean | No       | A flag indicating whether to show the progress value in the progress bar. The default value is `true`.                                                                                                                                  |
| sx             | object  | No       | An object containing CSS styles for customizing the appearance of the progress bar.                                                                                                                                                     |

## Styling
| Property            | Type    | Description                                                                                                                                                          |
|---------------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| barWidth            | number  | The width of the progress bar.                                                                                                                                       |
| strokeColor         | string  | The color of the active progress bar.                                                                                                                                |
| bgStrokeColor       | string  | The color of the background progress bar.                                                                                                                            |
| bgColor             | object  | The color of the background progress bar.  It has two properties: `value`: hex color and `transparency`: number between 00-99 (as string)                            |
| shape               | string  | The shape of the progress bar. Can be `'full'`, `'half'` or `'threequarters'`.                                                                                       |
| strokeLinecap       | string  | The line cap style of the progress bar. Can be `'butt'`, `'round'`, or `'square'`.                                                                                   |
| valueSize           | number  | The font size of the progress value.                                                                                                                                 |
| valueWeight         | string  | The font weight of the progress value.                                                                                                                               |
| valueColor          | string  | The color of the progress value.                                                                                                                                     |
| valueFamily         | string  | The font family of the progress value.                                                                                                                               |
| textSize            | number  | The font size of the text above the progress bar.                                                                                                                    |
| textWeight          | string  | The font weight of the text above the progress bar.                                                                                                                  |
| textColor           | string  | The color of the text above the progress bar.                                                                                                                        |
| textFamily          | string  | The font family of the text above the progress bar.                                                                                                                  |
| loadingTime         | number  | The time it takes for the progress bar to animate from 0 to the specified progress value.                                                                            |
| miniCircleColor     | string  | The color of the mini circle at the end of the progress bar.                                                                                                         |
| miniCircleSize      | number  | The size of the mini circle at the end of the progress bar.                                                                                                          |
| valueAnimation      | boolean | A flag indicating whether to animate the progress value.                                                                                                             |
| intersectionEnabled | boolean | A flag indicating whether to use an intersection observer to only start loading the progress bar when it becomes visible on the screen. The default value is `true`. |

<hr>

## Heat

```jsx
<Heat
  progress={50}
  range ={{ from: 0, to: 100 }}
  sign={{ value: '%', position: 'end' }}
  showValue={true}
  revertBackground={false}
  text={'Match'}
  sx={{
    barWidth: 5,
    bgColor: '#dadada',
    shape: 'half',
    valueSize: 13,
    textSize: 13,
    valueFamily: 'Trebuchet MS',
    textFamily: 'Trebuchet MS',
    valueWeight: 'normal',
    textWeight: 'normal',
    textColor: '#000000',
    valueColor: '#000000',
    loadingTime: 1000,
    strokeLinecap: 'round',
    valueAnimation: true,
    intersectionEnabled: true
  }}
/>
```
## Props

| Prop | Type | Description |
| --- | --- | --- |
| progress | number | The progress value of the progress bar, ranging from 0 to 100. |
| range | object | An object containing the `from` and `to` values for the progress bar. The default value is `{ from: 0, to: 100 }`. |
| sign | object | An object containing the `value` and `position` for the sign displayed in the progress bar. The `value` can be a string, and the `position` can be either `'start'` or `'end'`. The default value is `{ value: '%', position: 'end' }`. |
| showValue | boolean | A flag indicating whether to show the progress value in the progress bar. The default value is `true`. |
| revertBackground | boolean | A flag indicating whether to invert the colors of the progress bar. If `true`, the background color will start as red and gradually turn green as the progress value increases. The default value is `false`. |
| text | string | The text displayed above the progress bar. |
| sx | object | An object containing CSS styles for customizing the appearance of the progress bar. |

## Styling

| Property | Type | Description |
| --- | --- | --- |
| barWidth | number | The width of the progress bar. |
| bgColor | string | The background color of the progress bar. |
| shape | string | The shape of the progress bar. Can be `'full'` or `'half'`. |
| valueSize | number | The font size of the progress value. |
| textSize | number | The font size of the text above the progress bar. |
| valueFamily | string | The font family of the progress value. |
| textFamily | string | The font family of the text above the progress bar. |
| valueWeight | string | The font weight of the progress value. |
| textWeight | string | The font weight of the text above the progress bar. |
| textColor | string | The color of the text above the progress bar. |
| valueColor | string | The color of the progress value. |
| loadingTime | number | The time it takes for the progress bar to animate from 0 to the specified progress value. |
| strokeLinecap | string | The line cap style of the progress bar. Can be `'butt'`, `'round'`, or `'square'`. |
| valueAnimation | boolean | A flag indicating whether to animate the progress value. |
| intersectionEnabled | boolean | A flag indicating whether to use an intersection observer to only start loading the progress bar when it becomes visible on the screen. The default value is `true`. |

<hr>

## Nested

```jsx
<Nested
  circles={[
    {text: 'Javascript', value: 20, color: '#fde047'},
    {text: 'Typescript' ,value: 50, color: '#0ea5e9'},
    {text: 'HTML', value: 8, color: '#c2410c'},
    {text: 'CSS', value: 12, color: '#7c3aed'},
    {text: 'SASS', value: 10, color: '#c026d3'}
  ]}
  sx={{
    bgColor: '#cbd5e1',
    fontWeight: 'bold',
    fontFamily: 'Trebuchet MS',
    strokeLinecap: 'round',
    loadingTime: 1000,
    valueAnimation: true,
    intersectionEnabled: true
  }}
/>
```

## Props
| Prop | Type | Description |
| --- | --- | --- |
| circles | array | An array of objects containing the properties for each circle in the nested progress bar. Each object should have a `text` string, a `value` number, and a `color` string. Must have at least two circles. Can be up to 5.|
| sx | object | An object containing CSS styles for customizing the appearance of the nested progress bar. |

## Styling

| Property | Type | Description |
| --- | --- | --- |
| bgColor | string | The background color of the nested progress bar. |
| fontWeight | string | The font weight of the text in the nested progress bar. |
| fontFamily | string | The font family of the text in the nested progress bar. |
| strokeLinecap | string | The line cap style of the circles in the nested progress bar. Can be `'butt'`, `'round'`, or `'square'`. |
| loadingTime | number | The time it takes for the circles in the nested progress bar to animate from 0 to their specified values. |
| valueAnimation | boolean | A flag indicating whether to animate the values in the circles of the nested progress bar. |
| intersectionEnabled | boolean | A flag indicating whether to use an intersection observer to only start loading the nested progress bar when it becomes visible on the screen. The default value is `true`. |

<hr>

## Licence

[MIT](https://choosealicense.com/licenses/mit/) Alptuğ İdin

  

```
react-circular-progress-bar
├─ 📁lib
│  ├─ 📁components
│  │  └─ 📁CircularProgressBar
│  │     ├─ 📄Flat.tsx
│  │     ├─ 📄Heat.tsx
│  │     └─ 📄Nested.tsx
│  ├─ 📁hooks
│  │  ├─ 📄useAnimatedValue.tsx
│  │  └─ 📄useIntersection.tsx
│  ├─ 📄index.ts
│  └─ 📄types.d.ts
├─ 📁public
│  ├─ 📄left.svg
│  ├─ 📄right.svg
│  └─ 📄vite.svg
├─ 📁src
│  ├─ 📁assets
│  │  └─ 📄react.svg
│  ├─ 📁components
│  │  ├─ 📁CodeHighlighter
│  │  │  ├─ 📄CodeHighlighter.tsx
│  │  │  └─ 📄style.css
│  │  ├─ 📁FlatDemo
│  │  │  ├─ 📄FlatDemo.tsx
│  │  │  └─ 📄Settings.tsx
│  │  ├─ 📁HeatDemo
│  │  │  ├─ 📄HeatDemo.tsx
│  │  │  └─ 📄Settings.tsx
│  │  ├─ 📁NestedDemo
│  │  │  ├─ 📄NestedDemo.tsx
│  │  │  └─ 📄Settings.tsx
│  │  └─ 📄Header.tsx
│  ├─ 📁features
│  │  └─ 📄fontFamilies.ts
│  ├─ 📁utils
│  │  ├─ 📄checkFlatProps.ts
│  │  ├─ 📄checkFlatSx.ts
│  │  ├─ 📄checkHeatProps.ts
│  │  ├─ 📄checkHeatSx.ts
│  │  └─ 📄checkNestedSx.ts
│  ├─ 📄App.tsx
│  ├─ 📄index.css
│  ├─ 📄main.tsx
│  ├─ 📄types.d.ts
│  └─ 📄vite-env.d.ts
├─ 📄.eslintrc.cjs
├─ 📄.gitignore
├─ 📄index.html
├─ 📄package-lock.json
├─ 📄package.json
├─ 📄postcss.config.cjs
├─ 📄README.md
├─ 📄tailwind.config.cjs
├─ 📄tsconfig.json
├─ 📄tsup.config.js
└─ 📄vite.config.ts
```