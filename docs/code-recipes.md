## Code Recipes

### 1. BEM (styling notation)
This project is using BEM notation for styling. <br/>
**Ex:**
block-name__element-name--modifier

Given the following structure:
```
<div className="product">
    <h1 className="product__title product__title--size_big product__title--color_red">
      Title
    </h1>
</div>
```

- the **block** will be 'product'
- the block contains a **nested element** by the name of 'product__title'
- the **nested element** has two **modifiers** '--size_big' and 'color_red'

**Note:**
- Nested elements are always named in relation to the **block** element, not the parent.
- Don't use modifiers in relationship to the parent/descendant elements. They are general classes that can be applied to any element.

You can find more info by reading: <br/>
https://en.bem.info/methodology/quick-start/

### 2. Styling conventions

For each component (block) we will use a combination of themes and modifiers.

- Themes

A theme is concerned with general styling of the component, therefore it will receive a suggestive name.<br/>
This will be applied as a prop given to the component.

```
theme='red'
```

This theme will have a styling as follows (plus other possible general styles):
```
background: red;
border: 1px solid red;
color: red;
```

If a change in the default style is required, one will extend the theme, creating a new one which will inherit those styles and change the ones required.

**Ex:**
For a change concerning the text color, a theme 'redblue' can be implemented as follows:
```
@extends .red;
color: blue;
```

- Modifiers

Taking into consideration the example above, a modifier will represent a situational change to a components default theme.

**Ex:**
If a change in the buttons size is required, a 'size' modifier will be applied.
```
size-small
```

- Sizing

General media queries will be applied to each theme and specific media queries will be applied, when needed, on specific projects.
