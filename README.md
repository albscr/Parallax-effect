# Parallax Effect

<i>The Parallax effect is a web design technique in which different layers of images or elements move at different speeds as the user scrolls down the page. The result is a sense of depth and three-dimensionality on the page.</i>

## Overview 
<img width="1470" alt="image" src="https://user-images.githubusercontent.com/108294869/233849927-53e60623-f9b3-40bd-a283-4b4e864cf78b.png">

## How I did it...
<ul>
  <li>Using the CSS transform property: translate3d() to change the position of elements on the z-axis.</li>
  <li>Calculating CSS variables using calc() to adjust values based on variables such as the width or height of the browser window.</li>
  <li>Manipulating the background position of a section using the background-position property.</li>
  <li>Using the will-change property to improve the performance of animations.</li>
  <li>Use of the scroll-behavior property to smooth the scroll on the page.</li>
  <li>Use of the text-shadow property to create a shadow effect on the text.</li>
    <li>Use of the overflow property to hide the elements that go out of the limits of the container.</li>
      <li>Use of window.addEventListener() to detect events such as user scroll and update CSS variables accordingly.</li>
</ul>

## Deploy 

https://prueba-parallax.vercel.app/






